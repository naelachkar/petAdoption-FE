import { useContext } from "react";
import { SearchContext } from "./SearchContext";

export default function SearchResults() {
  const { searchedPets } = useContext(SearchContext);

  return searchedPets.length !== 0 ? (
    <div className="petList">
      {searchedPets.map(({ type, name, breed, id }, index) => {
        return (
          <div key={id+index} className="petCard">
            <span>{type}</span>
            <span>{name}</span>
            <span>{breed}</span>
          </div>
        );
      })}
    </div>
  ) : null;
}