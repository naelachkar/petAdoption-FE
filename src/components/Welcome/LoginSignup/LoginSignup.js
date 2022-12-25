import "./LoginSignup.css";
import React, { useContext, useState } from "react";
import Modal from "./Modal";
import { LoginSignupContext } from "./LoginSignupContext";
import NavBar from "../../NavBar/NavBar";

export default function LoginSignup() {
  const { toggleModal } = useContext(LoginSignupContext);

  return (
    <>
      <NavBar />
      <Modal />
    </>
  );
}
