import { useContext } from "react";
import { AuthenticationContext } from "../../AuthenticationContext";
import { LoginSignupContext } from "./LoginSignupContext";

export default function SignupForm() {
  const { onSignupSubmit, handleToLogin } = useContext(LoginSignupContext);
  const {
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
  } = useContext(AuthenticationContext);

  return (
    <>
      <h2>Create an account</h2>
      <span>
        Already have one? <a onClick={handleToLogin}>Log in here</a>
      </span>
      <form onSubmit={onSignupSubmit}>
        <label htmlFor="firstName">First name</label>
        <input
          type="name"
          id="firstName"
          name="firstName"
          onChange={handleFirstNameChange}
          required
        />
        <label htmlFor="lastName">Last name</label>
        <input
          type="name"
          id="lastName"
          name="lastName"
          onChange={handleLastNameChange}
          required
        />
        <label htmlFor="phone">Phone number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          onChange={handlePhoneNumberChange}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleEmailChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handlePasswordChange}
          required
        />
        <label htmlFor="password2">Confirm password</label>
        <input
          type="password"
          id="password2"
          name="password2"
          onChange={handleConfirmPasswordChange}
          required
        />
        <div
          className="alert"
          style={{ visibility: arePasswordsDifferent ? "visible" : "hidden" }}>
          Passwords don't match
        </div>
        <button
          type="submit"
          disabled={
            !firstName ||
            !lastName ||
            !phoneNumber ||
            !email ||
            !password ||
            !confirmPassword
          }>
          Sign me up
        </button>
      </form>
    </>
  );
}
