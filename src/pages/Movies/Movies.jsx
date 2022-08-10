import { SearchForm, SearchInput, SearchBtn } from './Movies.styled';
import 'react-toastify/dist/ReactToastify.css';
import MoviesList from 'components/MoviesList';
import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import noImg from '../../img/noFound.png';
// import { ToastContainer, toast } from 'react-toastify';
import { useSearchMovies } from 'hooks/hooks';

const initialState = [
  {
    id: 987,
    img: noImg,
    title: 'movie_title',
  },
];

const MoviesSearch = () => {
  const [query, setQuery] = useState('');
  const [movies] = useState(initialState);

  const searchedMovies = useSearchMovies(query);
  // console.log(searchedMovies);

  const handleSubmit = evt => {
    evt.preventDefault();

    setQuery(evt.currentTarget.elements.searchQuery.value.toLowerCase().trim());
    // console.log(query);

    if (query.trim() === '') {
      // return toast.error('Enter a search term');
      return;
    }
    // console.log(query);

    setQuery('');
  };

  return (
    <main>
      <SearchForm onSubmit={handleSubmit}>
        {/* <ToastContainer theme="colored" position="top-right" autoClose={2000} /> */}
        <SearchBtn type="submit">
          <FcSearch size="30" />
        </SearchBtn>

        <SearchInput
          name="searchQuery"
          type="text"
          placeholder="Search movies..."
        />
      </SearchForm>
      {searchedMovies.length !== 0 ? (
        <MoviesList movies={searchedMovies} />
      ) : (
        <MoviesList movies={movies} />
      )}
    </main>
  );
};

export default MoviesSearch;
