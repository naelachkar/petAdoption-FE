import { useContext } from "react";
import { PetsContext } from "../../PetsContext";

export default function SearchResults() {
  const { petList } = useContext(PetsContext);

  return (
    <div className="petList">
      {petList?.map(({ type, name }) => {
        return (
          <div className="petCard">
            <span>{type}</span>
            <span>{name}</span>
          </div>
        );
      })}
    </div>
  );
}
