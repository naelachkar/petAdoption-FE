import { useContext, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import { AdminContext } from "./AdminContext";

export default function UserInfo() {
  const id = location.search.slice(4);

  const { getUserByIdFull, selectedUser } = useContext(AdminContext);

  useEffect(() => {
    getUserByIdFull(id);
  }, []);

  if (!selectedUser) return <NavBar />;

  document.title = `${selectedUser.firstName} ${selectedUser.lastName}`
  
  return (
    <>
      <NavBar />
      <h1>{selectedUser.firstName} {selectedUser.lastName}</h1>
      <ul>
        <li>Email: {selectedUser.email}</li>
        <li>Phone number: {selectedUser.phoneNumber}</li>
        <li>Bio: {selectedUser.bio}</li>
        <li>Admin: {selectedUser.admin}</li>
      </ul>
    </>
  );
}