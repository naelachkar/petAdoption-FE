import { useContext } from "react";
import { AuthenticationContext } from "../../AuthenticationContext";

export default function LoginForm() {
  const {
    email,
    handleEmailChange,
    password,
    handlePasswordChange,
    login,
    setLoginOrSignup,
  } = useContext(AuthenticationContext);

  return (
    <>
      <h2>Good to see you again</h2>
      <span>
        Don't have an account?{" "}
        <a
          onClick={() => {
            setLoginOrSignup("Sign up");
          }}>
          Sign up here
        </a>
      </span>
      <form onSubmit={login}>
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
