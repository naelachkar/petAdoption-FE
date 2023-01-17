import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  if (localStorage.getItem("admin") !== "true") {
    return <Navigate to="/" replace />;
  }
  return children;
}
