import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const AddMovieForm = ({ onAddMovie }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState("");
  const [trailerLink, setTrailerLink] = useState("");
  const [error, setError] = useState("");

  const isValidYouTubeURL = (url) => {
    const pattern = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/).+/;
    return pattern.test(url);
  };

  const convertToEmbedLink = (url) => {
  // console.log("Lien embed à enregistrer :", convertToEmbedLink(trailerLink));

    if (!url) return null;

  try {
    const parsed = new URL(url);
    const host = parsed.hostname;

    if (host.includes("youtube.com")) {
      const videoId = parsed.searchParams.get("v");
      if (videoId) return `https://www.youtube.com/embed/${videoId}`;
    }

    if (host.includes("youtu.be")) {
      const videoId = parsed.pathname.split("/")[1];
      if (videoId) return `https://www.youtube.com/embed/${videoId}`;
    }
// 🔍 TEST TEMPORAIRE
console.log(convertToEmbedLink("https://www.youtube.com/watch?v=YoHD9XEInc0&ab_channel=WarnerBrosFrance"));
console.log(convertToEmbedLink("https://youtu.be/YoHD9XEInc0"));
    return url; // fallback
  } catch (e) {
    return url;
  }
};


  const handleSubmit = (e) => {
  e.preventDefault();
  setError("");

  if (!title || !description || !posterURL || !rating) {
    setError("Tous les champs obligatoires doivent être remplis.");
    return;
  }

  if (trailerLink && !isValidYouTubeURL(trailerLink)) {
    setError("L'URL de la bande-annonce doit être un lien YouTube valide.");
    return;
  }

  const embeddedTrailer = convertToEmbedLink(trailerLink);
 console.log("Lien embed à enregistrer :", embeddedTrailer); // ✅ ici c’est bon !
  const newMovie = {
    id: Date.now(),
    title,
    description,
    posterURL,
    rating: Number(rating),
    trailerLink: embeddedTrailer, // ✅ Ici on met bien le lien embed
  };

  // 🔍 Vérification en console
  console.log("Lien trailer brut :", trailerLink);
  console.log("Lien embed utilisé :", embeddedTrailer);
  console.log("Film ajouté :", newMovie);

  onAddMovie(newMovie);

  // Réinitialisation du formulaire
  setTitle("");
  setDescription("");
  setPosterURL("");
  setRating("");
  setTrailerLink("");
};


  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 rounded shadow"
      style={{
        background: "#1f1f1f",
        color: "#fff",
        maxWidth: "600px",
        margin: "40px auto",
        border: "1px solid #333",
      }}
      noValidate
    >
      <h4 className="text-center mb-4">🎬 Ajouter un nouveau film</h4>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Titre <span className="text-danger">*</span>
        </label>
        <input
          id="title"
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Titre du film"
          required
          style={{ backgroundColor: "#2b2b2b", color: "#fff", border: "1px solid #444" }}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description <span className="text-danger">*</span>
        </label>
        <textarea
          id="description"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Résumé du film"
          rows="3"
          required
          style={{ backgroundColor: "#2b2b2b", color: "#fff", border: "1px solid #444" }}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="posterURL" className="form-label">
          Affiche (URL) <span className="text-danger">*</span>
        </label>
        <input
          id="posterURL"
          type="url"
          className="form-control"
          value={posterURL}
          onChange={(e) => setPosterURL(e.target.value)}
          placeholder="https://..."
          required
          style={{ backgroundColor: "#2b2b2b", color: "#fff", border: "1px solid #444" }}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="rating" className="form-label">
          Note <span className="text-danger">*</span>
        </label>
        <input
          id="rating"
          type="number"
          className="form-control"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          placeholder="Note sur 10"
          min="0"
          max="10"
          required
          style={{ backgroundColor: "#2b2b2b", color: "#fff", border: "1px solid #444" }}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="trailerLink" className="form-label">
          Bande-annonce (YouTube)
        </label>
        <input
          id="trailerLink"
          type="text"
          className="form-control"
          value={trailerLink}
          onChange={(e) => setTrailerLink(e.target.value)}
          placeholder="https://www.youtube.com/watch?v=..."
          style={{ backgroundColor: "#2b2b2b", color: "#fff", border: "1px solid #444" }}
        />
      </div>

      <button type="submit" className="btn btn-success w-100">
        <FaPlus className="me-2" /> Ajouter
      </button>
    </form>
  );
};

export default AddMovieForm;
