// import { useEffect, useState } from 'react';
// import { fetchMoviesBySearch } from 'services/API';

// export const useSearchMovies = query => {
//   const [searchedMovies, setSearchedMovies] = useState([]);

//   useEffect(() => {
//     if (query === '') {
//       return;
//     }

//     fetchMoviesBySearch(query).then(setSearchedMovies);
//   }, [query]);

//   return searchedMovies;
// };
