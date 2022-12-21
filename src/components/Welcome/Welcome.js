import "./Welcome.css";
import LoginSignup from "./LoginSignup/LoginSignup";
import LoginSignupContextWrapper from "./LoginSignup/LoginSignupContext";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate()

  return (
    <div className="welcome">
      <h1>Pet Adoption Agency</h1>
      <LoginSignupContextWrapper>
        <LoginSignup />
      </LoginSignupContextWrapper>
      <button onClick={() => navigate("/search")}>Search</button>
      <article>This is the website of a pet adoption agency.</article>
    </div>
  );
}
