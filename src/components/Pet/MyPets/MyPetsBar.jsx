import { useContext } from "react";
import { PetContext } from "../PetContext";

export default function MyPetsBar() {
  const { toggleMyPets } = useContext(PetContext);

  return (
    <div className="search-bar">
      <button onClick={() => toggleMyPets(true)}>Owned pets</button>
      <button onClick={() => toggleMyPets(false)}>Saved pets</button>
    </div>
  );
}