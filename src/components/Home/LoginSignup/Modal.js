
export default function Modal({isModalOpen, toggleModal, loginOrSignup}) {
 

  return (
    <div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-body">
            <h1>{`${loginOrSignup}`}</h1>
            <p>This is log in</p>
            <button onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
