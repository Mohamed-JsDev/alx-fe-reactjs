// src/App.jsx
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./components/Profile";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import useAuth from "./hooks/useAuth";

const App = () => {
  const { isAuthenticated } = useAuth(); // استخدام useAuth للحصول على حالة المصادقة

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <button onClick={() => (isAuthenticated ? logout() : login())}>
          {isAuthenticated ? "Logout" : "Login"}
        </button>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile/*"
          element={<ProtectedRoute element={<Profile />} />}
        />
        <Route path="*" element={<NotFound />} />
        <Route to="/blog/:id" element="BlogPost" />
      </Routes>
    </div>
  );
};

export default App;
