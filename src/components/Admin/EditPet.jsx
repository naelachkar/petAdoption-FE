import { useContext } from "react";
import { PetContext } from "../Pet/PetContext";

export default function EditPet({ currentPet, adoptOrEdit }) {
  const { handleChange, handleImageChange, inputs, addPet, editPet } =
    useContext(PetContext);

  return (
    <form onSubmit={adoptOrEdit ? addPet : (e) => editPet(e, currentPet._id)}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        required={adoptOrEdit}
        defaultValue={currentPet?.name}
        onChange={handleChange}
      />
      <label>Type</label>
      <select
        name="type"
        required={adoptOrEdit}
        defaultValue={currentPet?.type}
        onChange={handleChange}>
        <option>Dog</option>
        <option>Cat</option>
      </select>
      <label>Image</label>
      <input
        type="file"
        name="picture"
        required={adoptOrEdit}
        onChange={handleImageChange}
      />
      <label>Breed</label>
      <input
        type="text"
        name="breed"
        required={adoptOrEdit}
        defaultValue={currentPet?.breed}
        onChange={handleChange}
      />
      <label>Colour</label>
      <input
        type="text"
        name="color"
        required={adoptOrEdit}
        defaultValue={currentPet?.color}
        onChange={handleChange}
      />
      <label>Height (cm)</label>
      <input
        type="number"
        name="height"
        required={adoptOrEdit}
        defaultValue={currentPet?.height}
        onChange={handleChange}
      />
      <label>Weight (kg)</label>
      <input
        type="number"
        name="weight"
        required={adoptOrEdit}
        defaultValue={currentPet?.weight}
        onChange={handleChange}
      />
      <label>Bio</label>
      <textarea
        name="bio"
        defaultValue={currentPet?.bio}
        onChange={handleChange}
      />
      <button type="submit">Save</button>
    </form>
  );
}
