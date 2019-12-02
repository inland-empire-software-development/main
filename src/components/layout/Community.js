import {Query} from "react-apollo";
import gql from "graphql-tag";
import Loader from '../global/Loader';

import MemberList from "../MemberList";

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

  return (
    <div id="community-container" className="container-full" style={{
      backgroundImage:
        "url(\"/static/images/desktop/iesd-bg-light.jpg\")",
    }}>
      <div id="community" className="uk-container">
        <div uk-slider="true">
          <ul className="uk-slider-items uk-child-width-1-2@s
      uk-child-width-1-4@m uk-grid">
             <MemberList
            label="Community"
            warning={true}
            members={data.community.nodes.sort((a, b) =>
                a.order.position - b.order.position).map((member) => {
                return {            
                  image: member.details.imageCard.sourceUrl
              };
            })}/>
          </ul>
          <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
        </div>
      </div>
    </div>
        );
      }}
    </Query>
  );
}
