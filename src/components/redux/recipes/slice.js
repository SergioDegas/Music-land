import { createSlice } from '@reduxjs/toolkit';

import {
  getTrendingMovies,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
  searchByName,
  getMovieTrailer,
} from './operation';

const handelFulfilledTrend = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const handelPending = state => {
  state.isLoading = true;
};
const handelReject = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const handelFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.query = action.payload;
  state.page = action.payload;
  state.items = Array.isArray(action.payload)
    ? action.payload
    : [action.payload];
};
const handelFulfilledMovieID = (state, action) => {
  state.isLoading = false;
  state.error = null;

  state.itemsID = Array.isArray(action.payload)
    ? action.payload
    : [action.payload];

  state.modalItem = Array.isArray(action.payload)
    ? action.payload
    : [action.payload];
};
const handelFulfilledTrailer = (state, action) => {
  state.isLoading = false;
  state.error = null;

  state.trailer = Array.isArray(action.payload)
    ? action.payload
    : [action.payload];
};

const MovieSlice = createSlice({
  name: 'movie',
  initialState: {
    items: [],
    itemsID: [],
    trailer: [],
    query: '',
    page: 1,
    isLoading: false,
    error: null,
    modalItem: [],
  },
  // getMovieDetails,
  // getMovieCredits,
  // getMovieReviews,

  extraReducers: builder => {
    builder
      .addCase(searchByName.pending, handelPending)
      .addCase(getTrendingMovies.pending, handelPending)
      .addCase(getMovieDetails.pending, handelPending)
      .addCase(getMovieCredits.pending, handelPending)
      .addCase(getMovieReviews.pending, handelPending)
      .addCase(getMovieTrailer.pending, handelPending)

      .addCase(searchByName.rejected, handelReject)
      .addCase(getTrendingMovies.rejected, handelReject)
      .addCase(getMovieDetails.rejected, handelReject)
      .addCase(getMovieCredits.rejected, handelReject)
      .addCase(getMovieReviews.rejected, handelReject)
      .addCase(getMovieTrailer.rejected, handelReject)

      .addCase(searchByName.fulfilled, handelFulfilled)
      .addCase(getTrendingMovies.fulfilled, handelFulfilledTrend)
      .addCase(getMovieDetails.fulfilled, handelFulfilledMovieID)
      .addCase(getMovieCredits.fulfilled, handelFulfilled)
      .addCase(getMovieReviews.fulfilled, handelFulfilled)
      .addCase(getMovieTrailer.fulfilled, handelFulfilledTrailer);
  },
});

export const MovieReducer = MovieSlice.reducer;
