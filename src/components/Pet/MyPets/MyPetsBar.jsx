import { useContext } from "react";
import { PetContext } from "../PetContext";

export default function MyPetsBar() {
  const { toggleMyPets } = useContext(PetContext);

  return (
    <div className="search-bar">
      <button onClick={() => toggleMyPets(true)}>Pets I own</button>
      <button onClick={() => toggleMyPets(false)}>Pets I follow</button>
    </div>
  );
}