

export const selectSearch = state => state.movie.query;

export const selectPage = state => state.movie.page;

export const selectFilterByName = state => state.filter;

export const selectMovie = state => state.movie.items;

export const selectMovieID = state => state.movie.itemsID;

export const selectMovieTrailer = state => state.movie.trailer;

export const selectFavorite = state => state.movie.favorite;

export const selectIsLoading = state => state.movie.isLoading;

export const selectError = state => state.movie.error;

export const selectModal = state => state.movie.modalItem;
