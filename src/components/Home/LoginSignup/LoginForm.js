import { useContext } from "react";
import { LoginSignupContext } from "./LoginSignupContext";

export default function LoginForm() {
  const { onSubmission, handleToSignup } = useContext(LoginSignupContext);

  return (
    <>
      <h2>Good to see you again</h2>
      <span>
        Don't have an account? <a onClick={handleToSignup}>Sign up here</a>
      </span>
      <form onSubmit={onSubmission}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="email">Password</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Log me in</button>
      </form>
    </>
  );
}
