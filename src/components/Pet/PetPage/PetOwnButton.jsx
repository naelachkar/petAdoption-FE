import { useContext, useEffect } from "react";
import { PetContext } from "../PetContext";

export default function PetOwnButton() {
  const currentId = windows.location.search.slice(4);
  const { currentPet, adoptOrFosterPet, getMyPets, myPets, returnPet } =
    useContext(PetContext);
  const { adoptionStatus } = currentPet;
  const isLoggedIn = JSON.parse(localStorage.getItem("userId"));

  useEffect(() => {
    if (isLoggedIn) {
      getMyPets();
    }
  }, []);

  if (!myPets) return;

  let ownButton;

  switch (true) {
    case isLoggedIn && adoptionStatus === "Adopted":
      if (myPets.adoptedPets.find((pet) => pet._id === currentId)) {
        ownButton = (
          <>
            <button className="unavailable">Adopted by you</button>
            <button onClick={() => returnPet(currentId, true)}>
              Cancel adoption
            </button>
          </>
        );
      } else {
        ownButton = <button className="unavailable">Adopted</button>;
      }
      break;
    case isLoggedIn && adoptionStatus === "Fostered":
      if (myPets.fosteredPets.find((pet) => pet._id === currentId)) {
        ownButton = (
          <>
            <button className="unavailable">Fostered by you</button>
            <button onClick={() => returnPet(currentId, false)}>
              Cancel fostering
            </button>
          </>
        );
      } else {
        ownButton = <button className="unavailable">Fostered</button>;
      }
      break;
    case isLoggedIn && adoptionStatus === "Available":
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
      break;
    case !isLoggedIn && adoptionStatus === "Adopted":
      ownButton = <button className="unavailable">Adopted</button>;
      break;
    case !isLoggedIn && adoptionStatus === "Fostered":
      ownButton = <button className="unavailable">Fostered</button>;
      break;
    default:
      ownButton = <button className="available">Available</button>;
  }

  return ownButton;
}
