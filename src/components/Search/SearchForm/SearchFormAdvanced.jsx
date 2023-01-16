import { useContext } from "react";
import { SearchContext } from "../SearchContext";

export default function SearchFormAdvanced() {
  const { handleChange, searchPets, inputs } = useContext(SearchContext);

  return (
    <form onSubmit={searchPets}>
      <fieldset>
        <legend>Advanced search</legend>
        <div>
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
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="adoptionStatus">Adoption status</label>
          <select
            name="adoptionStatus"
            id="adoptionStatus"
            defaultValue={inputs?.adoptionStatus}
            onChange={handleChange}>
            <option value="">All</option>
            <option value="Available">Available</option>
            <option value="Fostered">Fostered</option>
            <option value="Adopted">Adopted</option>
          </select>
        </div>
        <div>
          <label htmlFor="height">Height</label>
          <input
            type="number"
            name="height"
            id="height"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="weight">Weight</label>
          <input
            type="number"
            name="weight"
            id="weight"
            onChange={handleChange}
          />
        </div>
        <input type="submit" value="Search" />
      </fieldset>
    </form>
  );
}
