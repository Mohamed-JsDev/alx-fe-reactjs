// src/App.jsx
// import { Routes, Route,  Link, BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Profile from "./components/profile";

const App = () => {
  return (
    <>
      <Route path="/blog/:id" element="BlogPost" />
      <Profile />
    </>
  );
};

export default App;
