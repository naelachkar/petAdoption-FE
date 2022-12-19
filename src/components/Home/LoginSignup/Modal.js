import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

export default function Modal({ isModalOpen, toggleModal, loginOrSignup }) {
  return (
    <div>
      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal">
              <h2>{`${loginOrSignup}`}</h2>
              {loginOrSignup === "Log in" ? <LoginForm /> : <SignupForm />}
              <button onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
