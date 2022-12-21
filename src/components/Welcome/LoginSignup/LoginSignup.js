import "./LoginSignup.css";
import React, { useContext, useState } from "react";
import Modal from "./Modal";
import { LoginSignupContext } from "./LoginSignupContext";

export default function LoginSignup() {
  const { toggleModal } = useContext(LoginSignupContext);

  return (
    <>
      <nav>
        <button id="Log in" onClick={toggleModal}>
          Log in
        </button>
        <button id="Sign up" onClick={toggleModal}>
          Sign up
        </button>
      </nav>
      <Modal />
    </>
  );
}
