import { useContext, useEffect } from "react";
import { UserContext } from "../../UserContext";
import NavBar from "../NavBar/NavBar";

export default function Home() {
  const { getCurrentUserInfo, currentUser } = useContext(UserContext);
  const { firstName, lastName } = currentUser;

  useEffect(() => {
    if (!currentUser) {
      getCurrentUserInfo();
    }
  }, []);

  if (!currentUser) return;

  return (
    <>
      <NavBar />
      <h1>
        Hello {firstName ? `${firstName}` : null}{" "}
        {lastName ? `${lastName}` : null}{" "}
      </h1>
    </>
  );
}
