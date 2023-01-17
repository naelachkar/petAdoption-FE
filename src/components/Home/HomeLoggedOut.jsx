import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../../AuthenticationContext";
import NavBar from "../NavBar/NavBar";

export default function HomeLoggedOut() {
  document.title = "Pet Adoption";

  const { toggleModal } = useContext(AuthenticationContext);
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <h1>Pet Adoption Agency</h1>
      <article>
        Hey there and welcome to our Pet Adoption Agency! We’re so glad you
        stopped by. We’re a non-profit organisation on a mission to find loving
        homes for all the adorable animals out there who need them. Whether
        they’re abandoned, stray, or just need a new home, we believe every fur
        baby deserves a chance at a happy and healthy life. And that’s where you
        come in! By choosing to adopt, you’re not only giving a deserving animal
        a new home, but you’re also supporting our mission. So go ahead, take a
        look around and see which cute critter catches your eye. We can’t wait
        to help you find your new best friend.
        <br />
        <br />
        Don't forget to create an account to save, foster, and adopt pets!
      </article>
      <div>
        <button onClick={() => navigate("/search")}>Search</button>
        <button id="Log in" onClick={toggleModal}>
          Log in
        </button>
        <button id="Sign up" onClick={toggleModal}>
          Sign up
        </button>
      </div>
    </>
  );
}
