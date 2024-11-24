// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeList from "./RecipeList";
import RecipeDetails from "./RecipeDetails";
import AddRecipeForm from "./AddRecipeForm"; // استيراد AddRecipeForm

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        <Route path="/add-recipe" element={<AddRecipeForm />} />{" "}
        {/* إضافة مسار لنموذج إضافة وصفة */}
      </Routes>
    </Router>
  );
};

export default App;
