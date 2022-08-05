import { SearchForm, SearchInput, SearchBtn } from './Movies.styled';
import MoviesList from 'components/MoviesList';
import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import noImg from '../../img/noFound.png';
import { toast } from 'react-toastify';
import { useSearchMovies } from 'hooks/hooks';

const initialState = [
  {
    id: 987,
    img: noImg,
    title: 'movie_title',
  },
];

const MoviesSearch = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const [movies] = useState(initialState);

  const searchedMovies = useSearchMovies(query);
  console.log(searchedMovies);

  const handleValueChange = evt => {
    setQuery(evt.currentTarget.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    // const newQuery = evt.target.elements[0].value.trim();
    // if (query === newQuery || newQuery === '') {
    //   return;
    // }

    if (query.trim() === '') {
      toast.error('Enter a search term');
      return;
    }
    // console.log(query);
    // onSubmit(query);
    setQuery('');
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <SearchBtn type="submit">
          <FcSearch size="30" />
        </SearchBtn>

        <SearchInput
          name="searchQuery"
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={handleValueChange}
        />
      </SearchForm>
      {searchedMovies.length !== 0 ? (
        <MoviesList movies={searchedMovies} />
      ) : (
        <MoviesList movies={movies} />
      )}
    </>
  );
};

export default MoviesSearch;
