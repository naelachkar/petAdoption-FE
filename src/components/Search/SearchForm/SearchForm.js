import { useContext } from "react";
import { SearchContext } from "../SearchContext";
import SearchFormAdvanced from "./SearchFormAdvanced";
import SearchFormSimple from "./SearchFormSimple";

export default function SearchForm() {
  const { advancedSearch } = useContext(SearchContext);

  return (
    <div className="search-page">
      {advancedSearch ? <SearchFormAdvanced /> : <SearchFormSimple />}
    </div>
  );
}
