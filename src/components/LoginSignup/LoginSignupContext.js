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
    login,
    loggingOutLocal,
    signUp,
  } = useContext(UserContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loginOrSignup, setLoginOrSignup] = useState("");

  function toggleModal(e) {
    setIsModalOpen(!isModalOpen);
    setLoginOrSignup(e.target.id);
  }

  async function onLoginSubmit(e) {
    e.preventDefault();
    await login();
    setIsModalOpen(false);
  }

  function onLogOutSubmit() {
    loggingOutLocal();
    navigate("/");
  }

  async function onSignupSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      setArePasswordsDifferent(true);
      return;
    }
    setArePasswordsDifferent(false);
    await signUp()
    // open Log in modal
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
