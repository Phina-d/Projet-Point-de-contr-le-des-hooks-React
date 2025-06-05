import React, { useState } from "react";
import MovieCard from "./MovieCard";
import Sort from "./Sort"; // ton composan
const MovieList = ({ movies, handleDelete }) => (
  
  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
    {movies.map((movie) => (
      <MovieCard
        key={movie.id}
        movie={movie}
        onDelete={handleDelete} // <- IMPORTANT : ici on appelle bien onDelete
      />
    ))}
  </div>
);


export default MovieList;
