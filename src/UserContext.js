import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export default function UserContextWrapper({ children }) {
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

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
  );

  const loggingInLocal = async () => {
    try {
      const res = await axios.post("http://localhost:8080/login", {
        email,
        password,
      });
      setCurrentUser(email);
      localStorage.setItem("currentUser", JSON.stringify(res.data.email));
      localStorage.setItem("firstName", JSON.stringify(res.data.firstName));
      localStorage.setItem("lastName", JSON.stringify(res.data.lastName));
      localStorage.setItem("phoneNumber", JSON.stringify(res.data.phoneNumber));
      localStorage.setItem("email", JSON.stringify(res.data.email));
    } catch (err) {
      console.error(err);
    }
  };

  const loggingOutLocal = () => {
    setCurrentUser(undefined);
    localStorage.removeItem("currentUser");
  };

  useEffect(() => {
    setArePasswordsDifferent(false);
  }, [password, confirmPassword]);

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
        loggingInLocal,
        currentUser,
        loggingOutLocal,
      }}>
      {children}
    </UserContext.Provider>
  );
}
