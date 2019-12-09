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

        return (
          <div id="community-container" className="container-full" style={{
            backgroundImage:
              "url(\"/static/images/desktop/iesd-bg-light.jpg\")",
          }}>
            <MemberList
              label="Community"
              warning={true}
              members={data.community.nodes.sort((a, b) =>
                a.order.position - b.order.position).map((member) => {
                return {
                  image: member.details.imageCard.sourceUrl,
                };
              })}/>
          </div>
        );
      }}
    </Query>
  );
}
