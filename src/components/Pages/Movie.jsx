// import React, { useEffect, useState } from "react";
// import { MovieList } from "components/MovieList/MovieList";

export const Movie = () => {


  return (
    <>
      <form className="row g-3">
        <div className="col-auto">
          <label htmlFor="movieSearch" className="visually-hidden">
            Film search
          </label>
          <input
            type="text"
            className="form-control"
            id="movieSearch"
            placeholder="Film search"
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Поиск
          </button>
        </div>
      </form>
    </>
  );
};
