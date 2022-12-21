import { useNavigate } from "react-router-dom";

export default function ProfileSettings() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Profile Settings</h1>
      <nav>
        <button onClick={() => navigate("/home")}>Home</button>
      </nav>
    </>
  );
}
