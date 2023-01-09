import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const SearchContext = createContext();

export default function SearchContextWrapper({ children }) {
  const [advancedSearch, setAdvancedSearch] = useState(
    JSON.parse(localStorage.getItem("search")) || false
  );
  const [inputs, setInputs] = useState({ type: "", adoptionStatus: "" });
  const [searchedPets, setSearchPets] = useState([]);

  function inputsToMongoParams() {
    const myInputs = { ...inputs };
    for (const input in myInputs) {
      if (myInputs[input] === "" || myInputs[input] === undefined) {
        delete myInputs[input];
      }
    }
    if (myInputs?.name) {
      myInputs.name = { $regex: `${myInputs.name}`, $options: "i" };
    }
    if (myInputs === undefined) {
      myInputs === {};
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
      setSearchPets(retrievedPets.data);
    } catch (err) {
      console.error(err);
    }
  }

  //! On first render, doesn't show first search - temporary hack:
  useEffect(() => {
    searchPets();
  }, []);

  function toggleSearchType() {
    setAdvancedSearch(!advancedSearch);
    setInputs({});
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
        inputs,
      }}>
      {children}
    </SearchContext.Provider>
  );
}
