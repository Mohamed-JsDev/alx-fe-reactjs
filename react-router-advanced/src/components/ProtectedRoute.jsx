// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"; // تأكد من المسار الصحيح

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
