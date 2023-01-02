import Modal from "../LoginSignup/Modal";
import NavBar from "../NavBar/NavBar";
import "./Welcome.css";

export default function Welcome() {
  return (
    <>
      <NavBar />
      <h1>Pet Adoption Agency</h1>
      <Modal />
      <article>This is the website of a pet adoption agency.</article>
    </>
  );
}
