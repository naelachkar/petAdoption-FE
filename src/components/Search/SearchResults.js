import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "./SearchContext";

export default function SearchResults() {
  const navigate = useNavigate();
  const { searchedPets } = useContext(SearchContext);

  return searchedPets.length !== 0 ? (
    <div className="petList">
      {searchedPets.map(({ type, name, breed, _id }) => {
        return (
          <div key={_id} className="petCard" onClick={() => navigate(`/pet?id=${_id}`)}>
            <span>{type}</span>
            <span>{name}</span>
            <span>{breed}</span>
          </div>
        );
      })}
    </div>
  ) : null;
}
