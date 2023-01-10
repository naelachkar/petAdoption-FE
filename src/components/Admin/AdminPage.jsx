import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { AdminContext } from "./AdminContext";

export default function AdminPage() {
  document.title = "Admin Page";

  const navigate = useNavigate();
  const { allUsers, getAllUsers } = useContext(AdminContext);

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <NavBar />
      <h1>Admin Page</h1>
      {allUsers.length !== 0 && (
        <div className="petList">
          <h3>List of users</h3>
          {allUsers.map(
            ({ firstName, lastName, email, phoneNumber, _id, bio, admin }) => {
              return (
                <div
                  key={_id}
                  className="petCard"
                  onClick={() => navigate(`/admin/userInfo?id=${_id}`)}>
                  <span>
                    {firstName} {lastName}
                  </span>
                  <span>{email}</span>
                  <span>{phoneNumber}</span>
                  <span>{bio}</span>
                  <span>{admin}</span>
                </div>
              );
            }
          )}
        </div>
      )}
    </>
  );
}
