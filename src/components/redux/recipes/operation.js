import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'd9d1e4a74b16060862fb47c08a2dac20';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// render trending movies
export const getTrendingMovies = createAsyncThunk(
  'movie/search',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Search of movies by name
export const searchByName = createAsyncThunk(
  'movie/search',
  async ({ query, page }, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false&page=${page}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Full information about the films
export const getMovieDetails = createAsyncThunk(
  'movie/details',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `movie/${id}?api_key=${API_KEY}&language=en-US`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Information about the actors
export const getMovieCredits = createAsyncThunk(
  'movie/credits',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Get the user reviews for a movie.
export const getMovieReviews = createAsyncThunk(
  'movie/reviews',
  async ({ id, page }, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=${page}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
