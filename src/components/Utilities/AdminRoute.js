import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  if (localStorage.getItem("admin") !== "true") {
    if (!JSON.parse(localStorage.getItem("token"))) {
      return <Navigate to="/" replace />;
    }
    return <Navigate to="/home" replace />;
  }
  return children;
}
