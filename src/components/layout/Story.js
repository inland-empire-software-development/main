import {Query} from "react-apollo";
import gql from "graphql-tag";
import Button from '../global/Button';

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
        const social =
          ["twitter", "instagram", "linkedin", "github", "facebook"];

        return (
          <div id="story-container"
            className="container-full bg-black" >
            <div id="story" className="uk-container">
              <img className="story-image"
                alt="Felipe"
                src={story.details.image.sourceUrl}
              />
              <div className="story-content">
                <p className="heading">Success Story</p>
                <img className="story-image-mobile"
                  alt="Felipe"
                  src={story.details.image.sourceUrl}
                />
                <p className="story-header">
                  <span className="name">{story.details.name}</span>
                  <span className="red"> - </span>
                  <span className="title">{story.details.title}</span>
                </p>
                <p className="story-social">
                  {social.map((outlet, index) => story.details[outlet] &&
                    <a key={index} href={story.details[outlet]}>
                      <span uk-icon={`icon: ${outlet}; ratio: 1`}/>
                    </a>
                  )}
                </p>
                <p className="story-text">
                  {story.details.content.substring(0, 200) + "…"}
                </p>

                <Button
                  classes="uk-align-left"
                  toggle="target: #story-modal"
                  label="Read Story"
                  width={2}/>
              </div>
            </div>

            <div id="story-modal" uk-modal="true">
              <div className="uk-modal-dialog uk-modal-body">
                <h2 className="uk-modal-title">{story.details.name}</h2>
                <p><strong>{story.details.title}</strong></p>
                <p>
                  {story.details.content}
                </p>
                <span className="uk-modal-close"
                  uk-icon={`icon: close; ratio: 2`}/>
              </div>
            </div>
          </div>);
      }}
    </Query>
  );
}
