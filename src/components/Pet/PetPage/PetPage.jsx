import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Pet.css";
import NavBar from "../../NavBar/NavBar";
import { PetContext } from "../PetContext";
import PetOwnButton from "./PetOwnButton";
import PetSaveButton from "./PetSaveButton";

export default function Pet() {
  const location = useLocation();
  const currentId = location.search.slice(4);
  const { getPetById, currentPet, getMyPets, myPets } = useContext(PetContext);

  useEffect(() => {
    getMyPets();
  }, []);

  useEffect(() => {
    getPetById(currentId);
  }, [myPets]);

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
      {picture ? <img src={picture} /> : null}
      <h3>{breed}</h3>
      <div>
        <PetOwnButton />
        <PetSaveButton />
      </div>
      <ul>
        <li>Colour: {color}</li>
        <li>Height: {height}cm</li>
        <li>Weight: {weight}kg</li>
        <li>Hypoallergenic: {hypoallergenic ? "Yes" : "No"}</li>
      </ul>
      <article className="bio">{bio}</article>
    </>
  );
}
