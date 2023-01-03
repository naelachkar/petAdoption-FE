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
    logout,
    signup,
  } = useContext(UserContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loginOrSignup, setLoginOrSignup] = useState("");

  function toggleModal(e) {
    setIsModalOpen(!isModalOpen);
    setLoginOrSignup(e.target.id);
  }

  async function onLoginSubmit(e) {
    e.preventDefault();
    try {
      await login();
      setIsModalOpen(false);
    } catch (err) {}
  }

  function onLogOutSubmit() {
    logout();
    navigate("/");
  }

  async function onSignupSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      setArePasswordsDifferent(true);
      return;
    }
    setArePasswordsDifferent(false);
    await signup();
    setLoginOrSignup("Log in")
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
