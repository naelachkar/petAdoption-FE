import { useContext } from "react";
import { AuthenticationContext } from "../../AuthenticationContext";
import NavBar from "../NavBar/NavBar";
import "./Home.css";
import HomeLoggedIn from "./HomeLoggedIn";
import HomeLoggedOut from "./HomeLoggedOut";

export default function Home() {
  const { token } = useContext(AuthenticationContext);

  return <>{token ? <HomeLoggedIn /> : <HomeLoggedOut />}</>;
}
