import { useContext } from "react";
import { SearchContext } from "../SearchContext";

export default function SearchFormSimple() {
  const { handleChange, searchPets, inputs } = useContext(SearchContext);

  return (
    <>
      <form onSubmit={searchPets}>
        <fieldset>
          <legend>Simple search</legend>
          <label htmlFor="pet-select">Type</label>
          <select
            name="type"
            id="pet-select"
            defaultValue={inputs?.type}
            onChange={handleChange}>
            <option value="">All</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
          </select>
          <input type="submit" value="Search" />
        </fieldset>
      </form>
    </>
  );
}
