import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { HomePage } from "./Pages/HomePage";
import { Movie } from "./Pages/Movie";
import { MovieDetails } from "./Pages/MovieDetails";
import { Reviews } from "./Revievs/Revievs";
import { Cast } from "./Cast/Cast";

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
