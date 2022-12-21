import "./App.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome/Welcome";
import Home from "./components/Home/Home";
import UserContextWrapper from "./UserContext";
import ProfileSettings from "./components/ProfileSettings/ProfileSettings";


export default function App() {
  return (
    <div className="App">
      <UserContextWrapper>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profileSettings" element={<ProfileSettings />} />
        </Routes>
      </UserContextWrapper>
    </div>
  );
}
