import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { SearchContext } from "../Search/SearchContext";

export default function Pet() {
  const location = useLocation();
  const currentId = location.search.slice(4);
  const { searchedPets } = useContext(SearchContext);
  const currentPet = searchedPets.find((pet) => pet._id === currentId);

  return (
    <>
      <h1>{currentPet.name}</h1>
      <h2>{currentPet.type}</h2>
      <h3>{currentPet.breed}</h3>
      <h4>{currentPet.adoptionStatus}</h4>
      <ul>
        <li>Colour: {currentPet.color}</li>
        <li>Height: {currentPet.height}cm</li>
        <li>Weight: {currentPet.weight}cm</li>
        <li>Hypoallergenic: {currentPet.hypoallergenic ? "Yes" : "No"}</li>
      </ul>
    </>
  );
}
