import "./LoginSignup.css"

export default function LoginSignup() {

    function handleLogin() {
        alert("Log in")
    }

    function handleSignup() {
        alert("Sign up")
    }

  return (
    <div className="button-bar">
      <button onClick={handleLogin}>Log in</button>
      <button onClick={handleSignup}>Sign up</button>
    </div>
  );
}
