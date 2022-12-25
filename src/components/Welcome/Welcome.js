import "./Welcome.css";
import LoginSignup from "./LoginSignup/LoginSignup";
import { useNavigate } from "react-router-dom";

export default function Home() {
  return (
    <div className="welcome">
      <h1>Pet Adoption Agency</h1>
      <LoginSignup />
      <article>This is the website of a pet adoption agency.</article>
    </div>
  );
}
