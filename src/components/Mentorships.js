import {Query} from "react-apollo";
import gql from "graphql-tag";
// import MemberList from "../MemberList"; not in use
import Loader from './global/Loader';

export const mentorshipQuery = gql `
 query Mentorships {
  mentorships (first: 100) {
    nodes {
      details {
        title
        technology
        projectName
        projectLink
        projectDescription
        mentor
        length
        openings
        status
      }
    }
  }
} 
`;

export default function Mentorships() {
  return (
    <Query query={mentorshipQuery} >
      {({loading, error, data}) => {
        if (error) return <aside>Error loading community!</aside>;
        if (loading) return <Loader />;

        const mentorships = data.mentorships.nodes;

        return (
          <div className="uk-padding-large bg-yellow">
            <div className="uk-container">
              <p className="uk-heading-small white uk-text-center">Mentorships</p>
              <div className="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-match uk-margin-medium-top" uk-grid="true">
                {mentorships.map((mentorship, index) => {
                  const project = mentorship.details; // mentorship data
                  return (
                    <div key={index}>
                      <div
                        className="uk-card uk-card-default uk-card-body uk-padding-large" key={index}>
                        {project.status &&
                        <span className="uk-label uk-label-success">Open</span>}
                        {!project.status &&
                        <span className="uk-label uk-label-danger">Closed</span>}
                        <p key={index} className="mentorship-title">
                          {project.projectName}
                        </p>

                        <section className="uk-margin-small-top">
                          <p className="uk-margin-remove">
                            <a className="light-bg" uk-toggle={`target: #mentorship-${index}`} href="#">See description</a>
                          </p>
                          <p className="uk-margin-remove">
                            <a className="light-bg" href={project.projectLink}>View Project Repository</a>
                          </p>
                        </section>

                        <div id={`mentorship-${index}`} uk-modal="true">
                          <div className="uk-modal-dialog uk-modal-body">
                            <button className="uk-modal-close uk-button-default" type="button">
                              <span uk-icon="icon: close"/>
                            </button>

                            <p className="uk-modal-title">{project.projectName}</p>
                            <p><strong>{project.title}</strong></p>

                            <section className="mentorship-details uk-margin-small-top">
                              <p className="uk-margin-remove">
                                <strong>Title:</strong> {project.title}
                              </p>
                              <p className="uk-margin-remove"><strong>Technology:</strong> {project.technology}</p>
                              <p className="uk-margin-remove">
                                <strong>Mentor:</strong> {project.mentor}
                              </p>
                              <p className="uk-margin-remove">
                                <strong>Spots Available:</strong> {project.openings}
                              </p>
                              <p className="uk-margin-remove">
                                <strong>Length:</strong> {project.length}
                              </p>
                            </section>

                            <p className="post-content">
                              {project.projectDescription}
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
