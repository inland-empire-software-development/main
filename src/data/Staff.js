import {Query} from "react-apollo";
import gql from "graphql-tag";

export const staffQuery = gql`
    query {
        staff {
            nodes {
                operations {
                    title
                    name
                    image {
                        id
                    }
                }
            }
        }
    } 
`;

export default function Staff() {
  return (
    <Query query={staffQuery} >
      {({loading, error, data}) => {
        if (error) return <aside>Error loading posts!</aside>;
        if (loading) return <div>Loading</div>;

        console.log(data.staff);

        return (<h1>hello</h1>);
      }}
    </Query>
  );
}
