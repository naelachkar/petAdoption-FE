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
  const { getPetById, currentPet, myPets } = useContext(PetContext);
  const user = JSON.parse(localStorage.getItem("userId"));

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
      {picture && <img src={picture} />}
      <h3>{breed}</h3>
      <div>
        <PetOwnButton />
        <PetSaveButton />
      </div>

      <h4>Information</h4>
      <ul>
        <li>{color}</li>
        <li>{height}cm</li>
        <li>{weight}kg</li>
        {hypoallergenic ? <li>Hypoallergenic</li> : null}
      </ul>

      <h4>Biography</h4>
      <article>{bio}</article>

      {/* <div className="infoContainer">
        <div className="infoRow">
          <div className="right">Colour</div>
          <div className="left">{color}</div>
        </div>
        <div className="infoRow">
          <div className="right">Height</div>
          <div className="left">{height}</div>
        </div>
        <div className="infoRow">
          <div className="right">Weight</div>
          <div className="left">{weight}</div>
        </div>
        <div className="infoRow">
          <div className="right">Hypoallergenic</div>
          <div className="left">{hypoallergenic ? "Yes" : "No"}</div>
        </div>
      </div> */}

      {/* <ul>
        <li>Colour: {color}</li>
        <li>Height: {height}cm</li>
        <li>Weight: {weight}kg</li>
        <li>Hypoallergenic: {hypoallergenic ? "Yes" : "No"}</li>
      </ul> */}
    </>
  );
}
