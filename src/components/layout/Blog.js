import {Query} from "react-apollo";
import gql from "graphql-tag";

import {
  getAuthor,
  getCardImage,
  getDate,
  getExcerpt,
  getLink,
  getTitle} from '../../utils/blog';

import Button from "../global/Button";

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
      details { 
        author {
          id
          name
          firstName
          lastName
          userId
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
        if (loading) return <div>Loading</div>;

        const posts = data.posts.nodes;
        return (
          <div id="blog" className="container-full">
            <div className="uk-container">
              <div uk-slider="true">

                <div className="uk-position-relative uk-visible-toggle uk-light"
                  tabIndex="-1">

                  <ul className="uk-slider-items uk-child-width-1-3@l
                  uk-child-width-1-2@s uk-grid">
                    {posts.map((post, index) => {
                      return (
                        <li key={post.id}>
                          <div className="uk-card">

                            <div className="uk-card-media-top">
                              <img src={getCardImage(post)} />
                            </div>

                            <div className="uk-card-body">

                              <h3 className="uk-card-title">
                                {getTitle(post, 40)}
                              </h3>

                              <p className="card-author" title="Article author">
                                By {getAuthor(post.details.author)}
                              </p>

                              <time className="card-date"
                                title="Article publish date">
                                {getDate(post)}
                              </time>

                              <p className="card-excerpt">
                                {getExcerpt(post, 210)}
                              </p>


                              <Button
                                link={getLink(post)}
                                classes="uk-align-left card-button"
                                toggle={`target: #article-modal-${index}`}
                                label="read article"
                                width={1}/>
                            </div>
                          </div>
                        </li>
                      );
                    }
                    )}
                  </ul>

                  <a className="uk-position-center-left
            uk-position-small"
                  href="#" uk-slidenav-previous="true" uk-slider-item="previous"
                  />

                  <a
                    className="uk-position-center-right uk-position-small"
                    href="#" uk-slidenav-next="true" uk-slider-item="next"/>

                </div>

                <ul
                  className="uk-slider-nav uk-dotnav uk-flex-center
                  uk-margin uk-visible@s"/>

              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
}
