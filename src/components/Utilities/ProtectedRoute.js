import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  if (!JSON.parse(localStorage.getItem("currentUser"))) {
    return <Navigate to="/" replace />;
  }
  return children;
}
