import "./App.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome/Welcome";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import AuthenticationContextWrapper from "./AuthenticationContext";
import PrivateRoute from "./components/Utilities/PrivateRoute";
import ProfileSettings from "./components/User/ProfileSettings";
import Pet from "./components/Pet/Pet";
import SearchContextWrapper from "./components/Search/SearchContext";
import AdminPage from "./components/User/AdminPage";
import AdminRoute from "./components/Utilities/AdminRoute";
import MyPets from "./components/User/MyPets";

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
              path="/myPets"
              element={
                <PrivateRoute>
                  <MyPets />
                </PrivateRoute>
              }
            />
            <Route
              path="/profilePage"
              element={
                <PrivateRoute>
                  <ProfileSettings />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <AdminRoute>
                  <AdminPage />
                </AdminRoute>
              }
            />
          </Routes>
        </SearchContextWrapper>
      </AuthenticationContextWrapper>
    </div>
  );
}
