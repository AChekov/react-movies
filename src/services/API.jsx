import axios from 'axios';
import {
  normalizeMovies,
  normalizeMoviesDetails,
} from '../helpers/normalization';

const API_KEY = '32e5de1f8d1f8b349737f2ff256fe882';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: API_KEY,
  include_adult: false,
  language: 'en-US',
};

export const fetchPopularMovies = async () => {
  const { data } = await axios.get(`/trending/all/day?`);
  const response = normalizeMovies(data.results);
  return response;
};

export const fetchMoviesById = async id => {
  const { data } = await axios.get(`/movie/${id}?`);
  const response = normalizeMoviesDetails(data);
  return response;
};

export const fetchMoviesBySearch = async query => {
  const { data } = await axios.get(`/search/movie?query=${query}&page=1`);
  const response = normalizeMovies(data.results);
  return response;
};

export const fetchMoviesCast = async id => {
  const { data } = await axios.get(`/movie/${id}/credits?`);
  return data.cast;
};

export const fetchMoviesReviews = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews?`);
  return data.results;
};
