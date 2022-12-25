import { useContext } from "react";
import { SearchContext } from "../SearchContext";

export default function SearchFormSimple() {
  const { handleSimpleSearch, handleChange, handleSearch } = useContext(SearchContext);

  return (
    <>
      <form onSubmit={handleSearch}>
        <fieldset>
          <legend>Simple search</legend>
          <label htmlFor="pet-select">Type</label>
          <select
            name="type"
            id="pet-select"
            defaultValue="void"
            onChange={handleChange}>
            <option value="void" disabled hidden></option>
            <option value="">All</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
          </select>
          <input type="submit" value="Submit" />
        </fieldset>
      </form>
    </>
  );
}
