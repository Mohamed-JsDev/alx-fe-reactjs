import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json") // Ensure this path is correct
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find((recipe) => recipe.id === parseInt(id));
        setRecipe(foundRecipe);
      })
      .catch((error) => console.error("Error fetching the recipe:", error));
  }, [id]);

  if (!recipe) return <div>Loading...</div>;
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover mb-4"
      />
      <div className="shadow-md rounded-lg p-4">
        <h2 className="text-xl  font-semibold mb-2">Ingredients</h2>
        <h3 className="text-xl  font-semibold mb-2">item id #{recipe.id}</h3>
        <ul className="list-disc list-inside mb-4">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2 className="text-xl font-semibold mb-2">Cooking Instructions</h2>
        <p>{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;
