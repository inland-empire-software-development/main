import {Query} from "react-apollo";
import gql from "graphql-tag";
import moment from 'moment';

import Button from "../global/Button";

export const postQuery = gql`
query Post {
  posts {
    nodes {
      title
      id
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

// helper functions
function getTitle(post, length) {
  return post.title > length ?
    post.title.substring(0, length) + "…" :
    post.title;
}

function getExcerpt(post, length) {
  const excerpt = post.excerpt
      .replace("<p>", "")
      .replace("</p>", "");

  return excerpt.length > length ? excerpt.substring(0, length) + "…" : excerpt;
}

function getAuthor(author) {
  return author.firstName + " " + author.lastName;
}

function getDate(post) {
  return moment(post.date).format("M/D/Y");
}

export default function Blog() {
  return (
    <Query query={postQuery} >
      {({loading, error, data}) => {
        if (error) return <aside>Error loading posts!</aside>;
        if (loading) return <div>Loading</div>;

        const posts = data.posts.nodes;
        console.log(posts);
        return (
          <div id="blog" className="container-full">
            <div className="uk-container">
              <div uk-slider="true">

                <div className="uk-position-relative uk-visible-toggle uk-light"
                  tabIndex="-1">

                  <ul className="uk-slider-items uk-child-width-1-3@l uk-child-width-1-2@s uk-grid">
                    {posts.map((post, index) => {
                      return (
                        <li key={post.id}>
                          <div className="uk-card">

                            <div className="uk-card-media-top">
                              <img src={post.details.cardImage.sourceUrl} />
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
            uk-position-small uk-hidden-hover"
                  href="#" uk-slidenav-previous="true" uk-slider-item="previous"
                  />

                  <a
                    className="uk-position-center-right uk-position-small
              uk-hidden-hover"
                    href="#" uk-slidenav-next="true" uk-slider-item="next"/>

                </div>

                <ul
                  className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"/>

              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
}
