import "./Search.css";
import SearchContextWrapper from "./SearchContext";
import SearchForm from "./SearchForm/SearchForm";
import SearchNavBar from "./SearchNavBar";
import SearchResults from "./SearchResults";

export default function Search() {
  return (
    <SearchContextWrapper>
      <h1>Search</h1>
      <SearchNavBar />
      <SearchForm />
      <SearchResults />
    </SearchContextWrapper>
  );
}
