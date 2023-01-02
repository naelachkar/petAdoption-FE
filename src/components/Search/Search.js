import Modal from "../LoginSignup/Modal";
import NavBar from "../NavBar/NavBar";
import "./Search.css";
import SearchBar from "./SearchBar";
import SearchForm from "./SearchForm/SearchForm";
import SearchResults from "./SearchResults";

export default function Search() {
  return (
    <>
      <NavBar />
      <h1>Search</h1>
      <SearchBar />
      <SearchForm />
      <SearchResults />
      <Modal />
    </>
  );
}
