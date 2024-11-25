// src/components/recipeStore.js
import create from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [], // Array to hold all recipes
  favorites: [], // Array to hold favorite recipe IDs

  // Action to add a recipe to favorites
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  // Action to remove a recipe from favorites
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  recommendations: [], // Array to hold recommended recipes

  // Action to generate recommendations based on favorites
  generateRecommendations: () =>
    set((state) => {
      // Mock implementation: recommend recipes based on favorites
      const recommended = state.recipes.filter(
        (recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5 // Randomly select some favorites for demonstration
      );
      return { recommendations: recommended };
    }),
}));

export { useRecipeStore };
