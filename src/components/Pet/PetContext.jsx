import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const PetContext = createContext();

export default function PetContextWrapper({ children }) {
  const [currentPet, setCurrentPet] = useState();
  const [myPets, setMyPets] = useState();
  const [ownedOrSaved, setOwnedOrSaved] = useState(
    JSON.parse(localStorage.getItem("ownedOrSaved")) || false
  );

  function toggleMyPets(bool) {
    setOwnedOrSaved(bool);
    localStorage.setItem("ownedOrSaved", JSON.stringify(bool));
  }

  async function getMyPets() {
    const token = JSON.parse(localStorage.getItem("token"));
    const headersConfig = { headers: { Authorization: `Bearer ${token}` } };
    const userId = JSON.parse(localStorage.getItem("userId"));
    try {
      const pets = await axios.get(
        `${process.env.REACT_APP_URL}/pets/user/:${userId}`,
        headersConfig
      );
      setMyPets(pets.data.pets);
    } catch (err) {
      console.log(err);
    }
  }

  async function getPetById(id) {
    try {
      const petById = await axios.get(
        `${process.env.REACT_APP_URL}/pets/:${id}`
      );
      setCurrentPet(petById.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function savePet(id) {
    const token = JSON.parse(localStorage.getItem("token"));
    const headersConfig = { headers: { Authorization: `Bearer ${token}` } };
    try {
      const saved = await axios.post(
        `${process.env.REACT_APP_URL}/pets/:${id}/save`,
        null,
        headersConfig
      );
      alert("Pet saved successfully");
    } catch (err) {
      alert(err.response.data);
    }
  }

  async function adoptOrFosterPet(id, adoptOrFoster) {
    const token = JSON.parse(localStorage.getItem("token"));
    const headersConfig = { headers: { Authorization: `Bearer ${token}` } };
    try {
      const adopted = await axios.post(
        `${process.env.REACT_APP_URL}/pets/:${id}/adopt`,
        { adoptOrFoster },
        headersConfig
      );
      alert("Successfull"); //TODO indicate whether was adopted or fostered
    } catch (err) {
      alert(err.response.data);
    }
  }

  return (
    <PetContext.Provider
      value={{
        currentPet,
        getPetById,
        savePet,
        adoptOrFosterPet,
        getMyPets,
        myPets,
        toggleMyPets,
        ownedOrSaved,
      }}>
      {children}
    </PetContext.Provider>
  );
}