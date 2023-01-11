import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AdminContext = createContext();

export default function AdminContextWrapper({ children }) {
  const [allUsers, setAllUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState();

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

  return (
    <AdminContext.Provider
      value={{ getAllUsers, allUsers, getUserByIdFull, selectedUser }}>
      {children}
    </AdminContext.Provider>
  );
}
