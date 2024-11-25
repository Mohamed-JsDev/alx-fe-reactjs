// recipeStore.js
import create from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    // Trigger filtering whenever the search term is updated
    set((state) => ({
      filteredRecipes: state.recipes.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(term.toLowerCase()) ||
          recipe.ingredients.some((ingredient) =>
            ingredient.toLowerCase().includes(term.toLowerCase())
          )
      ),
    }));
  },

  // Optionally, you can add a method to reset the filter
  resetFilter: () => set({ searchTerm: "", filteredRecipes: [] }),
}));

export { useRecipeStore };
