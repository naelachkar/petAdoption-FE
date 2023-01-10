import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import { PetContext } from "../PetContext";
import MyPetsBar from "./MyPetsBar";

export default function MyPets() {
  document.title = "My Pets";

  const navigate = useNavigate();

  const { getMyPets, myPets } = useContext(PetContext);

  useEffect(() => {
    getMyPets();
  }, []);

  if (!myPets) return <NavBar />;

  let adoptedList;
  if (myPets.adoptedPets.length > 0) {
    adoptedList = (
      <>
        <h3>Adopted pets:</h3>
        {myPets.adoptedPets.map(({ name, _id, picture }) => {
          return (
            <div
              key={_id}
              className="petCard"
              onClick={() => navigate(`/pet?id=${_id}`)}>
              {picture ? <img src={picture}></img> : null}
              <span className="petText">{name}</span>
            </div>
          );
        })}
      </>
    );
  }

  let fosteredList;
  if (myPets.fosteredPets.length > 0) {
    fosteredList = (
      <>
        <h3>Fostered pets:</h3>
        {myPets.fosteredPets.map(({ name, _id, picture }) => {
          return (
            <div
              key={_id}
              className="petCard"
              onClick={() => navigate(`/pet?id=${_id}`)}>
              {picture ? <img src={picture}></img> : null}
              <span className="petText">{name}</span>
            </div>
          );
        })}
      </>
    );
  }

  let savedList;
  if (myPets.savedPets.length > 0) {
    savedList = (
      <>
        <h3>Saved pets:</h3>
        {myPets.savedPets.map(({ name, _id, picture }) => {
          return (
            <div
              key={_id}
              className="petCard"
              onClick={() => navigate(`/pet?id=${_id}`)}>
              {picture ? <img src={picture}></img> : null}
              <span className="petText">{name}</span>
            </div>
          );
        })}
      </>
    );
  }

  return (
    <>
      <NavBar />
      <h1>My Pets</h1>
      <MyPetsBar />
      {!adoptedList && !fosteredList && !savedList ? (
        <h3>Looks like you're pet-less and fancy-free!</h3>
      ) : (
        <>
          {adoptedList}
          {fosteredList}
          {savedList}
        </>
      )}
    </>
  );
}
