function donationModal(props) {
  return (
    <div className="modal">
      {/* there is a class name 'modal-content' already being used somewhere else in the project */}
      <div className="modal-con">
        <iframe
          id="iF"
          frameBorder="0"
          scrolling="no"
          src="http://give.donatekindly.org/ie544/makedonation/donation/c711001e-0442-4c13-adeb-feb07e121807"
        />
      </div>
    </div>
  );
}

export default donationModal;
