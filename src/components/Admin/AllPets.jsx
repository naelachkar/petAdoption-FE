import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PetContext } from "../Pet/PetContext";
import { AdminContext } from "./AdminContext";

export default function AllPets() {
  const { allPets, getAllPets } = useContext(AdminContext);
  const { setCurrentPet } = useContext(PetContext);

  useEffect(() => {
    getAllPets();
  }, []);

  const navigate = useNavigate();

  if (!allPets) return;

  return (
    <>
      <h3>List of pets</h3>
      {allPets.length !== 0 && (
        <div className="petList">
          {allPets.map(({ name, adoptionStatus, _id, picture, type }) => {
            return (
              <div key={_id} className="petCard">
                {picture && <img src={picture} alt="image of a pet"></img>}
                <div
                  className="petText"
                  style={{
                    backgroundColor:
                      adoptionStatus === "Available"
                        ? "#def28c"
                        : adoptionStatus === "Fostered"
                        ? "#FDB979"
                        : "#fc9797",
                  }}>
                  <div className="petNameAndType">
                    <span className="petName">
                      <b>{name}</b>
                    </span>
                    {type === "Dog" && "🐶"}
                    {type === "Cat" && "🐱"}
                  </div>
                  <span>{adoptionStatus}</span>
                </div>
                <button
                  onClick={() => {
                    setCurrentPet("");
                    navigate(`/pet?id=${_id}`);
                  }}>
                  See more
                </button>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
