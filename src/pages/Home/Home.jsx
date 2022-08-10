import { useState, useEffect } from 'react';
import { fetchPopularMovies } from 'services/API';
import { Title } from './Home.styled';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const popularMovies = async () => {
      try {
        const movies = await fetchPopularMovies();
        setMovies(movies);
      } catch (error) {
        console.log(error);
      }
    };
    popularMovies();
  }, []);

  return (
    <main>
      <Title>Trending Today</Title>
      <MoviesList movies={movies} />
    </main>
  );
};

export default Home;
