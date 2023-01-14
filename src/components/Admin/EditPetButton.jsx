import { useContext } from "react";
import { PetContext } from "../Pet/PetContext";
import EditPet from "./EditPet";

export default function EditPetButton({ currentPet }) {
  const { toggleEditPet, setToggleEditPet } = useContext(PetContext);

  if (localStorage.getItem("admin")) {
    return (
      <>
        <button onClick={() => setToggleEditPet(true)}>Edit pet</button>

        {toggleEditPet && (
          <div className="modal-overlay">
            <div className="modal">
              <div
                className="close end"
                onClick={() => setToggleEditPet(false)}>
                ✖
              </div>
              <h2>Edit pet</h2>
              <EditPet currentPet={currentPet} adoptOrEdit={false} />
              <div className="close" onClick={() => setToggleEditPet(false)}>
                Close
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
