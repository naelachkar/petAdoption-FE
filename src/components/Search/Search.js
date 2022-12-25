import NavBar from "../NavBar/NavBar";
import Modal from "../Welcome/LoginSignup/Modal";
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
      <Modal />
    </>
  );
}
