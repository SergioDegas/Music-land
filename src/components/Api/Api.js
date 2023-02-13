import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';
const BASE_URL = 'https://api.spoonacular.com/';
const API_KEY = '260c330d41254e2cbbfd0baff9987d8b';
axios.defaults.baseURL = 'https://api.spoonacular.com/'; 

// Render tracks by name
export const getRecipesSearch = async q => {
axios.defaults.baseURL = 'https://api.spoonacular.com/'; 

  const params = new URLSearchParams({
    apiKey: API_KEY,
    query: q,
    number: 20,
  });
  const url = `${params}`;
  const { data } = await axios.get(`recipes/complexSearch?${url}`);
  const { results } = data;
  // console.log(results);
  return results;
};


export const ContactAddApi = createAsyncThunk()(
  'recipes/search',
  async (query, thunkAPI) => {
    
    try {
      const { data } = await axios.get(
        `recipes/complexSearch?query=${query}&number=10?apiKey=${API_KEY}`
      );
      const { results } = data;
      console.log(results);
      return results;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);



export const getRecipesById = async id => {
  const url = `${BASE_URL}recipes/656329/information?apiKey=${API_KEY}`;

  const data = await axios.get(`${url}`);

  // console.log(data);

  return data;
};
// export default getRecipesById;
