import "./App.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome/Welcome";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import UserContextWrapper from "./UserContext";
import ProfileSettings from "./components/ProfileSettings/ProfileSettings";
import PetsContextWrapper from "./PetsContext";

export default function App() {
  return (
    <div className="App">
      <UserContextWrapper>
        <PetsContextWrapper>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profileSettings" element={<ProfileSettings />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </PetsContextWrapper>
      </UserContextWrapper>
    </div>
  );
}
