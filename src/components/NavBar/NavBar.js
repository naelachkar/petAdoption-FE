import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../../AuthenticationContext";
import "./NavBar.css";
import Modal from "../LoginSignup/Modal";

export default function NavBar() {
  const { token, logout, toggleModal } = useContext(AuthenticationContext);

  const navigate = useNavigate();

  return (
    <>
      {token ? (
        <div className="navContainer">
          <nav>
            <button onClick={() => navigate("/home")}>Home</button>
            <button onClick={() => navigate("/search")}>Search</button>
            <button onClick={() => navigate("/myPets")}>My Pets</button>
            <button onClick={() => navigate("/profilePage")}>
              Profile Settings
            </button>
            {localStorage.getItem("admin") === "true" ? (
              <button onClick={() => navigate("/admin")}>Admin Page</button>
            ) : null}
            <button onClick={logout}>Log out</button>
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
      )}
      <Modal />
    </>
  );
}
