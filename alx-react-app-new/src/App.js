import logo from "./logo.svg";
import "./App.css";
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import footer from "./components/Footer";
import Counter from "./components/Counter";

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
