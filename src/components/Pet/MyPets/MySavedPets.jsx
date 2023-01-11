import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PetContext } from "../PetContext";

export default function MySavedPets() {
  const { myPets } = useContext(PetContext);
  const navigate = useNavigate();

  if (myPets.savedPets.length > 0) {
    return (
      <>
        <h3>Pets I follow:</h3>
        <div className="petList">
          {myPets.savedPets.map(({ name, _id, picture }) => {
            return (
              <div key={_id} className="petCard">
                {picture && <img src={picture}></img>}
                <span className="petText">
                  <b>{name}</b>
                </span>
                <button onClick={() => navigate(`/pet?id=${_id}`)}>
                  See more
                </button>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
