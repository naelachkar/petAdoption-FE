import "./App.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome/Welcome";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import AuthenticationContextWrapper from "./AuthenticationContext";
import ProtectedRoute from "./components/Utilities/ProtectedRoute";
import ProfilePage from "./components/User/ProfileSettings";
import Pet from "./components/Pet/Pet";
import SearchContextWrapper from "./components/Search/SearchContext";
import Admin from "./components/User/Admin";

export default function App() {
  return (
    <div className="App">
      <AuthenticationContextWrapper>
        <SearchContextWrapper>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/search" element={<Search />} />
            <Route path="/pet" element={<Pet />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profilePage"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </SearchContextWrapper>
      </AuthenticationContextWrapper>
    </div>
  );
}
