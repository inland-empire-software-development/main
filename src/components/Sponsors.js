import {Query} from "react-apollo";
import gql from "graphql-tag";
import Loader from './global/Loader';

export const sponsorsQuery = gql`
query Sponsor {
  sponsors (first: 100) {
    nodes {
      details {
        company
        link
        image {
          sourceUrl
        }
      }
    }
  }
}
`;

export default function Sponsors() {
  return (
    <Query query={sponsorsQuery} >
      {({loading, error, data}) => {
        if (error) return <aside>Error loading sponsors!</aside>;
        if (loading) return <Loader />;

        const sponsors = data.sponsors.nodes;
        return (
          <div className="container-full sponsor-background">
            <div id="sponsors" className="uk-container ">
              <p className="heading">Our Sponsors</p>
              <p>
                Our work is made possible by the following sponsors
              </p>
              <div className="uk-grid-small uk-child-width-1-3@s
                uk-child-width-1-4@m uk-flex-center uk-grid" uk-grid="true">
                {sponsors.map((sponsor, index) => sponsor.details.image &&
                  <div key={index}>
                    <a href={sponsor.details.link}>
                      <img src={sponsor.details.image.sourceUrl}
                        title={sponsor.details.company} />
                    </a>
                  </div>,
                )}
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
}
