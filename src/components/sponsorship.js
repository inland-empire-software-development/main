import React, { useState, useEffect } from "react";
import DonationModal from "./DonationModal";

function Sponsorship() {
  const [modalOn, setModal] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    console.log(modalOn);
    setModal(true);
    window.onclick = event => {
      console.log(event);
      if (event.target.className == "modal") {
        setModal(false);
      }
    };
  }
  function hanldeRecurring(e) {
    e.preventDefault();
    console.log("Recurring Sponsorship");
  }

  if (modalOn) {
  }
  return (
    <div id="sponsorship" className="grid-container">
      {/* left side */}
      {modalOn ? <DonationModal /> : null}
      <div id="sponsorship-description" className="column-14">
        {/* sponsor-title */}
        <p id="sponsor-title">Interested in becoming a Sponsor?</p>
        <p>
          To get started, (link goes here) to see the sponsorship packages we
          have available. Once you"re ready, you can securely process payments
          using the buttons on your right.
        </p>
      </div>
      {/* Buttons below */}
      <div className="column-10 phone-column-6 tablet-column-12">
        <button onClick={handleClick} id="one-time">
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
