// src/components/RecommendationsList.jsx
import React, { useEffect } from "react";
import { useRecipeStore } from "./recipeStore";

const RecommendationsList = () => {
  const { recommendations, generateRecommendations } = useRecipeStore(
    (state) => ({
      recommendations: state.recommendations,
      generateRecommendations: state.generateRecommendations,
    })
  );

  useEffect(() => {
    generateRecommendations(); // Generate recommendations on component mount
  }, [generateRecommendations]);

  return (
    <div>
      <h2>Recommended Recipes</h2>
      {recommendations.length > 0 ? (
        recommendations.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recommendations available.</p>
      )}
    </div>
  );
};

export default RecommendationsList;
