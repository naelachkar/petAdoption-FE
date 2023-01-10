import { useContext } from "react";
import { PetContext } from "../PetContext";

export default function PetOwnButton() {
  const currentId = location.search.slice(4);
  const { savePet } = useContext(PetContext);
  const isLoggedIn = JSON.parse(localStorage.getItem("userId"));

  const saveButton = isLoggedIn && (
    <button onClick={() => savePet(currentId)}>Follow</button>
  );

  return saveButton;
}
