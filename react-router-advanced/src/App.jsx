// src/App.jsx
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./components/Profile"; // Import Profile component
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
