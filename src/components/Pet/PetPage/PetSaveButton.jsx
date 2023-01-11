import { useContext } from "react";
import { PetContext } from "../PetContext";

export default function PetOwnButton() {
  const currentId = location.search.slice(4);
  const { savePet, myPets, deleteSavedPet } = useContext(PetContext);
  const isLoggedIn = JSON.parse(localStorage.getItem("userId"));

  if (!myPets) return;

  let saveButton;

  if (isLoggedIn) {
    if (myPets.savedPets.find((pet) => pet._id === currentId)) {
      saveButton = (
        <>
          <button className="unavailable">Followed by you</button>
          <button onClick={() => deleteSavedPet(currentId)}>Unfollow</button>
        </>
      );
    } else {
      saveButton = <button onClick={() => savePet(currentId)}>Follow</button>;
    }
  }

  return saveButton;
}
