function Sponsorship() {

    function handleClick(e){
        e.preventDefault();
        console.log('One-time')
    }

    function hanldeRecurring(e){
        e.preventDefault();
        console.log('Recurring Sponsorship');
    }
  return (
    <div className="grid-container">
      {/* left side */}
      <div id="sponsor-1" className="column-12 pre-2 leader-1 trailer-1">
        {/* sponsor-title */}
        <p id ='sponsor-title'>Interested in becoming a Sponsor?</p>
        <p>
          To get started, (link goes here) to see the sponsorship packages we have
          available. Once you're ready, you can securely process payments using
          the buttons on your right.
        </p>
      </div>
{/* Buttons below */}
      <section>
        <div id ='buttons'className='column-4 leader-2 trailer-1'>
          <button  onClick ={handleClick} id = 'one-time' className='btn'  >One-time Sponsor</button>
          <button  onClick ={hanldeRecurring} id= 'recurring'className='btn'>Recurring Sponsorship</button>
      </div> 
      </section>
    </div>
  );
}

export default Sponsorship;

