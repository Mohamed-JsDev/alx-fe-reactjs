// RecipeList.jsx
import { useRecipeStore } from "./recipeStore";
import SearchBar from "./SearchBar";

const RecipeList = () => {
  const recipes = useRecipeStore((state) =>
    state.filteredRecipes.length > 0 ? state.filteredRecipes : state.recipes
  );

  return (
    <div>
      <SearchBar />
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
