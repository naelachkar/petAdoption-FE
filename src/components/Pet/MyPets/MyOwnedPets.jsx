import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PetContext } from "../PetContext";

export default function MyOwnedPets() {
  const { myPets } = useContext(PetContext);
  const navigate = useNavigate();

  let adoptedList;
  let fosteredList;

  if (myPets.adoptedPets.length > 0) {
    adoptedList = (
      <>
        <h3>Adopted pets:</h3>
        {myPets.adoptedPets.map(({ name, _id, picture }) => {
          return (
            <div
              key={_id}
              className="petCard"
              onClick={() => navigate(`/pet?id=${_id}`)}>
              {picture ? <img src={picture}></img> : null}
              <span className="petText">{name}</span>
            </div>
          );
        })}
      </>
    );
  }

  if (myPets.fosteredPets.length > 0) {
    fosteredList = (
      <>
        <h3>Fostered pets:</h3>
        {myPets.fosteredPets.map(({ name, _id, picture }) => {
          return (
            <div
              key={_id}
              className="petCard"
              onClick={() => navigate(`/pet?id=${_id}`)}>
              {picture ? <img src={picture}></img> : null}
              <span className="petText">{name}</span>
            </div>
          );
        })}
      </>
    );
  }

  return (
    <>
      {adoptedList} {fosteredList}
    </>
  );
}