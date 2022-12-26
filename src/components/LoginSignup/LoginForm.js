import { useContext } from "react";
import { UserContext } from "../../UserContext";
import { LoginSignupContext } from "./LoginSignupContext";

export default function LoginForm() {
  const { onLoginSubmit, handleToSignup } = useContext(LoginSignupContext);
  const { email, handleEmailChange, password, handlePasswordChange } =
    useContext(UserContext);

  return (
    <>
      <h2>Good to see you again</h2>
      <span>
        Don't have an account? <a onClick={handleToSignup}>Sign up here</a>
      </span>
      <form onSubmit={onLoginSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleEmailChange}
          required
        />
        <label htmlFor="email">Password</label>
        <input
          type="password"
          id="login-password"
          name="password"
          onChange={handlePasswordChange}
          required
        />
        <button type="submit" disabled={!email || !password}>
          Log me in
        </button>
      </form>
    </>
  );
}
