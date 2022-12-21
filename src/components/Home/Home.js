import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Hello firstName lastName</h1>
      <nav>
        <button>Search</button>
        <button>My Pets</button>
        <button onClick={() => navigate("/profileSettings")}>
          Profile settings
        </button>
      </nav>
    </>
  );
}
