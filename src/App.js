import "./App.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome/Welcome";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import AuthenticationContextWrapper from "./AuthenticationContext";
import PrivateRoute from "./components/Utilities/PrivateRoute";
import ProfilePage from "./components/User/ProfileSettings";
import Pet from "./components/Pet/Pet";
import SearchContextWrapper from "./components/Search/SearchContext";
import Admin from "./components/User/Admin";
import AdminRoute from "./components/Utilities/AdminRoute";

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
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/profilePage"
              element={
                <PrivateRoute>
                  <ProfilePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <AdminRoute>
                  <Admin />
                </AdminRoute>
              }
            />
          </Routes>
        </SearchContextWrapper>
      </AuthenticationContextWrapper>
    </div>
  );
}
