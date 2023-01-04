import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthenticationContext = createContext();

export default function AuthenticationContextWrapper({ children }) {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const handleFirstNameChange = (e) => setFirstName(e.target.value);

  const [lastName, setLastName] = useState("");
  const handleLastNameChange = (e) => setLastName(e.target.value);

  const [phoneNumber, setPhoneNumber] = useState();
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);

  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => setEmail(e.target.value);

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const [confirmPassword, setConfirmPassword] = useState("");
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

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

  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")) || null
  );
  const [currentUser, setCurrentUser] = useState("");

  // Functions
  async function signup(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setArePasswordsDifferent(true);
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
    }
  }

  function logout() {
    setToken(undefined);
    setCurrentUser(undefined);
    localStorage.removeItem("token");
    localStorage.removeItem("admin")
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
      localStorage.setItem("admin", res.data.admin)
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
        isModalOpen,
        toggleModal,
        setLoginOrSignup,
        loginOrSignup,
        signup,
        login,
        token,
        logout,
        getCurrentUserInfo,
        currentUser,
      }}>
      {children}
    </AuthenticationContext.Provider>
  );
}
