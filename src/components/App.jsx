import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "./Layout/Layout";
// import { HomePage } from "./Pages/HomePage";
// import { Movie } from "./Pages/Movie";
// import { MovieDetails } from "./Pages/MovieDetails";
// import { Reviews } from "./Revievs/Revievs";
// import { Cast } from "./Cast/Cast";


const HomePage = lazy(() => import('./Pages/HomePage'));
const Movie = lazy(() => import('./Pages/Movie'));
const MovieDetails = lazy(() => import('./Pages/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(()=>import('./Revievs/Revievs'))





export const App = () => {
  return (
      <div className="container">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path='movie' element={<Movie />} />
              <Route path="/movies/:id" element={<MovieDetails />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
            </Route>
          </Routes>

      </div>
  );
};
