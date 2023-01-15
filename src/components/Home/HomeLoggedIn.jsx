import { useContext, useEffect } from "react";
import { AuthenticationContext } from "../../AuthenticationContext";
import NavBar from "../NavBar/NavBar";

export default function HomeLoggedIn() {
  document.title = "Home";
  const { getCurrentUserInfo, currentUser } = useContext(AuthenticationContext);

  if (!currentUser) return <NavBar />

  useEffect(() => {
    if (!currentUser) {
      getCurrentUserInfo();
    }
  }, []);

  return (
    currentUser && (
      <>
        <NavBar />
        <h1>
          Hello {currentUser.firstName && `${currentUser.firstName}`}{" "}
          {currentUser.lastName && `${currentUser.lastName}`}{" "}
        </h1>
      </>
    )
  );
}
