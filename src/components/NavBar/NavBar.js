import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { LoginSignupContext } from "../LoginSignup/LoginSignupContext";

export default function NavBar() {
  const { currentUser } = useContext(UserContext);
  const { toggleModal, onLogOutSubmit } = useContext(LoginSignupContext);
  const navigate = useNavigate();

  return currentUser ? (
    <nav>
      <button onClick={() => navigate("/search")}>Search</button>
      <button onClick={() => navigate("/home")}>Home</button>
      <button>My Pets</button>
      <button onClick={() => navigate("/profilePage")}>
        Profile Page
      </button>
      <button onClick={onLogOutSubmit}>Log out</button>
    </nav>
  ) : (
    <nav>
      <button onClick={() => navigate("/search")}>Search</button>
      <button id="Log in" onClick={toggleModal}>
        Log in
      </button>
      <button id="Sign up" onClick={toggleModal}>
        Sign up
      </button>
    </nav>
  );
}
