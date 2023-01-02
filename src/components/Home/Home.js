import { useContext, useEffect } from "react";
import { UserContext } from "../../UserContext";
import NavBar from "../NavBar/NavBar";

export default function Home() {
  const { getCurrentUserInfo, currentUser } = useContext(UserContext);

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
