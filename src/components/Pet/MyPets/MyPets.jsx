import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import { PetContext } from "../PetContext";
import MyOwnedPets from "./MyOwnedPets";
import MyPetsBar from "./MyPetsBar";
import MySavedPets from "./MySavedPets";

export default function MyPets() {
  document.title = "My Pets";

  const { getMyPets, myPets, ownedOrSaved } = useContext(PetContext);

  useEffect(() => {
    getMyPets();
  }, []);

  if (!myPets) return <NavBar />;

  let pageContent;

  switch (true) {
    case !myPets.adoptedPets.length &&
      !myPets.fosteredPets.length &&
      !myPets.savedPets.length:
      pageContent = <h3>Looks like you're pet-less and worry-free!</h3>;
      break;
    case (myPets.adoptedPets.length || myPets.fosteredPets.length) &&
      !myPets.savedPets.length:
      pageContent = <MyOwnedPets />;
      break;
    case (!myPets.adoptedPets.length || !myPets.fosteredPets.length) &&
      myPets.savedPets.length:
      pageContent = <MySavedPets />;
      break;
    default:
      pageContent = (
        <>
          <MyPetsBar />
          {ownedOrSaved ? <MyOwnedPets /> : <MySavedPets />}
        </>
      );
  }

  return (
    <>
      <NavBar />
      <h1>My Pets</h1>
      {pageContent}
    </>
  );
}
