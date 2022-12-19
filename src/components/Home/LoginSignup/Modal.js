import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

export default function Modal({ isModalOpen, toggleModal, loginOrSignup, setLoginOrSignup }) {
  function onSubmit() {
    alert("Submitted");
  }

  return (
    <div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="close end" onClick={toggleModal}>
              ✖
            </div>
            {loginOrSignup === "Log in" ? (
              <LoginForm onSubmit={onSubmit} setLoginOrSignup={setLoginOrSignup} />
            ) : (
              <SignupForm onSubmit={onSubmit} setLoginOrSignup={setLoginOrSignup} />
            )}
            <div className="close" onClick={toggleModal}>
              {loginOrSignup === "Log in"
                ? "Maybe later."
                : "Not today, thanks."}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
