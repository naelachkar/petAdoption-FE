import { useContext, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import PetRenderer from "../Pet/MyPets/PetRenderer";
import { AdminContext } from "./AdminContext";

export default function UserInfo() {
  const id = window.location.search.slice(4);

  const { getUserByIdFull, selectedUser } = useContext(AdminContext);

  useEffect(() => {
    getUserByIdFull(id);
  }, []);

  if (!selectedUser) return <NavBar />;

  document.title = `${selectedUser.firstName} ${selectedUser.lastName}`;

  return (
    <>
      <NavBar />
      <h1>
        {selectedUser.firstName} {selectedUser.lastName}
      </h1>
      <ul>
        <li>Email: {selectedUser.email}</li>
        <li>Phone number: {selectedUser.phoneNumber}</li>
        <li>Bio: {selectedUser.bio}</li>
        <li>Admin: {selectedUser.admin ? "Yes" : "No"}</li>
      </ul>
      {selectedUser.pets.adoptedPets && (
        <>
          <h3>Adopted pets</h3>
          <div className="list">
            {selectedUser.pets.adoptedPets.map(
              ({ name, _id, picture, type }) => {
                return (
                  <div key={_id} name={_id} className="card">
                    <PetRenderer
                      name={name}
                      _id={_id}
                      picture={picture}
                      type={type}
                    />
                  </div>
                );
              }
            )}
          </div>
        </>
      )}
      {selectedUser.pets.fosteredPets && (
        <>
          <h3>Fostered pets</h3>
          <div className="list">
            {selectedUser.pets.fosteredPets.map(
              ({ name, _id, picture, type }) => {
                return (
                  <div key={_id} name={_id} className="card">
                    <PetRenderer
                      name={name}
                      _id={_id}
                      picture={picture}
                      type={type}
                    />
                  </div>
                );
              }
            )}
          </div>
        </>
      )}
    </>
  );
}
