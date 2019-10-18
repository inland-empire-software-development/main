import '../node_modules/@fortawesome/fontawesome-free/js/all';
import '../sass/index.scss';

import {withRouter} from 'next/router';

import {Query} from "react-apollo";
import gql from "graphql-tag";
import moment from 'moment';

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
        console.log(post.details.heroImage.sourceUrl);
        return (
          <div id="post" className="post">
            <Hero
              event={false}
              video={false}
              background={post.details.heroImage.sourceUrl}
            />

            <Footer />
          </div>
        );
      }}
    </Query>
  );
}

export default withRouter(Post);
