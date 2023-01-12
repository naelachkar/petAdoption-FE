import { useState } from "react";

export default function EditPetButton() {
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
              <div>Text</div>
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
