import {Query} from "react-apollo";
import gql from "graphql-tag";
import MemberList from '../MemberList';

export const storiesQuery = gql`
 query Stories {
  stories {
    nodes {
      details {
        content
        facebook
        image {
          sourceUrl
        }
        github
        instagram
        linkedin
        name
        title
        twitter
      }
      order {
        position
      }
    }
  }
}
`;

export default function Story() {
  return (
    <Query query={storiesQuery} >
      {({loading, error, data}) => {
        if (error) return <aside>Error loading stories!</aside>;
        if (loading) return <div>Loading</div>;

        const stories = data.stories.nodes.length;
        const story = data.stories.nodes[Math.floor(Math.random() * stories )];

        console.log(story);
        return (
          <div id="story-container"
            className="container-full black-white" >
            <div id="story" className="uk-container">
              <img className="story-image"
                   alt="Felipe"
                   src={story.details.image.sourceUrl}
              />
              GI
            </div>
          </div>);
      }}
    </Query>
  );
}
