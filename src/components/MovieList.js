import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, handleDelete }) => {
  if (!movies || movies.length === 0) {
    return (
      <div className="container mt-4">
        <p className="text-center">Aucun film trouvé.</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row justify-content-center g-4">
        {movies.map((movie) => (
          <div key={movie.id} className="col-sm-6 col-md-4 col-lg-3 d-flex mb-4">
            {/* d-flex assure que MovieCard ait une hauteur uniforme si tu veux */}
            <MovieCard movie={movie} onDelete={handleDelete} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
