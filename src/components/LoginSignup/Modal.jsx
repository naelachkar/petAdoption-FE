import { useContext } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import "./LoginSignup.css";
import { AuthenticationContext } from "../../AuthenticationContext";

export default function Modal() {
  const { isModalOpen, toggleModal, loginOrSignup } = useContext(
    AuthenticationContext
  );

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
