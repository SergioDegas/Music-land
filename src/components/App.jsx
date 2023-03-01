import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';
import Reviews from 'pages/Reviews/Reviews';
// import { searchByName } from './redux/recipes/operation';
// import { useDispatch } from 'react-redux';

const Homepage = lazy(() => import('../pages/Homepage/Homepage'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const Movie = lazy(() => import('../pages/Movie/Movie'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/movie/:id" element={<MovieDetails />}>
            <Route path="actors" element={<h2>actors </h2>} />
          </Route>
          <Route path="/movie/:id/:reviews" element={<Reviews />} />
          <Route path="/movie" element={<Movie />}></Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
