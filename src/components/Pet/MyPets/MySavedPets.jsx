import { useContext } from "react";
import { PetContext } from "../PetContext";
import PetRenderer from "./PetRenderer";

export default function MySavedPets() {
  const { myPets } = useContext(PetContext);

  if (myPets.savedPets.length > 0) {
    return (
      <>
        <h3>Pets I follow ✨</h3>
        <div className="petList">
          {myPets.savedPets.map(({ name, _id, picture, type }) => {
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
}
