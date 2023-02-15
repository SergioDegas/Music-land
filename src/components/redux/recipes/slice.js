const { createSlice } = require('@reduxjs/toolkit');
const { getSearchRecipes } = require('./operation');

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

const RecipesSlice = createSlice({
  name: 'Recipes',
  initialState: {
    items: [],
    query: '',
    isLoading: false,
    error: null,
    },
    extraReducers: builder => {
        builder
          .addCase(getSearchRecipes.pending, handelPending)
          .addCase(getSearchRecipes.rejected, handelReject)
          .addCase(getSearchRecipes.fulfilled, handelFulfilled);
    
    }
});

export const RecipesReducer = RecipesSlice.reducer
