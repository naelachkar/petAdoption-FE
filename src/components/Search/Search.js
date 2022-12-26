import Modal from "../LoginSignup/Modal";
import NavBar from "../NavBar/NavBar";
import "./Search.css";
import SearchBar from "./SearchBar";
import SearchContextWrapper from "./SearchContext";
import SearchForm from "./SearchForm/SearchForm";
import SearchResults from "./SearchResults";

export default function Search() {
  return (
    <>
      <SearchContextWrapper>
        <h1>Search</h1>
        <NavBar />
        <SearchBar />
        <SearchForm />
        <SearchResults />
      </SearchContextWrapper>
      <Modal />
    </>
  );
}
