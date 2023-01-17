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

  const { firstName, lastName, email, phoneNumber, bio, admin, pets } =
    selectedUser;

  document.title = `${firstName} ${lastName}`;

  return (
    <>
      <NavBar />
      <h1>{`${firstName} ${lastName}`}</h1>
      <ul>
        <li>
          Email: <b>{email}</b>
        </li>
        <li>
          Phone number: <b>{phoneNumber}</b>
        </li>
        {bio ? (
          <li>
            Bio: <b>{bio}</b>
          </li>
        ) : null}
        <li>Admin: {admin ? <b>Yes</b> : <b>No</b>}</li>
      </ul>
      {pets.adoptedPets.length > 0 ? (
        <>
          <h3>Adopted pets: {pets.adoptedPets.length}</h3>
          <div className="list">
            {pets.adoptedPets.map(({ name, _id, picture, type }) => {
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
            })}
          </div>
        </>
      ) : null}
      {pets.fosteredPets.length > 0 ? (
        <>
          <h3>Fostered pets: {pets.fosteredPets.length}</h3>
          <div className="list">
            {pets.fosteredPets.map(({ name, _id, picture, type }) => {
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
            })}
          </div>
        </>
      ) : null}
    </>
  );
}
