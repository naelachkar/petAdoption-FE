import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "./AdminContext";

export default function AllUsers() {
  const { allUsers, getAllUsers } = useContext(AdminContext);

  useEffect(() => {
    getAllUsers();
  }, []);

  const navigate = useNavigate();

  if (!allUsers) return;

  return (
    <>
      <h3>List of users</h3>
      {allUsers.length !== 0 && (
        <div className="petList">
          {allUsers.map(({ firstName, lastName, _id, email }) => {
            return (
              <div key={_id} className="petCard">
                <span className="petName">
                  <b>
                    {firstName} {lastName}
                  </b>
                </span>
                <span>{email}</span>
                <button onClick={() => navigate(`/admin/userInfo?id=${_id}`)}>
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
