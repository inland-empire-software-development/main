function Sponsorship() {
  return (
    <div id="sponsorship" className="grid-container">
      {/* left side */}
      <div id="sponsorship-description" className="column-24">
        {/* sponsor-title */}
        <p id="sponsor-title">Interested in becoming a Sponsor?</p>

        <p>
        To get started, take a
          <a href="../../static/pdf/sponsorship.pdf"
            target="_blank"> look at the sponsorship packages </a>
        we have available.
        </p>

        <p>Once you're ready, <a href="mailto:community@iesd.com">
        send us a message</a> and we can get you onboarded as a new sponsor.
        </p>
      </div>
      {/* Buttons below
      <div className="column-10 phone-column-6 tablet-column-12">
        <button onClick={handleClick} id="one-time">
          One-time Sponsor
        </button>
        <button onClick={handleRecurring} id="recurring" className="trailer-1">
          Recurring Sponsorship
        </button>
      </div> */}
    </div>
  );
}

export default Sponsorship;
