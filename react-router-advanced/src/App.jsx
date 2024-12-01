import "./App.css";
import { Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element="profile"></Route>
        <Route path="profile/:profileDetails" element="ProfileDetails"></Route>
        <Route path="/profileSetting" element="profileSetting"></Route>
      </Routes>
    </Router>
  );
}

export default App;