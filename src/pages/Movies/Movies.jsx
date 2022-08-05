import { SearchForm, SearchInput, SearchBtn } from './Movies.styled';
import MoviesList from 'components/MoviesList';
import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import noImg from '../../img/noFound.png';

const initialState = [
  {
    id: 789,
    img: noImg,
    title: 'movie_title',
  },
  {
    id: 789,
    img: noImg,
    title: 'movie_title',
  },
];

const MoviesSearch = () => {
  const [movies] = useState(initialState);
  // onSubmit = { handleSubmit };
  return (
    <>
      <SearchForm>
        <SearchBtn type="submit">
          <FcSearch size="30" />
        </SearchBtn>

        <SearchInput
          name="searchQuery"
          type="text"
          placeholder="Search movies..."
          // value={searchQuery}
          // onChange={handleValueChange}
        />
      </SearchForm>
      {movies.length !== 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default MoviesSearch;
