import LoginSignup from "../LoginSignup/LoginSignup";
import NavBar from "../NavBar/NavBar";
import "./Search.css";
import SearchContextWrapper from "./SearchContext";
import SearchForm from "./SearchForm/SearchForm";
import SearchResults from "./SearchResults";

export default function Search() {
  return (
    <>
      <SearchContextWrapper>
        <h1>Search</h1>
        <NavBar />
        <SearchForm />
        <SearchResults />
      </SearchContextWrapper>
      <LoginSignup />
    </>
  );
}
