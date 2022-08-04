import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import Layout from 'components/Layout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import { fetchPopularMovies } from '../../services/API';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies().then(res => setMovies(res));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<Home />} />
      <Route path="movies" element={<Movies />} />
      <Route
        path="/movies/:movieId"
        element={<MovieDetails movies={movies} />}
      />
    </Routes>
  );
};

export default App;
