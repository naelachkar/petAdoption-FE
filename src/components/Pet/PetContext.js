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

  return (
    <PetContext.Provider value={{ currentPet, getPetById }}>
      {children}
    </PetContext.Provider>
  );
}
