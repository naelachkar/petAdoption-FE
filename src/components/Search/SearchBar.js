import { useContext } from "react";
import { SearchContext } from "./SearchContext";

export default function SearchBar() {
  const { setAdvancedSearch } = useContext(SearchContext);

  return (
    <div className="search-bar">
      <button onClick={() => setAdvancedSearch(false)}>Simple search</button>
      <button onClick={() => setAdvancedSearch(true)}>Advanced search</button>
    </div>
  );
}
