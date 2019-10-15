import {Query} from "react-apollo";
import gql from "graphql-tag";

import MemberList from "../MemberList";

export const staffQuery = gql`
    query Staff{
        staff {
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

export default function Operations() {
  return (
    <Query query={staffQuery} >
      {({loading, error, data}) => {
        if (error) return <aside>Error loading staff!</aside>;
        if (loading) return <div>Loading</div>;

        return (<MemberList
          label="Operations"
          members={data.staff.nodes.sort((a, b) =>
            a.order.position - b.order.position).map((member) => {
            return {
              name: member.details.name,
              title: member.details.title,
              image: member.details.image.sourceUrl,
            };
          })}/>);
      }}
    </Query>
  );
}
