import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export default function UserContextWrapper({ children }) {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [arePasswordsDifferent, setArePasswordsDifferent] = useState(false);

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

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:8080/login", {
        email,
        password,
      });
      setToken(res.data.token);
      localStorage.setItem("token", JSON.stringify(res.data.token));
      navigate("/home");
    } catch (err) {
      alert(err.response.data);
      // TODO Don't close the modal;
    }
  };

  const logout = () => {
    setToken(undefined);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    setArePasswordsDifferent(false);
  }, [password, confirmPassword]);

  const signUp = async () => {
    const newUser = { firstName, lastName, email, phoneNumber, password };
    try {
      await axios.post("http://localhost:8080/signup", newUser);
      alert("User created successfully");
      //TODO go to log in modal
    } catch (err) {
      alert(err.response.data);
      //TODO to be improved:
    }
  };

  const getCurrentUserInfo = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const headersConfig = { headers: { Authorization: `Bearer ${token}` } };
    try {
      const res = await axios.get(`http://localhost:8080/user/:id`, headersConfig);
      setCurrentUser(res.data);
    } catch (err) {
      console.log(err.message)
    }
  };

  return (
    <UserContext.Provider
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
      }}>
      {children}
    </UserContext.Provider>
  );
}
