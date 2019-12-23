import {Query} from "react-apollo";
import gql from "graphql-tag";
import Loader from './global/Loader';

import {
  getAuthor,
  getCardImage,
  getDate,
  getExcerpt,
  getLink,
  getTitle} from '../utils/blog';

import Link from 'next/link';

export const postQuery = gql`
query Post {
  posts {
    nodes {
      title
      id
      postId
      content
      date
      excerpt 
      categories {
        nodes {
          name
        }
      }
      details { 
        author {
          id
          name
          firstName
          lastName
          avatar {
            url
          }
        }
        cardImage {
          sourceUrl
        }
        heroImage {
          sourceUrl
        }
      }
    }
  }
}
`;

export default function Blog() {
  return (
    <Query query={postQuery} >
      {({loading, error, data}) => {
        if (error) return <aside>Error loading posts!</aside>;
        if (loading) return <Loader />;

        const posts = data.posts.nodes;

        return (
          <div id="blog" className="container-full">
            <div className="uk-container">
              <p className="heading">Newsroom</p>
              <div uk-slider="true">
                <div className="uk-position-relative uk-visible-toggle uk-margin-large-bottom" tabIndex="-1">
                  <ul className="uk-slider-items uk-child-width-1-3@l uk-child-width-1-2@s uk-grid uk-grid-match" uk-grid="true">
                    {posts.map((post, index) => {
                      const categories = post.categories.nodes;
                      return (
                        <li key={post.id}>
                          <div>
                            <div className="uk-card uk-card-default">
                              {
                                categories.length !== 0 &&
                                    <span className="uk-label uk-label-white">{categories[0].name}</span>
                              }
                              <div className="uk-card-media-top">
                                <img src={getCardImage(post)} alt="" />
                              </div>
                              <div className="uk-card-body">
                                <h3 className="uk-card-title"> {getTitle(post, 40)}</h3>
                                <p className="uk-article-meta black">By {getAuthor(post.details.author)} on {getDate(post)}</p>
                                <p className="uk-margin-small-top card-content">{getExcerpt(post, 160)}</p>
                                <p>
                                  <Link href={getLink(post)}>
                                    <a>read more</a>
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    },
                    )}
                  </ul>
                  <a className="uk-position-center-left uk-position-small" href="#" uk-slidenav-previous="true" uk-slider-item="previous"/>
                  <a className="uk-position-center-right uk-position-small" href="#" uk-slidenav-next="true" uk-slider-item="next"/>
                </div>
                <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin uk-visible@s"/>
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
}
