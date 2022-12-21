import "./Welcome.css";
import LoginSignup from "./LoginSignup/LoginSignup";
import LoginSignupContextWrapper from "./LoginSignup/LoginSignupContext";

export default function Home() {
  return (
    <div className="home">
      <h1>Pet Adoption Agency</h1>
      <article>This is the website of a pet adoption agency.</article>
      <LoginSignupContextWrapper>
        <LoginSignup />
      </LoginSignupContextWrapper>
      <a href="/">Search</a>
    </div>
  );
}
