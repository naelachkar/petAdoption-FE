import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AdminContext = createContext();

export default function AdminContextWrapper({ children }) {
  const [allUsers, setAllUsers] = useState([]);

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

  return (
    <AdminContext.Provider value={{ getAllUsers, allUsers }}>
      {children}
    </AdminContext.Provider>
  );
}
