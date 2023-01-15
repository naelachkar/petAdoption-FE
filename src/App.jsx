import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import AuthenticationContextWrapper from "./AuthenticationContext";
import PrivateRoute from "./components/Utilities/PrivateRoute";
import ProfileSettings from "./components/User/ProfileSettings";
import Pet from "./components/Pet/PetPage/PetPage";
import SearchContextWrapper from "./components/Search/SearchContext";
import AdminPage from "./components/Admin/AdminPage";
import AdminRoute from "./components/Utilities/AdminRoute";
import MyPets from "./components/Pet/MyPets/MyPets";
import AdminContextWrapper from "./components/Admin/AdminContext";
import UserInfo from "./components/Admin/UserInfo";
import PetContextWrapper from "./components/Pet/PetContext";

export default function App() {
  return (
    <div className="App">
      <AuthenticationContextWrapper>
        <SearchContextWrapper>
          <PetContextWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/pet" element={<Pet />} />
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
                    <AdminContextWrapper>
                      <AdminPage />
                    </AdminContextWrapper>
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/userInfo"
                element={
                  <AdminRoute>
                    <AdminContextWrapper>
                      <UserInfo />
                    </AdminContextWrapper>
                  </AdminRoute>
                }
              />
            </Routes>
          </PetContextWrapper>
        </SearchContextWrapper>
      </AuthenticationContextWrapper>
    </div>
  );
}
