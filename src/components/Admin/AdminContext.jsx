import axios from "axios";
import { createContext, useState } from "react";

export const AdminContext = createContext();

export default function AdminContextWrapper({ children }) {
  const [allUsers, setAllUsers] = useState([]);
  const [allPets, setAllPets] = useState();
  const [selectedUser, setSelectedUser] = useState();
  const [toggleAdmin, setToggleAdmin] = useState(false);

  function togglingAdmin(bool) {
    setToggleAdmin(bool);
  }

  const getAllUsers = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const headersConfig = { headers: { Authorization: `Bearer ${token}` } };
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_URL}/user`,
        headersConfig
      );
      setAllUsers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getUserByIdFull = async (id) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const headersConfig = { headers: { Authorization: `Bearer ${token}` } };
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_URL}/user/${id}/full`,
        headersConfig
      );
      setSelectedUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  async function getAllPets(e) {
    if (e) {
      e.preventDefault();
    }
    try {
      const retrievedPets = await axios.get(
        `${process.env.REACT_APP_URL}/pets`,
        { params: { query: {} } }
      );
      setAllPets(retrievedPets.data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <AdminContext.Provider
      value={{
        getAllUsers,
        allUsers,
        getUserByIdFull,
        selectedUser,
        setSelectedUser,
        getAllPets,
        allPets,
        toggleAdmin,
        togglingAdmin,
      }}>
      {children}
    </AdminContext.Provider>
  );
}
