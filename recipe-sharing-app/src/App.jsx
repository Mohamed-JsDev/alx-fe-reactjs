import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeList from "./RecipeList"; // Assuming you have a recipe list component
import RecipeDetails from "./RecipeDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
