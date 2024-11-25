import React from "react";
import { useRecipeStore } from "./recipeStore";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom"; // Import Link

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
          <li
            key={recipe.id}
            style={{
              marginBottom: "15px",
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <Link to={`/recipe/${recipe.id}`}>
              {" "}
              {/* Link to recipe details */}
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
