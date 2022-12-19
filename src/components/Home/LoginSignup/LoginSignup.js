import "./LoginSignup.css";
import React, { useContext, useState } from "react";
import Modal from "./Modal";
import { LoginSignupContext } from "./LoginSignupContext";

export default function LoginSignup() {
  const { toggleModal } = useContext(LoginSignupContext);

  return (
    <div className="button-bar">
      <button id="Log in" onClick={toggleModal}>
        Log in
      </button>
      <button id="Sign up" onClick={toggleModal}>
        Sign up
      </button>

      <Modal />
    </div>
  );
}
