import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// axios.defaults.baseURL = 'https://api.spoonacular.com/';
// const BASE_URL = 'https://api.spoonacular.com/';
// const API_KEY = 'da017677fbff41889b5d9fb41709a637';
// //https:api.spoonacular.com/recipes/complexSearch?query=pizza&number=10?apiKey=260c330d41254e2cbbfd0baff9987d8b
 
// export const searchByName = async query => {
//   const url = `recipes/complexSearch?query=pasta&number=1&apiKey=${API_KEY}`;
//   const response = await axios.get(`${url}`);
  

//   return response;
// };

// export const getSearchRecipes = createAsyncThunk(
//   'recipes/search',
//   async (query, thunkAPI) => {
//     try {
//       const { data } = await axios.get(
//         `search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
//       );
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

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
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'd9d1e4a74b16060862fb47c08a2dac20';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = createAsyncThunk(
  'movie/trends',
  async(_,thunkAPI) => {
  try {
    const {data} = await axios.get(`trending/movie/day?api_key=${API_KEY}`)
    return data;

  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
  }
  )

// export const getTrendingMovie = async () => {
//   const url = `${BASE_URL}trending/movie/day?api_key=${API_KEY}`;

//   const response = await axios.get(`${url}`);
//   const data = await response.json();

//   return data;
// };
// Search of movies by name
export const searchByName =  createAsyncThunk(
  'movies/search',
  async (query, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


// Full information about the films
export const getMovieDetails = async id => {
  const url = `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`;

  const response = await axios.get(`${url}`);
  const data = await response.json();

  return data;
};

// Information about the actors
export const getMovieCredits = async id => {
  const url = `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`;

  const response = await axios.get(`${url}`);
  const data = await response.json();

  return data;
};

// Get the user reviews for a movie.
export const getMovieReviews = async id => {
  const url = `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`;

  const response = await axios.get(`${url}`);
  const data = await response.json();

  return data;
};
