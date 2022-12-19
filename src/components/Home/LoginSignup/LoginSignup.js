import "./LoginSignup.css";
import React, { useState } from "react";
import Modal from "./Modal";

export default function LoginSignup() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loginOrSignup, setLoginOrSignup] = useState("");

  function toggleModal(arg) {
    setIsModalOpen(!isModalOpen);
    setLoginOrSignup(arg.target.id);
  }

  return (
    <div className="button-bar">
      <button id="Log in" onClick={toggleModal}>
        Log in
      </button>
      <button id="Sign up" onClick={toggleModal}>
        Sign up
      </button>

      <Modal
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        loginOrSignup={loginOrSignup}
      />
    </div>
  );
}
