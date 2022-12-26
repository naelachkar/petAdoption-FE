import { useContext } from "react";
import { SearchContext } from "../SearchContext";

export default function SearchFormAdvanced() {
  const { handleChange, handleSearch } = useContext(SearchContext);

  return (
    <form onSubmit={handleSearch}>
      <fieldset>
        <legend>Advanced search</legend>
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
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={handleChange} />
        <label htmlFor="adoptionStatus">Adoption status</label>
        <select
          name="adoptionStatus"
          id="adoptionStatus"
          defaultValue="void"
          onChange={handleChange}>
          <option value="void" disabled hidden></option>
          <option value="">All</option>
          <option value="Available">Available</option>
          <option value="Fostered">Fostered</option>
          <option value="Adopted">Adopted</option>
        </select>
        <label htmlFor="height">Height</label>
        <input
          type="number"
          name="height"
          id="height"
          onChange={handleChange}
        />
        <label htmlFor="weight">Weight</label>
        <input
          type="number"
          name="weight"
          id="weight"
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </fieldset>
    </form>
  );
}