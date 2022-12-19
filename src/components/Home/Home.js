import "./Home.css";
import LoginSignup from "./LoginSignup/LoginSignup";

export default function Home() {
  return (
    <div className="home">
      <h1>Pet Adoption Agency</h1>
      <article>This is the website of a pet adoption agency.</article>
      <LoginSignup />
      <a href="/">Search</a>
    </div>
  );
}
