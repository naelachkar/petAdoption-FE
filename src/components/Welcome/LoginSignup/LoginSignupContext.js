import { createContext, useContext, useState } from "react";
import { UserContext } from "../../../UserContext";

export const LoginSignupContext = createContext();

export default function LoginSignupContextWrapper({ children }) {
  const { password, confirmPassword, setArePasswordsDifferent } = useContext(UserContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loginOrSignup, setLoginOrSignup] = useState("");

  function toggleModal(e) {
    setIsModalOpen(!isModalOpen);
    setLoginOrSignup(e.target.id);
  }

  function onLoginSubmit(e) {
    e.preventDefault();
    alert("Submitted");
  }

  function onSignupSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      setArePasswordsDifferent(true)
      return
    }
    setArePasswordsDifferent(false)
    alert("Submitted");
  }

  function handleToLogin() {
    setLoginOrSignup("Log in");
  }

  function handleToSignup() {
    setLoginOrSignup("Sign up");
  }

  return (
    <LoginSignupContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        loginOrSignup,
        setLoginOrSignup,
        toggleModal,
        onLoginSubmit,
        onSignupSubmit,
        handleToLogin,
        handleToSignup,
      }}>
      {children}
    </LoginSignupContext.Provider>
  );
}
