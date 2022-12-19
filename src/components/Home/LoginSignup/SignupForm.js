import { useContext } from "react";
import { LoginSignupContext } from "./LoginSignupContext";

export default function SignupForm() {
  const { onSubmit, handleToLogin } = useContext(LoginSignupContext);

  return (
    <>
      <h2>Create an account</h2>
      <span>
        Already have one? <a onClick={handleToLogin}>Log in here</a>
      </span>
      <form>
        <label htmlFor="firstName">First name</label>
        <input type="name" id="firstName" name="firstName" required />
        <label htmlFor="lastName">Last name</label>
        <input type="name" id="lastName" name="lastName" required />
        <label htmlFor="phone">Phone number</label>
        <input type="tel" id="phone" name="phone" required />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
        <label htmlFor="password2">Retype password</label>
        <input type="password" id="password2" name="password2" required />
        <button onSubmit={(e) => onSubmit(e)}>Sign me up</button>
      </form>
    </>
  );
}
