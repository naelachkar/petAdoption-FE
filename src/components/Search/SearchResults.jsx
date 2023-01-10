import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "./SearchContext";

export default function SearchResults() {
  const navigate = useNavigate();
  const { searchedPets } = useContext(SearchContext);

  if (!searchedPets) return;

  return (
    searchedPets.length !== 0 && (
      <div className="petList">
        {searchedPets.map(({ type, name, breed, _id, picture }) => {
          return (
            <div
              key={_id}
              className="petCard"
              onClick={() => navigate(`/pet?id=${_id}`)}>
              {picture && <img src={picture}></img>}
              <span className="petText">{name}</span>
            </div>
          );
        })}
      </div>
    )
  );
}
