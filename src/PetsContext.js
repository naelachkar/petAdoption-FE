import axios from "axios";
import { all } from "axios";
import { createContext, useEffect, useState } from "react";

export const PetsContext = createContext();

export default function PetsContextWrapper({ children }) {
  const [petList, setPetList] = useState([]);

  async function getAllPets() {
    try {
      const allPets = await axios.get("http://localhost:8080/pets");
      console.log(allPets.data)
      setPetList(allPets.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getAllPets();
  }, []);

  return (
    <PetsContext.Provider value={{petList}}>{children}</PetsContext.Provider>
  );
}