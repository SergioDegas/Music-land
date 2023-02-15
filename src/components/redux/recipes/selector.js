

export const selectSearch = state => state.recipes.query

export const selectFilterByName = state => state.filter;

export const selectRecipes = state => state.recipes.items;

export const selectFavorite = state => state.recipes.favorite;

export const selectIsLoading = state => state.recipes.isLoading;

export const selectError = state => state.recipes.error;
