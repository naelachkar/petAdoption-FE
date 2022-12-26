import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";

export const LoginSignupContext = createContext();

export default function LoginSignupContextWrapper({ children }) {
  const navigate = useNavigate();

  const {
    password,
    confirmPassword,
    setArePasswordsDifferent,
    loggingInLocal,
    loggingOutLocal,
  } = useContext(UserContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loginOrSignup, setLoginOrSignup] = useState("");

  function toggleModal(e) {
    setIsModalOpen(!isModalOpen);
    setLoginOrSignup(e.target.id);
  }

  function onLoginSubmit(e) {
    e.preventDefault();
    loggingInLocal();
    setIsModalOpen(false);
    navigate("/home");
  }

  function onLogOutSubmit() {
    loggingOutLocal();
    navigate("/");
  }

  function onSignupSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      setArePasswordsDifferent(true);
      return;
    }
    setArePasswordsDifferent(false);
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
        onLogOutSubmit,
      }}>
      {children}
    </LoginSignupContext.Provider>
  );
}
