import { Route, Routes } from 'react-router';
import { lazy } from 'react';
import Layout from 'components/Layout';
// import Home from 'pages/Home';
// import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';
import NotFoundPage from 'pages/NotFoundPage';
// import Loader from 'components/Loader';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies'));
// const MovieDetails = lazy(() => import('pages/MovieDetails'));
// const Cast = lazy(() => import('components/Cast'));
// const Reviews = lazy(() => import('components/Reviews'));

const App = () => {
  return (
    <Routes>
      {/* <Suspense fallback={<Loader />}> */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route
          path="movies/:movieId"
          element={<MovieDetails path={'movies'} />}
        >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      {/* </Suspense> */}
    </Routes>
  );
};

export default App;
