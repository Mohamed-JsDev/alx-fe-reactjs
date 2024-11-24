import create from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      ),
    }));
  },
  filteredRecipes: [],
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
}));

export { useRecipeStore };

// import create from "zustand";

// // const useRecipeStore = create((set) => ({
//   recipes: [],
//   addRecipe: (recipe) =>
//     set((state) => ({ recipes: [...state.recipes, recipe] })),
//   updateRecipe: (id, updatedRecipe) =>
//     set((state) => ({
//       recipes: state.recipes.map((recipe) =>
//         recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
//       ),
//     })),
//   deleteRecipe: (id) =>
//     set((state) => ({
//       recipes: state.recipes.filter((recipe) => recipe.id !== id),
//     })),
// }));

// export { useRecipeStore };
