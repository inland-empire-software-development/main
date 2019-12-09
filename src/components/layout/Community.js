import {Query} from "react-apollo";
import gql from "graphql-tag";
import MemberList from "../MemberList";
import Loader from '../global/Loader';

export const communityQuery = gql `
  query Community {
    community {
      nodes {
        details {
          dateOfEvent
          description
          imageCard {
            sourceUrl
          }
          imageModal {
            sourceUrl
          }
        }
        order {
          position
        }
      }
    }
  }
  
`;

export default function community() {
  return (
    <Query query={communityQuery} >
      {({loading, error, data}) => {
        if (error) return <aside>Error loading community!</aside>;
        if (loading) return <Loader />;

        const community = data.community.nodes.sort((a, b) =>
          a.order.position - b.order.position);

        console.log(community);
        return (
          <div
            id="community-container"
            className="container-full"
            style={{backgroundImage:
              "url(\"/static/images/desktop/iesd-bg-light.jpg\")",
            }}>

            <div className="container-full memberList-container">
              <div className="uk-container">
                <p className="memberlist-header heading">{ }</p>
                <div uk-slider="true">
                  <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s
            uk-child-width-1-5@m uk-grid">
                    {community.map((moment, index) => {
                      const {
                        dateOfEvent,
                        description,
                        imageCard,
                        imageModal} = moment.details;

                      return (<li key={index}>
                        <div className="uk-card uk-card-default">
                          <div className="uk-card-media-top">
                            <img uk-image="true" src={
                                  imageCard ?
                                    imageCard.sourceUrl :
                                    "/static/images/desktop/placeholder.jpg"
                            } alt={dateOfEvent} title={description} />
                          </div>
                        </div>
                      </li>
                      );
                    },
                    )}
                  </ul>
                  <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"/>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
}
