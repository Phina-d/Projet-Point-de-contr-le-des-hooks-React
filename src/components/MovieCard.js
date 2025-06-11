import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, onDelete }) => {
  return (
    <div className="card text-white bg-dark" style={{ width: '18rem', margin: '0 auto' }}>
      <img src={movie.posterURL} className="card-img-top" alt={movie.title} />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">Note : {movie.rating}/10</p>

        {/* Conteneur centré pour les boutons */}
        <div className="d-flex justify-content-center gap-3 mt-3">
        <button
  className="btn btn-outline-danger px-2 py-1"
  style={{ fontSize: '0.8rem' }}
  onClick={() => onDelete(movie.id)}
>
  <i className="fas fa-trash-alt me-1"></i> Supprimer
</button>

<Link to={`/movie/${movie.id}`} className="btn btn-outline-info btn-sm px-2">
  <i className="fas fa-info-circle me-1"></i> Voir détails
</Link>

        </div>
      </div>
    </div>
  );
};

export default MovieCard;
