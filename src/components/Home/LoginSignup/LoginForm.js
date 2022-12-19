import { useContext } from "react";
import { LoginSignupContext } from "./LoginSignupContext";

export default function LoginForm() {
  const { onSubmit, handleToSignup } = useContext(LoginSignupContext);

  return (
    <>
      <h2>Good to see you again</h2>
      <span>
        Don't have an account? <a onClick={handleToSignup}>Sign up here</a>
      </span>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="email">Password</label>
        <input type="password" id="password" name="password" required />
        <button onSubmit={(e) => (onSubmit(e))}>Log me in</button>
      </form>
    </>
  );
}
