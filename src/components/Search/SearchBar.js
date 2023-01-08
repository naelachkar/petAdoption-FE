import { useContext } from "react";
import { SearchContext } from "./SearchContext";

export default function SearchBar() {
  const { toggleSearchType } = useContext(SearchContext);

  return (
    <div className="search-bar">
      <button onClick={toggleSearchType}>Simple search</button>
      <button onClick={toggleSearchType}>Advanced search</button>
    </div>
  );
}
