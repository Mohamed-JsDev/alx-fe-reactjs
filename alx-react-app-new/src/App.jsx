import logo from "./logo.svg";
import "./App.css";
import MainContent from "./components/MainContent.jsx";
import Header from "./components/Header.jsx";
import UserProfile from "./components/UserProfile.jsx";
import footer from "./components/Footer.jsx";
import Counter from "./components/Counter.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Counter />
      <UserProfile />
      <footer />
    </div>
  );
}

export default App;
