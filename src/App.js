import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Welcome/Welcome";
import UserContextWrapper from "./UserContext";

function App() {
  return (
    <div className="App">
      <UserContextWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </UserContextWrapper>
    </div>
  );
}

export default App;
