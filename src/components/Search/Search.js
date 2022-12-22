import "./Search.css";
import { SearchFormAdvanced, SearchFormSimple } from "./SearchForm";
import SearchResults from "./SearchResults";

export default function Search() {
  return (
    <>
      <h1>Search</h1>
      <nav></nav>
      <SearchFormSimple />
      <SearchFormAdvanced />
      <SearchResults />
    </>
  );
}
