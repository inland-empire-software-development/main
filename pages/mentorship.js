import Footer from "../src/components/global/Footer";
import Announcements from "../src/components/global/Announcement";
import Button from "../src/components/global/Button";
import {withRouter} from "next/router";
import Nav from '../src/components/global/Nav';
import PageTitle from '../src/components/PageTitle';
import Mentorships from "../src/components/Mentorships";

function Mentorship() {
  // initial render
  return (
    <div className="mentorship">
      <Announcements/>

      <div className="uk-container" style={{height: "0"}}>
        <Nav />
      </div>

      <PageTitle
        title="Mentorship"
        url="../../static/images/mentorship/page-header.jpg"/>

      <div className="uk-container uk-margin-large-top">
        <div className="uk-column-1-2@m">
          <p className="heading">What is a Mentorship</p>
          <p className="body-content">
            Our mentorship program focuses on the skill
            development and the empowerment of community members. It
            provides successful applicants<span className="red">* </span>
            access to a mentor whose skills
            align with their desired future role and a mentored project to
            help them gain experience. Our goal is to provide members a faster
            and clearer path to skill competency.
          </p>
          <div>
            <figure>
              <img className="mentorship-intro-image right" src="/static/images/mentorship/peer-to-peer-mentorship.jpg"/>
              <figcaption className="right">
                Tony Nguyen & Johnathan Nguyen
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      <div
        className="grid-container mentorship-parallax-amber"
        style={{
          backgroundImage: `url("../static/images/mentorship/mentorship-amber-parallax.jpg")`,
        }}>
        <div className="parallax-overlay-black"/>
        <div className="uk-container">
          <h1 className="white">
            “A mentor is someone who allows you to see the hope inside yourself.”
            — Oprah Winfrey
          </h1>
        </div>
      </div>

      <div className="uk-container uk-margin-large-bottom uk-margin-large-top">
        <div className="uk-column-1-2@m">
          <div>
            <figure>
              <img className="mentorship-intro-image left"
                src="../static/images/mentorship/mentorship-parker.jpg"
              />
              <figcaption className="left">
                Joaquin Martinez, Eden Ragsdale & Parker Bjur
              </figcaption>
            </figure>
          </div>
          <div>
            <p className="heading">Benefits of a Mentorship</p>
            <p className="body-content">
             The advantages of the mentorship program extend to all involved in
             the program, including our organization. As a mentee, you develop
             skill competency faster, learn to manage professional
             relationships, expand your network contacts, improve your
             communication skills, gain confidence in your skills and gain
             development experience.
            </p>
          </div>
        </div>
      </div>

      <div
        className="grid-container mentorship-parallax-background"
        style={{
          backgroundImage:
               `url("../static/images/mentorship/mentorship-parallax-background.jpg")`,
        }}>

        <div className="parallax-overlay-black"/>
        <Button link="/forms/mentorship" label="Apply for Mentorship" width="0"/>
      </div>

      {/* Content */}
      <div className="uk-container uk-margin-large-bottom uk-margin-large-top">
        {/* peer to peer mentorship cards*/}
        <p className="heading">
          What is the Mentorship program?
        </p>
        <p className="body-content">
          We have two types of mentorship programs.
        </p>
        <p className="body-content">The <strong>traditional</strong> program matches a successful applicant with an industry professional who will mentor them for 6-12 weeks. The length of the mentorship depends on the availability of the mentor. Along with a mentor, the mentee is assigned to an open source project that they will be contributing to. This will allow the mentee to gain experience in the field, give back to their community and utilize what they are learning.</p>

        <p className="body-content">The <strong>peer-to-peer</strong> program matches applicants with a peer, or group of peers, to work on a real world project that will be overseen by a mentor. The project you work on can be one that the group comes up with or an existing open source project that aligns with the skills members are trying to sharpen. This approach focuses on sharpening skills and nurturing the entrepreneurial side of our members.
        </p>

        <div
          className="uk-grid-column-small uk-grid-row-large uk-child-width-1-2@s"
          uk-grid="true">
          <div>
            <div className="uk-card uk-card-default uk-card-body">
              <span className="uk-label uk-label-success">open</span>
              <p>Traditional</p>
              <ul className="text-light leader-1">
                <li>Mentor<span className="blue">*</span> provided</li>
                <li>Access to a Mentor</li>
                <li>Meeting with mentor twice a month</li>
                <li>Mentored project</li>
                <li>Skill proficiency focused</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="uk-card uk-card-default uk-card-body">
              <span className="uk-label uk-label-success ">open</span>
              <p>Peer-to-Peer</p>
              <ul>
                <li>Partnered with a Peer<span
                  className="red">*</span>
                </li>
                <li>Shared access to a community mentor<span
                  className="green">*</span></li>
                <li>Guided project</li>
                <li>Skill proficiency and entrepreneurship focused
                </li>
              </ul>
            </div>
          </div>

          <p>
            <small className="left">
              <span className="blue">*</span> Mentor is a working
              industry professional</small>
            <small className="text-left left uk-display-block">
              <span className="red">*</span> A peer is a member
              within proximity to your skill level
            </small>
            <small className="text-left left uk-display-block">
              <span className="green">*</span> A community mentor is a
              member that has professional experience with the
              skills a mentee is working on. A community mentor is
              not dedicated to just one mentee.
            </small>
          </p>
        </div>

      </div>

      <div className="grid-container mentorship-parallax-robin"
        style={{
          backgroundImage:
               `url("../static/images/mentorship/mentorship-members-v1.jpg")`,
        }}>
        <div className="parallax-overlay-black"/>
      </div>

      <div className="uk-container uk-margin-large-top uk-margin-large-bottom">
        <div className="uk-column-1-2@m">
          <p className="heading">Interested in Applying?</p>
          <p className="body-content">
            A successful applicant is a community member that applies, meets all the minimum requirements and is sent an e-mail of acceptance. Applicants normally know within 2-3 weeks if they have been accepted or not. As this is a community driven program with working professionals in the industry, we unfortunately cannot guarantee everyone a mentor.
          </p>
          <div style={{paddingTop: '15px'}}>
            <strong>Requirements:</strong>
            <hr/>
            <ul>
              <li>
                Must be open to having work critiqued, reviewed and corrected.
              </li>
              <li>
                Basic grasp of the syntax for the language applicant is
                seeking mentorship in.</li>
              <li>
                Willingness to work on an open source project that aligns
                with the skills they're seeking mentorship in.</li>
              <li>
                Willingness to network with working industry professionals.
              </li>
              <li>
                Applicant can commit 10-15 hours a week of development time.
              </li>
              <li>
                Applicant commits to having open communication with mentor and
                the organization. (progress, issues, concerns, etc.)</li>
            </ul>
          </div>
        </div>
        <div>
          <p className="uk-margin-large-top">
            <Button link="/forms/mentorship" label="Mentorship Application" width={3}/>
          </p>
        </div>
      </div>

      <Mentorships/>

      <div className="uk-container uk-margin-large-top uk-margin-large-bottom">
        <div className="uk-column-1-2@m">
          <p className="heading">Mentoring</p>
          <p className="body-content">
            To become a mentor, you must meet the minimum requirements below.
            You must also have worked or currently work in the industry, using
            the skills you will be mentoring others in. You will be impacting
            the lives of people and you will become a resource of knowledge.
            This comes with a tremendous level of responsibility, make sure to
            apply only if you have the time and willingness to help others in
            your community.
          </p>
          <div>
            <figure>
              <img src="../static/images/mentorship/mentorship-ziah.jpg" />
              <figcaption>Ziah Miller & Jake Marshall</figcaption>
            </figure>
          </div>
        </div>
      </div>

      <div className="uk-container uk-margin-large-bottom uk-margin-large-top">
        <div>
          <strong>Mentor Requirements:</strong>
          <ul>
            <li>Be accessible via Slack during the mentorship.</li>
            <li>Be able to meet with mentee at least twice a month.</li>
            <li>Posses proficiency in the areas seeking to mentor
                community members in.</li>
            <li>Treat mentee with respect and professionalism.</li>
            <li>Have open communication with the organization regarding the
                progress of the mentee, issues and concerns.</li>
          </ul>
        </div>

        <div className="uk-margin-large-top">
          <Button link="/forms/mentor" label="Become a Mentor" width={3}/>
        </div>
      </div>


      <Footer/>
    </div>
  );
}
export default withRouter(Mentorship);
