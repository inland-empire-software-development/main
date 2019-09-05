import React, { useState, useEffect } from "react";
import Modal from "./Modal";

function Sponsorship() {
  const [modal, setModal] = useState(null);

  function handleModal(content) {
    setModal(<Modal content={content} />);
    window.onclick = event => {
      if (event.target.className == "modal") {
        setModal(null);
      }
    };
  }
  function hanldeRecurring(e) {
    e.preventDefault();
    console.log("Recurring Sponsorship");
  }
  return (
    <div id="sponsorship" className="grid-container">
      {/* left side */}

      {modal}
      <div id="sponsorship-description" className="column-14">
        <p id="sponsor-title">Interested in becoming a Sponsor?</p>
        <p>
          To get started, (link goes here) to see the sponsorship packages we
          have available. Once you"re ready, you can securely process payments
          using the buttons on your right.
        </p>
      </div>
      {/* Buttons below */}
      <div className="column-10 phone-column-6 tablet-column-12">
        <button
          onClick={() => {
            handleModal(
              <iframe
                id="iF"
                frameBorder="0"
                scrolling="no"
                src="http://give.donatekindly.org/ie544/makedonation/donation/c711001e-0442-4c13-adeb-feb07e121807"
              />
            );
          }}
          id="one-time"
        >
          One-time Sponsor
        </button>
        <button onClick={hanldeRecurring} id="recurring" className="trailer-1">
          Recurring Sponsorship
        </button>
      </div>
    </div>
  );
}

export default Sponsorship;
