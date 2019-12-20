import {Query} from "react-apollo";
import gql from "graphql-tag";
import Loader from './global/Loader';

import MemberList from "./MemberList";

export const staffQuery = gql`
    query Speakers {
        speakers (first: 100) {
            nodes {
                details {
                    title
                    name
                    image {
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

export default function Speakers() {
  return (
    <Query query={staffQuery} >
      {({loading, error, data}) => {
        if (error) return <aside>Error loading speakers!</aside>;
        if (loading) return <Loader />;

        return (
          <div id="speakers" className="uk-margin-medium-bottom">
            <MemberList
              label="Speakers"
              warning={true}
              members={data.speakers.nodes.sort((a, b) =>
                a.order.position - b.order.position).map((member) => {
                return {
                  name: member.details.name,
                  title: member.details.title,
                  image: member.details.image.sourceUrl,
                };
              })}/>
          </div>
        );
      }}
    </Query>
  );
}
