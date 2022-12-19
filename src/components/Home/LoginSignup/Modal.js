import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

export default function Modal({ isModalOpen, toggleModal, loginOrSignup }) {
  return (
    <div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-body">
            <h1>{`${loginOrSignup}`}</h1>
            {loginOrSignup === "Log in" ? <LoginForm /> : <SignupForm />}
            <button onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
