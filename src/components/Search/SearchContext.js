import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const SearchContext = createContext();

export default function SearchContextWrapper({ children }) {
  const [advancedSearch, setAdvancedSearch] = useState(
    JSON.parse(localStorage.getItem("search")) || false
  );
  const [inputs, setInputs] = useState({type: "", adoptionStatus: ""});
  const [searchedPets, setSearchPets] = useState([]);
  const [currentPet, setCurrentPet] = useState();

  async function searchPets(e) {
    if (e) {
      e.preventDefault();
    }
    for (const input in inputs) {
      if (inputs[input] === "" || inputs[input] === undefined) {
        delete inputs[input];
      }
    }
    if (inputs.name) {
      inputs.name = { $regex: `${inputs.name}`, $options: "i" };
    }
    try {
      const retrievedPets = await axios.get(
        `${process.env.REACT_APP_URL}/pets`,
        { params: { query: inputs } }
      );
      console.log(retrievedPets);
      setSearchPets(retrievedPets.data);
    } catch (err) {
      console.error(err);
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

  //! On first render, doesn't show first search - temporary hack:
  useEffect(() => {
    searchPets();
  }, []);

  function toggleSearchType() {
    console.log("toggle")
    setAdvancedSearch(!advancedSearch);
    setInputs();
  }

  function handleChange(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
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
        searchPets,
        getPetById,
        currentPet,
        setCurrentPet,
        inputs,
      }}>
      {children}
    </SearchContext.Provider>
  );
}
