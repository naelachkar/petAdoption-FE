import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthenticationContext } from "../../AuthenticationContext";

export default function AdminRoute({ children }) {
  const { currentUser } = useContext(AuthenticationContext);

  if (!currentUser?.admin) {
    if (!JSON.parse(localStorage.getItem("token"))) {
      return <Navigate to="/" replace />;
    }
    return <Navigate to="/home" replace />;
  }
  return children;
}
