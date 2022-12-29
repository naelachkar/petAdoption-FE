import NavBar from "../NavBar/NavBar";

export default function Home() {
  const firstName = JSON.parse(localStorage.getItem("firstName"));
  const lastName = JSON.parse(localStorage.getItem("lastName"));

  return (
    <>
      <h1>
        Hello {firstName ? `${firstName}` : null}{" "}
        {lastName ? `${lastName}` : null}{" "}
      </h1>
      <NavBar />
    </>
  );
}
