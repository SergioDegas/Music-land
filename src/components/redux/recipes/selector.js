

export const selectSearch = state => state.movie.query

export const selectFilterByName = state => state.filter;

export const selectMovie = state => state.movie.items;

export const selectFavorite = state => state.movie.favorite;

export const selectIsLoading = state => state.movie.isLoading;

export const selectError = state => state.movie.error;
