// src/App.jsx
// import { Routes, Route,  Link, BrowserRouter } from "react-router-dom";
import Profile from "./components/profile";

const App = () => {
  return;
  <>
    <Profile />
    <Route path="/blog/:id" element="BlogPost" />
  </>;
};

export default App;
