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
        <h3>Pets I've adopted ❤️</h3>
        <div className="petList">
          {myPets.adoptedPets.map(({ name, _id, picture, type }) => {
            return (
              <div key={_id} className="petCard">
                {picture && <img src={picture}></img>}
                <div className="petText">
                  <div className="petNameAndType">
                    <span className="petName">
                      <b>{name}</b>
                    </span>
                    {type === "Dog" && "🐶"}
                    {type === "Cat" && "🐱"}
                  </div>
                </div>
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

  if (myPets.fosteredPets.length > 0) {
    fosteredList = (
      <>
        <h3>Pets I'm fostering 🏡</h3>
        <div className="petList">
          {myPets.fosteredPets.map(({ name, _id, picture, type }) => {
            return (
              <div key={_id} className="petCard">
                {picture && <img src={picture}></img>}
                <div className="petText">
                  <div className="petNameAndType">
                    <span className="petName">
                      <b>{name}</b>
                    </span>
                    {type === "Dog" && "🐶"}
                    {type === "Cat" && "🐱"}
                  </div>
                </div>
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

  return (
    <>
      {adoptedList} {fosteredList}
    </>
  );
}
