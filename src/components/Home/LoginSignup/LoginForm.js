export default function LoginForm({ onSubmit, setLoginOrSignup }) {
  function handleToSignup() {
    setLoginOrSignup("Sign up");
  }

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
      </form>
      <button onClick={onSubmit}>Log me in</button>
    </>
  );
}
