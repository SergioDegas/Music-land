import { createSlice } from '@reduxjs/toolkit';
import { searchByName } from './operation';
import { getTrendingMovies } from './operation';


const handelFulfilledTrend = (state,action) => {
state.isLoading = false;
state.error = null;
state.items = action.payload;
}

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
  state.items.push(action.payload);
  state.query = action.payload
};

const MovieSlice = createSlice({
  name: 'movie',
  initialState: {
    items: [],
    query: '',
    isLoading: false,
    error: null,
    },
    extraReducers: builder => {
        builder
          .addCase(searchByName.pending, handelPending)
          .addCase(searchByName.rejected, handelReject)
          .addCase(searchByName.fulfilled, handelFulfilled)
          .addCase(getTrendingMovies.pending,handelPending)
          .addCase(getTrendingMovies.rejected,handelReject)
          .addCase(getTrendingMovies.fulfilled,handelFulfilledTrend)
    
    }
});

export const MovieReducer = MovieSlice.reducer;
