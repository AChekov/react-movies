import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '32e5de1f8d1f8b349737f2ff256fe882';
const POPULAR_URL = '/trending/movie/day'; // популярные фильмы
const SEARCH_URL = '/search/movie'; // поиск фильма по ключевому слову
const ID_URL = '/movie/'; // получение инфо по id фильма

export const fetchPopularMovies = async () => {
  try {
    const { data } = await axios.get(`${POPULAR_URL}?api_key=${API_KEY}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchByMovieName = async query => {
  try {
    const { data } = await axios.get(
      `${SEARCH_URL}?api_key=${API_KEY}&query=${query}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchByMovieId = async movie_id => {
  try {
    const { data } = await axios.get(`${ID_URL}&{movie_id}?api_key=${API_KEY}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
