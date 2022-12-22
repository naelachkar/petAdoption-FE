import { useContext, useState } from "react";
import { PetsContext } from "../../PetsContext";

export function SearchFormSimple() {
  return (
    <form>
      <label htmlFor="pet-select">Type</label>
      <select name="pets" id="pet-select">
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
      </select>
    </form>
  );
}

export function SearchFormAdvanced() {
  return (
    <form>
      <label htmlFor="pet-select">Type</label>
      <select name="pets" id="pet-select">
        <option value="type-all">All</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
      </select>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" />
      <label htmlFor="adoption-status">Adoption status</label>
      <select name="adoption-status" id="adoption-status">
        <option value="status-all">All</option>
        <option value="available">Available</option>
        <option value="fostered">Fostered</option>
        <option value="adopted">Adopted</option>
      </select>
      <label htmlFor="height">Height</label>
      <input type="number" id="height" />
      <label htmlFor="weight">Weight</label>
      <input type="number" id="weight" />
    </form>
  );
}
