import { useContext } from "react";
import { PetContext } from "../PetContext";

export default function PetOwnButton() {
  const currentId = location.search.slice(4);
  const { currentPet, adoptOrFosterPet } = useContext(PetContext);
  const { adoptionStatus } = currentPet;
  const isLoggedIn = JSON.parse(localStorage.getItem("userId"));

  let ownButton;
  if (isLoggedIn) {
    if (adoptionStatus === "Adopted") {
      ownButton = <button className="unavailable">Adopted</button>;
    } else if (adoptionStatus === "Fostered") {
      ownButton = <button className="unavailable">Fostered</button>;
    } else if (adoptionStatus === "Available") {
      ownButton = (
        <>
          <button onClick={() => adoptOrFosterPet(currentId, true)}>
            Adopt
          </button>
          <button onClick={() => adoptOrFosterPet(currentId, false)}>
            Foster
          </button>
        </>
      );
    }
  } else {
    ownButton = <button className="available">Available</button>;
  }
  return ownButton;
}
