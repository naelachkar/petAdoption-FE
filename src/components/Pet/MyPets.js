import { useContext, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import { PetContext } from "./PetContext";

export default function MyPets() {
  document.title = "My Pets";

  const { testGetPets } = useContext(PetContext);

  useEffect(() => {
    testGetPets();
  });

  return (
    <>
      <NavBar />
      <h1>My Pets</h1>
    </>
  );
}
