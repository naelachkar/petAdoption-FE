import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  if (!JSON.parse(localStorage.getItem("token"))) {
    return <Navigate to="/" replace />;
  }
  return children;
}
