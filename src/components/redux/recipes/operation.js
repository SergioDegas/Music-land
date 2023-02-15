import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://api.spoonacular.com/';

const API_KEY = ' 260c330d41254e2cbbfd0baff9987d8b';

export const getSearchRecipes = createAsyncThunk(
  'recipes/search',
  async (query, thunkAPI) => {
    try {
      const data = await axios.get(
        `/recipes/complexSearch?query=${query}&number=10?apiKey=${API_KEY}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// // Render tracks by name
// export const getTrackSearch = async query => {
//   const url = `${BASE_URL}?method=track.search&track=${query}&api_key=${API_KEY}&format=json`;

//   const response = await fetch(`${url}`);
//   const { results } = await response.json();

//   return results;
// };

// export const Api = async page => {
//   const url = `${BASE_URL}?method=chart.gettoptracks&api_key=${API_KEY}&page=${page}&limit=4&format=json`;

//   const response = await fetch(`${url}`);
//   const { tracks } = await response.json();

//   const { track } = tracks;

//   return track;
// };
