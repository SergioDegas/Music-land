import { createSlice } from "@reduxjs/toolkit";
import { searchByName } from "./operation";

const initialState = {
movie:[],
query:'',
isLoading:false,
error:null,
}
const handelFulfilled = (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.query = action.payload;
    state.page = action.payload;
    // state.movie = Array.isArray(action.payload)
    //   ? action.payload
    //   : [action.payload];
  };
  const handelPending = state => {
    state.isLoading = true;
  };
  const handelReject = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  };

  const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
      clearQuery: state => {
        state.query = '';
        state.movie = []
      },
    },
    extraReducers: builder =>
      builder
        .addCase(searchByName.pending, handelPending)
        .addCase(searchByName.fulfilled, handelFulfilled)
        .addCase(searchByName.rejected, handelReject),
  });
export const { clearQuery } = searchSlice.actions;
export const SearchReducer = searchSlice.reducer;