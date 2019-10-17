import {Query} from "react-apollo";
import gql from "graphql-tag";
import ReactHtmlParser from 'react-html-parser';
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

                  <ul className="uk-slider-items uk-child-width-1-4@l uk-grid">
                    {posts.map((post, index) => {
                      const author = post.details.author;
                      return (
                        <li>
                          <div className="uk-card">
                            <div className="uk-card-media-top">
                              <img src={post.details.cardImage.sourceUrl} />
                            </div>
                            <div className="uk-card-body">
                              <h3 className="uk-card-title">
                                {post.title > 40 ?
                                    post.title.substring(0, 40) + "…" :
                                    post.title}
                              </h3>
                              {/* <p className="card-author-image">*/}
                              {/*  <img src={post.details.author.avatar.url} />*/}
                              {/* </p>*/}
                              <p className="card-author">
                                {author.firstName + " " + author.lastName}
                              </p>
                              <p className="card-excerpt">
                                {post.excerpt
                                    .replace("<p>", "")
                                    .replace("</p>", "")}
                              </p>

                              <Button
                                classes="uk-align-left"
                                toggle={`target: #article-modal-${index}`}
                                label="Read Story"
                                width={2}/>
                            </div>
                          </div>

                          <div id={`article-modal-${index}`} uk-modal="true"
                            className="post-modal">
                            <div className="uk-modal-dialog uk-modal-body">
                              <h2 className="uk-modal-title">{post.title}</h2>
                              <p><strong>{post.title}</strong></p>
                              <p>
                                { ReactHtmlParser(post.content) }
                              </p>
                              <span className="uk-modal-close"
                                uk-icon={`icon: close; ratio: 2`}/>
                            </div>
                          </div>
                        </li>
                      );
                    }
                    )}
                  </ul>

                  <a className="uk-position-center-left
            uk-position-small uk-hidden-hover"
                  href="#" uk-slidenav-previous uk-slider-item="previous"/>
                  <a
                    className="uk-position-center-right uk-position-small
              uk-hidden-hover"
                    href="#" uk-slidenav-next uk-slider-item="next"/>

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
