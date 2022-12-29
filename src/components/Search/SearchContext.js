import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const SearchContext = createContext();

export default function SearchContextWrapper({ children }) {
  const [advancedSearch, setAdvancedSearch] = useState(
    JSON.parse(localStorage.getItem("search")) || false
  );
  const [inputs, setInputs] = useState({});
  const [petList, setPetList] = useState([]);
  const [searchedPets, setSearchPets] = useState([]);
  const [currentPet, setCurrentPet] = useState()

  async function getAllPets() {
    try {
      const allPets = await axios.get("http://localhost:8080/pets");
      setPetList(allPets.data);
    } catch (err) {
      console.error(err);
    }
  }

  async function getPetById(id) {
    try {
      const petById = await axios.get(`http://localhost:8080/pets/:${id}`);
      setCurrentPet(petById.data);
    } catch (err) {
      console.log(err);
    }
  }


  useEffect(() => {
    getAllPets();
  }, []);

  function toggleSearchType() {
    setAdvancedSearch(!advancedSearch);
    setInputs({});
  }

  function handleChange(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  async function handleSearch(e) {
    e.preventDefault();
    await getAllPets();
    const filtered = petList.filter((pet) => {
      for (const searchParam in inputs) {
        const petParam = pet[searchParam].toString().toLowerCase();
        const inputsParam = inputs[searchParam].toString().toLowerCase();
        if (!petParam.includes(inputsParam)) {
          return false;
        }
      }
      return true;
    });
    setSearchPets(filtered);
  }

  useEffect(() => {
    localStorage.setItem("search", JSON.stringify(advancedSearch));
  }, [advancedSearch]);

  return (
    <SearchContext.Provider
      value={{
        advancedSearch,
        setAdvancedSearch,
        toggleSearchType,
        handleChange,
        searchedPets,
        handleSearch,
        petList,
        getAllPets,
        getPetById,
        currentPet,
        setCurrentPet,
        inputs,
      }}>
      {children}
    </SearchContext.Provider>
  );
}
