import React, { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import { FetchFilm } from "components/API/API";
import { MovieList } from "components/MovieList/MovieList";

 const Movie = () => {
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useSearchParams();

 
  useEffect(() => {
    const searchQuery = query.get('query');
    if (searchQuery) FetchFilm(searchQuery).then(setMovies);
    if (!searchQuery) {
      setMovies(null);
      setQuery({});
    }
  }, [query, setQuery]);

  function handleSubmit(e) {
    e.preventDefault();
    setQuery({
      query: e.currentTarget.elements.search.value,
    });
    e.currentTarget.reset();
  }
  
  
  return (
    <>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-auto">
          <label htmlFor="movieSearch" className="visually-hidden">
            Film search
          </label>
          <input
            autoComplete="off"
            type="text"
            className="form-control"
            id="movieSearch"
            placeholder="Film search"
            name="search"
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Search
          </button>
        </div>
        {movies?.length > 0 && (
        <>
          <h2>Search results:</h2>
          <MovieList data={movies} />
        </>
      )}
      </form>
    </>
  );
};

export default Movie;
