import { useContext } from "react";
import LoginForm from "./LoginForm";
import { LoginSignupContext } from "./LoginSignupContext";
import SignupForm from "./SignupForm";

export default function Modal() {
  const { isModalOpen, toggleModal, loginOrSignup } =
    useContext(LoginSignupContext);

  return (
    <>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="close end" onClick={toggleModal}>
              ✖
            </div>
            {loginOrSignup === "Log in" ? <LoginForm /> : <SignupForm />}
            <div className="close" onClick={toggleModal}>
              {loginOrSignup === "Log in" ? "Maybe later" : "Not today, thanks"}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
