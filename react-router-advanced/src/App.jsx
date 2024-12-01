// src/App.jsx
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./components/profile";

const App = () => {
  const isAuthenticated = false; // Simulate authentication

  return (
    <div>
      <nav>
        <Link to="/profile">Profile</Link>
      </nav>
      <Routes>
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute
              element={<Profile />}
              isAuthenticated={isAuthenticated}
            />
          }
        />
      </Routes>
    </div>
  );
};
