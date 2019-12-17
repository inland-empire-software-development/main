import reactHtmlParser from "react-html-parser";
import {withRouter} from "next/router";

import {Query} from "react-apollo";
import gql from "graphql-tag";
import moment from "moment";

import Breadcrumb from "../src/components/global/Breadcrumb";
import Hero from "../src/components/Hero";
import Footer from "../src/components/global/Footer";
import Loader from "../src/components/global/Loader";

import {
  getAuthor,
  getHeroImage,
  getTitle,
} from "../src/utils/blog";
import Announcement from '../src/components/global/Announcement';

const postQuery = gql`
    query ($postId: Int!) {
        postBy(postId: $postId) {
            title
            id
            content
            slug
            date
            excerpt
            categories {
                edges {
                    node {
                        id
                        name
                    }
                }
            }
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
        if (loading) return <Loader />;

        const post = data.postBy;
        const categories = post.categories.edges;
        const content = post.content;
        const path = [
          {label: "home", link: "/"},
          {label: "blog", disabled: true},
          {label: post.title.toLowerCase(), disabled: true},
        ];

        return (
          <div id="post" className="post">
            <Announcement />
            <Hero
              event={false}
              video={false}
              background={getHeroImage(post)}
            />

            <div className="uk-container post-container bg-white">
              <article className="post-content">
                <Breadcrumb path={path}/>

                <h1>{getTitle(post, 180)}</h1>

                <section className="post-author">
                  <p className="post-info">
                    {categories[0].node.name}<br/>
                    {moment(post.date).format("MMMM Do, Y")}
                  </p>

                  <span className="seperator"/>

                  <p className="post-author-info">
                    <img src={post.details.author.avatar.url}/>
                    {getAuthor(post.details.author)}
                  </p>
                </section>

                <section className="post-copy">
                  {reactHtmlParser(content)}
                </section>
              </article>
            </div>

            <Footer/>
          </div>
        );
      }}
    </Query>
  );
}

export default withRouter(Post);
