import { useState } from "react";
import EditPet from "./EditPet";

export default function EditPetButton({ currentPet }) {
  const [toggleModal, setToggleModal] = useState(false);

  if (localStorage.getItem("admin")) {
    return (
      <>
        <button onClick={() => setToggleModal(true)}>Edit pet</button>

        {toggleModal && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="close end" onClick={() => setToggleModal(false)}>
                ✖
              </div>
              <h2>Edit pet</h2>
              <EditPet currentPet={currentPet} adoptOrEdit={false} />
              <div className="close" onClick={() => setToggleModal(false)}>
                Close
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
