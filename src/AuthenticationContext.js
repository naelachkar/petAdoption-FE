import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthenticationContext = createContext();

export default function AuthenticationContextWrapper({ children }) {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [arePasswordsDifferent, setArePasswordsDifferent] = useState(false);

  useEffect(() => {
    setArePasswordsDifferent(false);
  }, [password, confirmPassword]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loginOrSignup, setLoginOrSignup] = useState("");

  function toggleModal(e) {
    setIsModalOpen(!isModalOpen);
    setLoginOrSignup(e.target.id);
  }

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")) || null
  );

  const [currentUser, setCurrentUser] = useState("");

  // Functions
  async function signUp(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      setArePasswordsDifferent(true);
      return;
    }
    setArePasswordsDifferent(false);
    const newUser = { firstName, lastName, email, phoneNumber, password };
    try {
      await axios.post(`${process.env.REACT_APP_URL}/signup`, newUser);
      alert("User created successfully");
      setLoginOrSignup("Log in");
    } catch (err) {
      alert(err.response.data);
      //TODO to be improved:
    }
  }

  async function login(e) {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_URL}/login`, {
        email,
        password,
      });
      setToken(res.data.token);
      localStorage.setItem("token", JSON.stringify(res.data.token));
      await getCurrentUserInfo();
      setIsModalOpen(false);
      navigate("/home");
    } catch (err) {
      alert(err.response.data);
      // TODO Don't close the modal;
    }
  }

  function logout() {
    setToken(undefined);
    setCurrentUser(undefined);
    localStorage.removeItem("token");
    navigate("/");
  }

  const getCurrentUserInfo = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const headersConfig = { headers: { Authorization: `Bearer ${token}` } };
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_URL}/user/:id`,
        headersConfig
      );
      setCurrentUser(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <AuthenticationContext.Provider
      value={{
        firstName,
        handleFirstNameChange,
        lastName,
        handleLastNameChange,
        phoneNumber,
        handlePhoneNumberChange,
        email,
        handleEmailChange,
        password,
        handlePasswordChange,
        confirmPassword,
        handleConfirmPasswordChange,
        arePasswordsDifferent,
        setArePasswordsDifferent,
        login,
        token,
        logout,
        signUp,
        getCurrentUserInfo,
        currentUser,
        isModalOpen,
        toggleModal,
        setLoginOrSignup,
        loginOrSignup,
      }}>
      {children}
    </AuthenticationContext.Provider>
  );
}
