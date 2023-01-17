import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PetContext } from "../Pet/PetContext";
import { SearchContext } from "./SearchContext";

export default function SearchResults() {
  const navigate = useNavigate();
  const { searchedPets, searchPets } = useContext(SearchContext);
  const { setCurrentPet } = useContext(PetContext);

  useEffect(() => {
    searchPets();
  }, []);

  if (!searchedPets) return;

  return searchedPets.length !== 0 ? (
    <div className="list">
      {searchedPets.map(({ name, adoptionStatus, _id, picture, type }) => {
        return (
          <div key={_id} className="card">
            {picture && <img src={picture} alt="image of a pet"></img>}
            <div
              className="cardText"
              style={{
                backgroundColor:
                  adoptionStatus === "Available"
                    ? "#def28c"
                    : adoptionStatus === "Fostered"
                    ? "#FDB979"
                    : "#fc9797",
              }}>
              <div className="nameAndType">
                <span className="name">
                  <b>{name}</b>
                </span>
                {type === "Dog" && "🐶"}
                {type === "Cat" && "🐱"}
              </div>
              <span>{adoptionStatus}</span>
            </div>
            <button
              onClick={() => {
                setCurrentPet("");
                navigate(`/pet?id=${_id}`);
              }}>
              See more
            </button>
          </div>
        );
      })}
    </div>
  ) : (
    "No result"
  );
}
