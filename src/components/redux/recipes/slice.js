import { createSlice } from '@reduxjs/toolkit';

import {
  getTrendingMovies,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
  searchByName,
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
};


const MovieSlice = createSlice({
  name: 'movie',
  initialState: {
    items: [],
    itemsID: [],
    query: '',
    page: 1,
    isLoading: false,
    error: null,
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

      .addCase(searchByName.rejected, handelReject)
      .addCase(getTrendingMovies.rejected, handelReject)
      .addCase(getMovieDetails.rejected, handelReject)
      .addCase(getMovieCredits.rejected, handelReject)
      .addCase(getMovieReviews.rejected, handelReject)

      .addCase(searchByName.fulfilled, handelFulfilled)
      .addCase(getTrendingMovies.fulfilled, handelFulfilledTrend)
      .addCase(getMovieDetails.fulfilled, handelFulfilledMovieID)
      .addCase(getMovieCredits.fulfilled, handelFulfilled)
      .addCase(getMovieReviews.fulfilled, handelFulfilled);
  },
});

export const MovieReducer = MovieSlice.reducer;
