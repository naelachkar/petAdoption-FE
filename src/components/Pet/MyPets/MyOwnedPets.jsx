import { useContext } from "react";
import { PetContext } from "../PetContext";
import PetRenderer from "./PetRenderer";

export default function MyOwnedPets() {
  const { myPets } = useContext(PetContext);

  let adoptedList;
  let fosteredList;

  if (myPets.adoptedPets.length > 0) {
    adoptedList = (
      <>
        <h3>Pets I've adopted ❤️</h3>
        <div className="petList">
          {myPets.adoptedPets.map(({ name, _id, picture, type }) => {
            return (
              <div key={_id} name={_id} className="petCard">
                <PetRenderer
                  name={name}
                  _id={_id}
                  picture={picture}
                  type={type}
                />
              </div>
            );
          })}
        </div>
      </>
    );
  }

  if (myPets.fosteredPets.length > 0) {
    fosteredList = (
      <>
        <h3>Pets I'm fostering 🏡</h3>
        <div className="petList">
          {myPets.fosteredPets.map(({ name, _id, picture, type }) => {
            return (
              <div key={_id} name={_id} className="petCard">
                <PetRenderer
                  name={name}
                  _id={_id}
                  picture={picture}
                  type={type}
                />
              </div>
            );
          })}
        </div>
      </>
    );
  }

  return (
    <>
      {adoptedList} {fosteredList}
    </>
  );
}
