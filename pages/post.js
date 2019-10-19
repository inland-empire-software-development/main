import '../node_modules/@fortawesome/fontawesome-free/js/all';
import '../sass/index.scss';

import reactHtmlParser from 'react-html-parser';
import {withRouter} from 'next/router';

import {Query} from "react-apollo";
import gql from "graphql-tag";
import moment from 'moment';

import Link from 'next/link';
import Hero from "../src/components/layout/Hero";
import Footer from "../src/components/global/Footer";

const postQuery = gql`
    query ($postId: Int!) {
        postBy(postId: $postId) {
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
`;

function Post(props) {
  const {query} = props.router;

  // initial render
  return (
    <Query query={postQuery} variables={{postId: query.id}}>
      {({loading, error, data}) => {
        if (error) return <aside>Error loading posts!</aside>;
        if (loading) return <div>Loading</div>;

        const post = data.postBy;
        const content = post.content;

        console.log(post);
        return (
          <div id="post" className="post">
            <Hero
              event={false}
              video={false}
              background={post.details.heroImage.sourceUrl}
            />

            <div className="uk-container post-container bg-white">
              <article className="post-content">
                <h1>{post.title}</h1>
                <section className="post-author">
                  <p>
                    {moment(post.date).format("MMMM Do, Y")}
                  </p>
                  <span className="seperator" />
                  <p>
                    <img src={post.details.author.avatar.url} />
                    <Link>
                      {post.details.author.firstName + " " + post.details.author.lastName}
                    </Link>
                  </p>
                </section>
                <section className="post-copy">
                  { reactHtmlParser(content) }
                </section>
              </article>
            </div>

            <Footer />
          </div>
        );
      }}
    </Query>
  );
}

export default withRouter(Post);
