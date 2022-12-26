import LoginSignup from "../LoginSignup/LoginSignup";
import "./Welcome.css";

export default function Home() {
  return (
    <div className="welcome">
      <h1>Pet Adoption Agency</h1>
      <LoginSignup />
      <article>This is the website of a pet adoption agency.</article>
    </div>
  );
}
