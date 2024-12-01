import "./App.css";
import { Route, Router, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element="profile"></Route>
        <Route path="Profile/:profileDetails" element="ProfileDetails"></Route>
        <Route path="/profileSetting" element="profileSetting"></Route>
      </Routes>
    </Router>
  );
}

export default App;
