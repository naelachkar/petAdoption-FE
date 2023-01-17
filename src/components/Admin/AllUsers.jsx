import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "./AdminContext";

export default function AllUsers() {
  const { allUsers, getAllUsers, setSelectedUser } = useContext(AdminContext);

  useEffect(() => {
    getAllUsers();
  }, []);

  const navigate = useNavigate();

  if (!allUsers) return;

  return (
    <>
      <h3>List of users</h3>
      {allUsers.length !== 0 && (
        <div className="list">
          {allUsers.map(({ firstName, lastName, _id, email, pets }) => {
            return (
              <div key={_id} className="card">
                <div className="cardText userText">
                  <div className="name">
                    <b>
                      {firstName} {lastName}
                    </b>
                  </div>
                  <div>
                    <i>{email}</i>
                  </div>
                  <div>Adopted pets: {pets.adoptedPets?.length}</div>
                  <div>Fostered pets: {pets.fosteredPets?.length}</div>
                </div>
                <button
                  onClick={() => {
                    setSelectedUser("");
                    navigate(`/admin/userInfo?id=${_id}`);
                  }}>
                  See more
                </button>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
