import {Query} from "react-apollo";
import gql from "graphql-tag";
// import MemberList from "../MemberList"; not in use
import Loader from './global/Loader';

export const jobsQuery = gql `
 query Jobs {
  jobs (first: 100) {
    nodes {
      details {
        department
        description
        experience
        skills
        supervisor
        title
        status
        openings
      }
    }
  }
}
`;

export default function Jobs() {
  return (
    <Query query={jobsQuery} >
      {({loading, error, data}) => {
        if (error) return <aside>Error loading community!</aside>;
        if (loading) return <Loader />;

        const jobs = data.jobs.nodes;

        return (
          <div className="uk-padding-large">
            <div className="uk-container">
              <p className="uk-heading-small white uk-text-center">Available Opportunities</p>
              <div className="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-match uk-margin-medium-top" uk-grid="true">
                {jobs.map((j, index) => {
                  const job = j.details; // mentorship data
                  return (
                    <div key={index}>
                      <div
                        className="uk-card uk-card-default uk-card-body uk-padding-medium" key={index}>
                        {job.status &&
                        <span className="uk-label uk-label-success">Open</span>}
                        {!job.status &&
                        <span className="uk-label uk-label-danger">Closed</span>}
                        <p key={index} className="mentorship-title uk-margin-remove-bottom">
                          {job.title}
                        </p>
                        <p className="uk-margin-remove">{job.department} Department</p>
                        <section className="uk-margin-small-top">
                          <p className="uk-margin-remove">
                            <a className="light-bg" uk-toggle={`target: #job-${index}`} href="#">More Information</a>
                          </p>
                        </section>

                        <div id={`job-${index}`} uk-modal="true">
                          <div className="uk-modal-dialog uk-modal-body">
                            <button className="uk-modal-close uk-button-default" type="button">
                              <span uk-icon="icon: close"/>
                            </button>

                            <p className="uk-modal-title uk-margin-remove-bottom">{job.title}</p>
                            <p className="uk-margin-remove">{job.department} Department</p>

                            <section className="mentorship-details uk-margin-small-top">
                              {job.skills &&
                              <p className="uk-margin-remove"><strong>Skills:</strong> {job.skills}</p>
                              }
                              <p className="uk-margin-remove">
                                <strong>Reports To:</strong> {job.supervisor}
                              </p>
                              <p className="uk-margin-remove">
                                <strong>Spots Available:</strong> {job.openings}
                              </p>
                            </section>

                            <p className="post-content">
                              {job.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                  );
                })}
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
}
