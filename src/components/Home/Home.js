import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Hello firstName lastName</h1>
      <NavBar />
    </>
  );
}
