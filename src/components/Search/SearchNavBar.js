import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "./SearchContext";

export default function SearchNavBar() {
  const { advancedSearch, toggleSearchType } = useContext(SearchContext);
  const navigate = useNavigate();

  return (
    <nav>
      <button onClick={() => navigate("/home")}>Home</button>
      <button onClick={() => navigate("/profileSettings")}>Profile</button>
      <button onClick={toggleSearchType}>
        {advancedSearch ? "Simple search" : "Advanced search"}
      </button>
    </nav>
  );
}
