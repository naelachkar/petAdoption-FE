import { createContext, useContext, useEffect, useState } from "react";
import { PetsContext } from "../../PetsContext";

export const SearchContext = createContext();

export default function SearchContextWrapper({ children }) {
  const { getAllPets, petList } = useContext(PetsContext);

  const [advancedSearch, setAdvancedSearch] = useState(JSON.parse(localStorage.getItem("search")) || false);
  const [inputs, setInputs] = useState({});
  const [searchedPets, setSearchPets] = useState([]);

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
    })
    setSearchPets(filtered);
  }

  useEffect(() => {
    localStorage.setItem("search", JSON.stringify(advancedSearch))
  }, [advancedSearch])

  return (
    <SearchContext.Provider
      value={{
        advancedSearch,
        setAdvancedSearch,
        toggleSearchType,
        handleChange,
        searchedPets,
        handleSearch,
      }}>
      {children}
    </SearchContext.Provider>
  );
}
