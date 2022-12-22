import { createContext, useContext, useState } from "react";
import { PetsContext } from "../../PetsContext";

export const SearchContext = createContext();

export default function SearchContextWrapper({ children }) {
  const { getAllPets, petList } = useContext(PetsContext);

  const [advancedSearch, setAdvancedSearch] = useState(false);
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
        // TODO stringify height and weight
        // TODO add a function to convert everything to lower case
        if (!pet[searchParam].includes(inputs[searchParam])) {
          return false;
        }
      }
      return true;
    })
    console.log(filtered)
    setSearchPets(filtered);
  }

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
