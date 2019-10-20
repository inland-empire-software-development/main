import "../node_modules/@fortawesome/fontawesome-free/js/all";
import "../sass/index.scss";

import reactHtmlParser from "react-html-parser";
import {withRouter} from "next/router";

import {Query} from "react-apollo";
import gql from "graphql-tag";
import moment from "moment";

import Link from "next/link";
import Hero from "../src/components/layout/Hero";
import Footer from "../src/components/global/Footer";


import {
  getAuthor,
  getHeroImage,
  getCardImage,
  getDate,
  getExcerpt,
  getLink,
  getTitle,
} from "../src/utils/blog";
import Breadcrumb from "../src/components/global/Breadcrumb";

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
        if (loading) return <div>Loading</div>;

        const post = data.postBy;
        const categories = post.categories.edges;
        const content = post.content;
        const path = [
          {label: "home", link: "/"},
          {label: "blog", disabled: true},
          {label: post.slug.toLowerCase(), disabled: true},
        ];

        console.log(post);
        return (
          <div id="post" className="post">
            <Hero
              event={false}
              video={false}
              background={getHeroImage(post)}
            />

            <div className="uk-container post-container bg-white">
              <article className="post-content">
                <Breadcrumb path={path}/>

                <h1>{post.title}</h1>
                <section className="post-author">
                  <p className="post-info">
                    {categories[0].node.name}<br/>
                    {moment(post.date).format("MMMM Do, Y")}
                  </p>
                  <span className="seperator"/>
                  <p className="post-author-info">
                    <img src={post.details.author.avatar.url}/>
                    <Link href="#">
                      <a className="article-author">
                        {getAuthor(post.details.author)}
                      </a>
                    </Link>
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