// src/components/Films.js
import React from "react";
import MovieList from "./MovieList";

const Films = ({ movies, handleDelete }) => {
  return (
    <div className="container">
      <h2 className="text-center mb-4">🎥 Tous les Films</h2>
      <MovieList movies={movies} handleDelete={handleDelete} />
    </div>
  );
};

export default Films;
