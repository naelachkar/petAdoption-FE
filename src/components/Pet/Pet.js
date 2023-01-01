import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SearchContext } from "../Search/SearchContext";

export default function Pet() {
  const location = useLocation();
  const currentId = location.search.slice(4);
  const { getPetById, currentPet } = useContext(SearchContext);

  useEffect(() => {
    getPetById(currentId);
  }, []);

  if (!currentPet) return;

  return (
    <>
      <h1>{currentPet.name}</h1>
      <h2>{currentPet.type}</h2>
      <h3>{currentPet.breed}</h3>
      <h4>{currentPet.adoptionStatus}</h4>
      <ul>
        <li>Colour: {currentPet.color}</li>
        <li>Height: {currentPet.height}cm</li>
        <li>Weight: {currentPet.weight}kg</li>
        <li>Hypoallergenic: {currentPet.hypoallergenic ? "Yes" : "No"}</li>
      </ul>
      {currentPet.bio ? <article className="bio">{currentPet.bio}</article> : null}
    </>
  );
}
