import { useState } from "react";
import EditPet from "./EditPet";

export default function AddPetButton() {
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <>
      <button onClick={() => setToggleModal(true)}>Add pet</button>

      {toggleModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="close end" onClick={() => setToggleModal(false)}>
              ✖
            </div>
            <h2>Add pet</h2>
            <EditPet adoptOrEdit={true}/>
            <div className="close" onClick={() => setToggleModal(false)}>
              Close
            </div>
          </div>
        </div>
      )}
    </>
  );
}
