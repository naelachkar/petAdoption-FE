import "./Search.css";
import { useContext } from "react";
import { PetsContext } from "../../PetsContext";

export default function Search() {
  const { petList } = useContext(PetsContext);

  return (
    <>
      <h1>Search</h1>
      <div className="petList">
        {petList.map(({ type, name }) => {
          return (
            <div className="petCard">
              <span>{type}</span>
              <span>{name}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}
