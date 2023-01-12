import { useContext } from "react";
import AddPetButton from "./AddPetButton";
import { AdminContext } from "./AdminContext";

export default function AdminBar() {
  const { togglingAdmin } = useContext(AdminContext);

  return (
    <div className="search-bar">
      <button onClick={() => togglingAdmin(false)}>Pet list</button>
      <button onClick={() => togglingAdmin(true)}>User list</button>
      <AddPetButton />
    </div>
  );
}
