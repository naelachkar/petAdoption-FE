import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const PetContext = createContext();

export default function PetContextWrapper({ children }) {
  const [currentPet, setCurrentPet] = useState();

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

  return (
    <PetContext.Provider value={{ currentPet, getPetById, savePet }}>
      {children}
    </PetContext.Provider>
  );
}
