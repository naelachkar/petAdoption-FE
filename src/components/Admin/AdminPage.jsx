import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import AdminBar from "./AdminBar";
import { AdminContext } from "./AdminContext";
import AllPets from "./AllPets";
import AllUsers from "./AllUsers";

export default function AdminPage() {
  document.title = "Admin Page";

  const {toggleAdmin} = useContext(AdminContext)

  let content;
  if (toggleAdmin) {
    content = <AllUsers />
  } else {
    content = <AllPets />
  }

  return (
    <>
      <NavBar />
      <h1>Admin Dashbord</h1>
      <AdminBar />
      {content}
    </>
  );
}
