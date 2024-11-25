// src/components/RecipeList.jsx
import React from "react";
import { useRecipeStore } from "./recipeStore";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const { recipes, filteredRecipes, searchTerm } = useRecipeStore((state) => ({
    recipes: state.recipes,
    filteredRecipes: state.filteredRecipes,
    searchTerm: state.searchTerm,
  }));

  // Use filteredRecipes if searchTerm is not empty, otherwise show all recipes
  const displayedRecipes = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      <SearchBar />
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {displayedRecipes.map((recipe) => (
          <Link to={`/recipeDetails/${recipe.id}`} key={recipe.id}>
            <li
              style={{
                marginBottom: "15px",
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
