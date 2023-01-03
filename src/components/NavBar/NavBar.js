import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { LoginSignupContext } from "../LoginSignup/LoginSignupContext";
import "./NavBar.css";

export default function NavBar() {
  const { token, currentUser } = useContext(UserContext);
  const { toggleModal, onLogOutSubmit } = useContext(LoginSignupContext);
  const navigate = useNavigate();

  return token ? (
    <div className="navContainer">
      <nav>
        <button onClick={() => navigate("/home")}>Home</button>
        <button onClick={() => navigate("/search")}>Search</button>
        <button>My Pets</button>
        <button onClick={() => navigate("/profilePage")}>Profile Page</button>
        {currentUser?.admin === true ? <button onClick={() => navigate("/admin")}>Admin Page</button>: null}
        <button onClick={onLogOutSubmit}>Log out</button>
      </nav>
    </div>
  ) : (
    <div className="navContainer">
      <nav>
        <button onClick={() => navigate("/")}>Welcome</button>
        <button onClick={() => navigate("/search")}>Search</button>
        <button id="Log in" onClick={toggleModal}>
          Log in
        </button>
        <button id="Sign up" onClick={toggleModal}>
          Sign up
        </button>
      </nav>
    </div>
  );
}
