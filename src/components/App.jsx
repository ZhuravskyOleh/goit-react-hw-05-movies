import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { HomePage } from "./Pages/HomePage";
import { Movie } from "./Pages/Movie";

export const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={ <HomePage/>} />
          <Route path='movie' element={<Movie />} />
        </Route>
      </Routes>
    </div>
  );
};
