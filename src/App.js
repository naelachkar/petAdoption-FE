import "./App.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome/Welcome";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import UserContextWrapper from "./UserContext";
import ProfileSettings from "./components/ProfileSettings/ProfileSettings";
import PetsContextWrapper from "./PetsContext";
import ProtectedRoute from "./components/Utilities/ProtectedRoute";
import LoginSignupContextWrapper from "./components/Welcome/LoginSignup/LoginSignupContext";

export default function App() {
  return (
    <div className="App">
      <UserContextWrapper>
        <LoginSignupContextWrapper>
          <PetsContextWrapper>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profileSettings"
                element={
                  <ProtectedRoute>
                    <ProfileSettings />
                  </ProtectedRoute>
                }
              />
              <Route path="/search" element={<Search />} />
            </Routes>
          </PetsContextWrapper>
        </LoginSignupContextWrapper>
      </UserContextWrapper>
    </div>
  );
}
