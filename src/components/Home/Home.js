import { useContext, useEffect } from "react";
import { AuthenticationContext } from "../../AuthenticationContext";
import NavBar from "../NavBar/NavBar";

export default function Home() {
  const { getCurrentUserInfo, currentUser } = useContext(AuthenticationContext);

  useEffect(() => {
    if (!currentUser) {
      getCurrentUserInfo();
    }
  }, []);

  return currentUser ? (
    <>
      <NavBar />
      <h1>
        Hello {currentUser.firstName ? `${currentUser.firstName}` : null}{" "}
        {currentUser.lastName ? `${currentUser.lastName}` : null}{" "}
      </h1>
    </>
  ) : null;
}
