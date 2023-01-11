import { useContext } from "react";
import { AdminContext } from "./AdminContext";

export default function AdminBar() {
  const { togglingAdmin } = useContext(AdminContext);

  return (
    <div className="search-bar">
      <button onClick={() => togglingAdmin(true)}>User list</button>
      <button onClick={() => togglingAdmin(false)}>Pet list</button>
    </div>
  );
}
