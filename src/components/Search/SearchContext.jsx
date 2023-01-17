import axios from "axios";
import { createContext, useState } from "react";

export const SearchContext = createContext();

export default function SearchContextWrapper({ children }) {
  const [advancedSearch, setAdvancedSearch] = useState(
    JSON.parse(localStorage.getItem("search")) || false
  );
  const [inputs, setInputs] = useState({ type: "", adoptionStatus: "" });
  const [searchedPets, setSearchedPets] = useState([]);

  function inputsToMongoParams() {
    let myInputs = { ...inputs };
    for (const input in myInputs) {
      if (myInputs[input] === "" || myInputs[input] === undefined) {
        delete myInputs[input];
      }
    }
    if (myInputs?.name) {
      myInputs.name = { $regex: `${myInputs.name}`, $options: "i" };
    }
    if (myInputs === undefined) {
      myInputs = {};
    }
    return myInputs;
  }

  async function searchPets(e) {
    if (e) {
      e.preventDefault();
    }
    const myInputs = inputsToMongoParams();
    try {
      const retrievedPets = await axios.get(
        `${process.env.REACT_APP_URL}/pets`,
        { params: { query: myInputs } }
      );
      setSearchedPets(retrievedPets.data);
    } catch (err) {
      console.error(err);
    }
  }

  function toggleSearchType(bool) {
    setAdvancedSearch(bool);
    localStorage.setItem("search", JSON.stringify(bool));
    setInputs({});
  }

  function handleChange(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  return (
    <SearchContext.Provider
      value={{
        advancedSearch,
        setAdvancedSearch,
        toggleSearchType,
        handleChange,
        searchedPets,
        searchPets,
        inputs,
      }}>
      {children}
    </SearchContext.Provider>
  );
}
