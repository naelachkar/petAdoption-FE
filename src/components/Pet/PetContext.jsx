import axios from "axios";
import { createContext, useState } from "react";

export const PetContext = createContext();

export default function PetContextWrapper({ children }) {
  const [currentPet, setCurrentPet] = useState();
  const [myPets, setMyPets] = useState();
  const [ownedOrSaved, setOwnedOrSaved] = useState(
    JSON.parse(localStorage.getItem("ownedOrSaved")) || false
  );

  function toggleMyPets(bool) {
    setOwnedOrSaved(bool);
    localStorage.setItem("ownedOrSaved", JSON.stringify(bool));
  }

  async function getMyPets() {
    const token = JSON.parse(localStorage.getItem("token"));
    const headersConfig = { headers: { Authorization: `Bearer ${token}` } };
    const userId = JSON.parse(localStorage.getItem("userId"));
    try {
      const pets = await axios.get(
        `${process.env.REACT_APP_URL}/pets/user/${userId}`,
        headersConfig
      );
      setMyPets(pets.data.pets);
    } catch (err) {
      console.log(err);
    }
  }

  async function getPetById(id) {
    try {
      const petById = await axios.get(
        `${process.env.REACT_APP_URL}/pets/${id}`
      );
      setCurrentPet(petById.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function savePet(id) {
    const token = JSON.parse(localStorage.getItem("token"));
    const headersConfig = { headers: { Authorization: `Bearer ${token}` } };
    try {
      const saved = await axios.post(
        `${process.env.REACT_APP_URL}/pets/${id}/save`,
        null,
        headersConfig
      );
      await getMyPets();
      alert("Pet followed successfully");
    } catch (err) {
      alert(err.response.data);
    }
  }

  async function deleteSavedPet(id) {
    const token = JSON.parse(localStorage.getItem("token"));
    const headersConfig = { headers: { Authorization: `Bearer ${token}` } };
    try {
      const saved = await axios.delete(
        `${process.env.REACT_APP_URL}/pets/${id}/save`,
        headersConfig
      );
      await getMyPets();
      alert("Pet unfollowed successfully");
    } catch (err) {
      alert(err.response.data);
    }
  }

  async function adoptOrFosterPet(id, adoptOrFoster) {
    const token = JSON.parse(localStorage.getItem("token"));
    const headersConfig = { headers: { Authorization: `Bearer ${token}` } };
    try {
      const adopted = await axios.post(
        `${process.env.REACT_APP_URL}/pets/${id}/adopt`,
        { adoptOrFoster },
        headersConfig
      );
      await getMyPets();
      alert("Successful"); //TODO indicate whether was adopted or fostered
    } catch (err) {
      alert(err.response.data);
    }
  }

  async function returnPet(id, adoptOrFoster) {
    const token = JSON.parse(localStorage.getItem("token"));
    const headersConfig = { headers: { Authorization: `Bearer ${token}` } };
    try {
      const returned = await axios.post(
        `${process.env.REACT_APP_URL}/pets/${id}/return`,
        { adoptOrFoster },
        headersConfig
      );
      await getMyPets();
      alert("Return successful");
    } catch (err) {
      alert(err.response.data);
    }
  }

  // Edit pets (admins only)
  const [inputs, setInputs] = useState({});
  const [toggleEditPet, setToggleEditPet] = useState(false);

  function handleChange(e) {
    let value = e.target.value;
    if (e.target.name === "height" || e.target.name === "weight") {
      value = parseInt(e.target.value);
    }
    setInputs({ ...inputs, [e.target.name]: value });
  }

  function handleImageChange(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.files[0] });
  }

  async function addPet(e) {
    e.preventDefault();
    let myInputs = { ...inputs };

    const formData = new FormData();
    for (let key in myInputs) {
      formData.append(key, myInputs[key]);
    }

    const token = JSON.parse(localStorage.getItem("token"));
    const headersConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      const newPet = await axios.post(
        `${process.env.REACT_APP_URL}/pets`,
        formData,
        headersConfig
      );
      setToggleEditPet(false);
      return newPet;
    } catch (err) {
      console.log(err);
    }
  }

  async function editPet(e, petId) {
    e.preventDefault();

    let myInputs = { ...inputs };
    for (const input in myInputs) {
      if (
        myInputs[input] === "" ||
        myInputs[input] === undefined ||
        myInputs[input] === currentPet[input]
      ) {
        delete myInputs[input];
      }
    }

    const formData = new FormData();
    for (let key in myInputs) {
      formData.append(key, myInputs[key]);
    }

    const token = JSON.parse(localStorage.getItem("token"));
    const headersConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };
    try {
      const edited = await axios.put(
        `${process.env.REACT_APP_URL}/pets/${petId}`,
        formData,
        headersConfig
      );
      setCurrentPet(edited);
      setToggleEditPet(false);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <PetContext.Provider
      value={{
        currentPet,
        getPetById,
        savePet,
        adoptOrFosterPet,
        getMyPets,
        myPets,
        toggleMyPets,
        ownedOrSaved,
        returnPet,
        deleteSavedPet,
        handleChange,
        handleImageChange,
        inputs,
        toggleEditPet,
        setToggleEditPet,
        addPet,
        editPet,
      }}>
      {children}
    </PetContext.Provider>
  );
}
