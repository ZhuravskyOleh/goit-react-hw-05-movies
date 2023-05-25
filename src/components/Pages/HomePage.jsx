import React from "react";
import { useState, useEffect } from "react";
import { FetchTrends } from "components/API/API";
import { MovieList } from "components/MovieList/MovieList";


export const HomePage = () => {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        FetchTrends().then(setMovies)
      
  }, []);

    return (
        <MovieList data={ movies } />
    );
};