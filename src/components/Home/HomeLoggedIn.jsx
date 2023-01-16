import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../../AuthenticationContext";
import NavBar from "../NavBar/NavBar";

export default function HomeLoggedIn() {
  document.title = "Home";
  const { getCurrentUserInfo, currentUser } = useContext(AuthenticationContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      getCurrentUserInfo();
    }
  }, []);

  if (!currentUser) return <NavBar />;

  return (
    currentUser && (
      <>
        <NavBar />
        <h1>
          Hello {currentUser.firstName && `${currentUser.firstName}`}{" "}
          {currentUser.lastName && `${currentUser.lastName}`}{" "}
        </h1>
        <div>
          <button onClick={() => navigate("/search")}>Search</button>
          <button onClick={() => navigate("/myPets")}>My Pets</button>
        </div>
      </>
    )
  );
}
