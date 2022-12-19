import { createContext, useState } from "react";

export const LoginSignupContext = createContext();

export default function LoginSignupContextWrapper({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loginOrSignup, setLoginOrSignup] = useState("");

  function toggleModal(arg) {
    setIsModalOpen(!isModalOpen);
    setLoginOrSignup(arg.target.id);
  }

  function onSubmit(e) {
    e.preventDefault();
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
        onSubmit,
        handleToLogin,
        handleToSignup,
      }}>
      {children}
    </LoginSignupContext.Provider>
  );
}
