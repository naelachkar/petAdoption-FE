import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Pet.css";
import NavBar from "../../NavBar/NavBar";
import { PetContext } from "../PetContext";
import PetOwnButton from "./PetOwnButton";

export default function Pet() {
  const location = useLocation();
  const currentId = location.search.slice(4);
  const {
    getPetById,
    currentPet,
    savePet,
    adoptOrFosterPet,
    getMyPets,
    myPets,
  } = useContext(PetContext);

  const isLoggedIn = JSON.parse(localStorage.getItem("userId"));

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
    adoptionStatus,
    color,
    height,
    weight,
    hypoallergenic,
    bio,
  } = currentPet;

  document.title = name;

  let saveButton;
  isLoggedIn
    ? (saveButton = <button onClick={() => savePet(currentId)}>Save</button>)
    : (saveButton = null);

  return (
    <>
      <NavBar />
      <h1>{name}</h1>
      <h2>{type}</h2>
      {picture ? <img src={picture} /> : null}
      <h3>{breed}</h3>
      <div>
        <PetOwnButton />
        {saveButton}
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