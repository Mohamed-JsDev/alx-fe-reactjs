import { useRecipeStore } from "./recipeStore";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom"; // تأكد من استيراد Link

const RecipeList = () => {
  const recipes = useRecipeStore((state) =>
    state.filteredRecipes.length > 0 ? state.filteredRecipes : state.recipes
  );

  return (
    <div>
      <SearchBar />
      <ul>
        {recipes.map((recipe) => (
          <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
            <li>
              <h2>{recipe.title}</h2>
              <p>{recipe.description}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
