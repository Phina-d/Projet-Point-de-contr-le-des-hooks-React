import React from "react";

const MovieCard = ({ movie, onDelete }) => {
  const {
    id,
    title,
    description,
    posterURL,
    rating,
    genre,
    duration,
    year,
    trailerURL,
  } = movie;

  return (
    <div
      className="card m-3"
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "16px",
        margin: "10px",
        width: "250px",
        textAlign: "center",
        backgroundColor: "#f8f8f8",
      }}
    >
      <img src={posterURL} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">
          {title} {year && `(${year})`}
        </h5>
        <p className="card-text">{description}</p>
        {genre && (
          <p>
            <strong>Genre:</strong> {genre}
          </p>
        )}
        {duration && (
          <p>
            <strong>Durée:</strong> {duration} minutes
          </p>
        )}
        <p>
          <strong>Note:</strong> {rating}/10 ⭐
        </p>

        {/* Bouton bande-annonce */}
        {trailerURL && (
          <button
            className="btn btn-primary mt-2"
            onClick={() => window.open(trailerURL, "_blank")}
            style={{ marginRight: "10px" }}
          >
            Voir la bande-annonce
          </button>
        )}

        {/* Bouton supprimer */}
        <button className="btn btn-danger mt-2" onClick={() => onDelete(id)}>
          Supprimer
        </button>

        {/* Lien vers l'image si souhaité */}
        <div className="mt-2">
          <small
            style={{
              wordWrap: "break-word",
              fontSize: "0.8em",
              color: "gray",
            }}
          >
          </small>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
