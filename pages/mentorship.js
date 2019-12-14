import Footer from "../src/components/global/Footer";
import Announcements from "../src/components/global/Announcement";
import Button from "../src/components/global/Button";

import "../sass/index.scss";

import {withRouter} from "next/router";
import PageTitle from '../src/components/PageTitle';

function Mentorship() {
  // initial render
  return (
    <div className="mentorship">
      <Announcements/>

      {/* <PageTitle title="Mentorship"/>*/}
      <PageTitle/>

      <div className="uk-container uk-margin-large-top">
        <div className="uk-column-1-2@m">
          <h1 className="heading">What is a Mentorship</h1>
          <p className="body-content">
            Our mentorship program focuses on the skill
            development and the empowerment of community members. It
            provides successful applicants<span className="red">*</span>
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

        <div
          className="grid-container mentorship-parallax-amber"
          style={{
            backgroundImage: `url("../static/images/mentorship/mentorship-amber-parallax.jpg")`,
          }}>
          <div className="parallax-overlay-black"/>
          <h1 className="pre-2 white">
            “A mentor is someone who allows you to see the hope inside yourself.”
            — Oprah Winfrey
          </h1>
        </div>

        <div className="grid-container content leader-3">
          <div className="column-20 pre-2 padding-leader-2 padding-trailer-2">

            <div className="column-10">
              <figure>
                <img className="mentorship-intro-image left"
                     src="../static/images/mentorship/mentorship-parker.jpg"
                />
                <figcaption className="left">
                  Joaquin Martinez, Eden Ragsdale & Parker Bjur
                </figcaption>
              </figure>
            </div>


            <div className="column-10">
              <h1 className="heading">Benefits of a Mentorship</h1>
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

        {/* Content */}
        <div className="grid-container content">
          {/* peer to peer mentorship cards*/}
          <div className="column-20 pre-2 padding-leader-2 padding-trailer-2">
            <div className="column-5">
              <h2 className="text-darker-gray leader-3 font-size-5">
                A community mentorship program
              </h2>
            </div>

            <div className="column-14 pre-1">
              <div className="block-group block-group-2-up trailer-2 leader-2">

                {/* <Card color="yellow"*/}
                {/*  title="Traditional"*/}
                {/*  subTitle="open"*/}
                {/*  description={*/}
                {/*    <section className="text-light leader-1">*/}
                {/*      <ul className="text-light leader-1">*/}
                {/*        <li>Mentor<span className="red">*</span> provided</li>*/}
                {/*        <li>Access to a Mentor</li>*/}
                {/*        <li>Meeting with mentor twice a month</li>*/}
                {/*        <li>Mentored project</li>*/}
                {/*        <li>Skill proficiency focused</li>*/}
                {/*      </ul>*/}

                {/*      <small className="left">*/}
                {/*        <span className="red">*</span> Mentor is a working*/}
                {/*            industry professional</small>*/}
                {/*    </section>*/}
                {/*  }/>*/}

                {/* <Card color="green"*/}
                {/*  title="Peer-to-Peer"*/}
                {/*  subTitle="open"*/}
                {/*  description={*/}
                {/*    <section className="text-light leader-1">*/}
                {/*      <ul>*/}
                {/*        <li>Partnered with a Peer<span*/}
                {/*          className="red">*</span>*/}
                {/*        </li>*/}
                {/*        <li>Shared access to a community mentor<span*/}
                {/*          className="green">*</span></li>*/}
                {/*        <li>Guided project</li>*/}
                {/*        <li>Skill proficiency and entrepreneurship focused*/}
                {/*        </li>*/}
                {/*      </ul>*/}

                {/*      <small className="text-left left">*/}
                {/*        <span className="red">*</span> A peer is a member*/}
                {/*            within proximity to your skill level*/}
                {/*      </small>*/}
                {/*      <br/>*/}
                {/*      <small className="text-left left">*/}
                {/*        <span className="green">*</span> A community mentor is a*/}
                {/*            member that has professional experience with the*/}
                {/*            skills a mentee is working on. A community mentor is*/}
                {/*            not dedicated to just one mentee.*/}
                {/*      </small>*/}
                {/*    </section>*/}
                {/*  }/>*/}
              </div>
            </div>
          </div>
        </div>

        <div className="grid-container mentorship-parallax-background"
             style={{
               backgroundImage:
                 `url("../static/images/mentorship/mentorship-parallax-background.jpg")`,
             }}>

          <div className="parallax-overlay-black"/>
          <Button link="" label="Request Information" width="0"/>
        </div>


        <div className="grid-container padding-leader-2 padding-trailer-2">
          <div className="column-20 pre-2 padding-leader-3 padding-trailer-3">
            <h1>How the Mentorship Program Works</h1>

            <p>
              The traditional version of our mentorship program matches succesful
              applicant with an industry professional who will mentor them for
              6-12 weeks. The length of the mentorship depends on the availability
              of the mentor. Along with a mentor, the mentee is assigned to an
              open source project that they will be contributing to. This will
              allow the mentee to gain experience in the field, give back to their
              community and utilize what they are learning.
            </p>
          </div>

          <div className="column-20 pre-2">
            <div className="column-10">
              <figure>
                <img src="../static/images/mentorship/mentorship-luis.jpg" />
                <figcaption>Luis Velazquez & Gray Cash</figcaption>
              </figure>

              <p className="padding-leader-2">
                <Button link="#" label="Mentorship Application" width={3}/>
              </p>

            </div>
            <div className="column-10">
              <h2>
                A Succesful Applicant
              </h2>
              <p>
                A successful applicant is a community member that applies,
                meets all
                the minimum requirements and is sent an e-mail of acceptance.
                Applicants normally know within 2-3 weeks if they have been
                accepted or not. As this is a community driven program with
                working
                professionals in the industry, we unfortunately cannot guarantee
                everyone a mentor.
              </p>

              <section className="panel">
                <strong>Applicant requirements:</strong>
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
              </section>
            </div>
          </div>
        </div>
        <div className="grid-container mentorship-parallax-robin"
             style={{
               backgroundImage:
                 `url("../static/images/mentorship/mentorship-members-v1.jpg")`,
             }}>
          <div className="parallax-overlay-black"/>
        </div>
        <div className="grid-container">
          <div className="column-20 pre-2 padding-leader-3 padding-trailer-3">
            <div className="column-10">
              <h2>
                Mentoring
              </h2>
              <p>
                To become a mentor, you must meet the minimum requirements below.
                You must also have worked or currently work in the industry, using
                the skills you will be mentoring others in. You will be impacting
                the lives of people and you will become a resource of knowledge.
                This comes with a tremendous level of responsibility, make sure to
                apply only if you have the time and willingness to help others in
                your community.
              </p>
              <section className="panel">
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
              </section>
            </div>
            <div className="column-10 text-right">
              <figure>
                <img src="../static/images/mentorship/mentorship-ziah.jpg" />
                <figcaption>Ziah Miller & Jake Marshall</figcaption>
              </figure>
              <p className="padding-leader-2">
                <Button link="#" label="Become a Mentor" width={3}/>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default withRouter(Mentorship);
