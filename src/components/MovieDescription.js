import React from "react";
import { useParams, Link } from "react-router-dom";

const MovieDescription = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return (
      <div className="text-center mt-5 text-white bg-dark p-5 rounded shadow">
        <h2>❌ Film non trouvé</h2>
        <Link to="/" className="btn btn-outline-light mt-3">
          Retour à l'accueil
        </Link>
      </div>
    );
  }

  const getYouTubeEmbedURL = (url) => {
    if (!url) return null;

    try {
      const parsed = new URL(url);
      const host = parsed.hostname.toLowerCase();

      if (host === "www.youtube.com" && parsed.pathname.startsWith("/embed/")) {
        return url;
      }

      if (host.includes("youtube.com")) {
        const videoId = parsed.searchParams.get("v");
        if (videoId) return `https://www.youtube.com/embed/${videoId}`;
      }

      if (host === "youtu.be") {
        const videoId = parsed.pathname.slice(1);
        if (videoId) return `https://www.youtube.com/embed/${videoId}`;
      }

      return null;
    } catch (e) {
      const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
      return match ? `https://www.youtube.com/embed/${match[1]}` : null;
    }
  };

  const embedURL = getYouTubeEmbedURL(movie.trailerLink || movie.trailerURL);

  // Debug
  console.log("Trailer brut :", movie.trailerLink || movie.trailerURL);
  console.log("Embed URL calculé :", embedURL);

  return (
    <div className="container mt-5 text-white bg-dark p-4 rounded shadow">
      <Link to="/" className="btn btn-outline-light mb-4">
        ⬅ Retour à l'accueil
      </Link>

      <div className="row">
        <div className="col-md-4 text-center mb-3">
          {movie.posterURL ? (
            <img
              src={movie.posterURL}
              alt={movie.title}
              className="img-fluid rounded shadow"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          ) : (
            <p>📷 Aucune affiche disponible</p>
          )}
        </div>

        <div className="col-md-8">
          <h2 className="mb-3">
            {movie.title} {movie.year && `(${movie.year})`}
          </h2>

          {[
            { label: "Réalisateur", value: movie.director, emoji: "🎬" },
            { label: "Acteurs", value: movie.actors?.join(", "), emoji: "🎭" },
            { label: "Langue", value: movie.language, emoji: "🗣️" },
            { label: "Pays", value: movie.country, emoji: "🌍" },
            { label: "Durée", value: movie.duration ? `${movie.duration} min` : null, emoji: "⏱️" },
            { label: "Genre", value: movie.genre, emoji: "🎞️" },
            { label: "Récompenses", value: movie.awards, emoji: "🏆" },
            { label: "Synopsis", value: movie.synopsis, emoji: "📝" },
          ].map(
            ({ label, value, emoji }) =>
              value && (
                <p key={label}>
                  <strong>{emoji} {label} :</strong> {value}
                </p>
              )
          )}

          <p>
            <strong>⭐ Note :</strong> {movie.rating}/10
          </p>

          {embedURL ? (
            <>
              <a
                href={embedURL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-3"
              >
                🎬 Voir sur YouTube
              </a>

              <div className="mt-4">
                <h5 className="mb-2">📺 Bande-annonce intégrée :</h5>
                <div className="ratio ratio-16x9">
                  <iframe
                    src={embedURL}
                    title={`Bande-annonce de ${movie.title}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ borderRadius: "8px" }}
                  ></iframe>
                </div>
              </div>
            </>
          ) : (
            <p className="mt-3">🎥 Aucune bande-annonce disponible</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDescription;
