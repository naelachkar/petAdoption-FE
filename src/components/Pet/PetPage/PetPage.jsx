import { useContext, useEffect } from "react";
import "./Pet.css";
import NavBar from "../../NavBar/NavBar";
import { PetContext } from "../PetContext";
import PetOwnButton from "./PetOwnButton";
import PetSaveButton from "./PetSaveButton";
import EditPetButton from "../../Admin/EditPetButton";

export default function Pet() {
  const currentId = window.location.search.slice(4);
  const { getPetById, currentPet, setCurrentPet, myPets } = useContext(PetContext);

  useEffect(() => {
    getPetById(currentId);
  }, []);

  if (!currentPet) return <NavBar />;

  const {
    name,
    type,
    picture,
    breed,
    color,
    height,
    weight,
    hypoallergenic,
    bio,
  } = currentPet;

  document.title = name;

  return (
    <>
      <NavBar />
      <h1>{name}</h1>
      <h2>{type}</h2>
      {picture && (
        <img className="petImage" src={picture} alt="image of a pet" />
      )}
      <h3>{breed}</h3>
      <div>
        <PetOwnButton />
        <PetSaveButton />
        <EditPetButton currentPet={currentPet} />
      </div>

      <h4>Information</h4>
      <ul>
        <li>{color}</li>
        <li>{height}cm</li>
        <li>{weight}kg</li>
        {hypoallergenic ? <li>Hypoallergenic</li> : null}
      </ul>

      {bio && (
        <>
          <h4>Biography</h4>
          <article>{bio}</article>
        </>
      )}
    </>
  );
}
