import React, { useState } from "react";

const AddMovie = ({ handleAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState("");
  const [trailerURL, setTrailerURL] = useState("");
  const [error, setError] = useState("");

  const isValidYouTubeURL = (url) => {
    const pattern = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/).+/;
    return pattern.test(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // reset

    if (!title || !description || !posterURL || !rating) {
      setError("Tous les champs obligatoires doivent être remplis.");
      return;
    }

    if (trailerURL && !isValidYouTubeURL(trailerURL)) {
      setError("L'URL de la bande-annonce doit être un lien YouTube valide.");
      return;
    }

    const newMovie = {
      id: Date.now(),
      title,
      description,
      posterURL,
      rating: Number(rating),
      trailerURL: trailerURL || null,
    };

    handleAdd(newMovie);

    // reset form
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating("");
    setTrailerURL("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-light p-4 rounded shadow-sm mt-5"
      style={{ maxWidth: "500px", margin: "0 auto" }}
      noValidate
    >
      <h5 className="text-center mb-4">Ajouter un film</h5>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Titre <span style={{ color: "red" }}>*</span>
        </label>
        <input
          id="title"
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Titre du film"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description <span style={{ color: "red" }}>*</span>
        </label>
        <textarea
          id="description"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Résumé du film"
          rows="3"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="posterURL" className="form-label">
          Affiche (URL) <span style={{ color: "red" }}>*</span>
        </label>
        <input
          id="posterURL"
          type="url"
          className="form-control"
          value={posterURL}
          onChange={(e) => setPosterURL(e.target.value)}
          placeholder="https://..."
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="rating" className="form-label">
          Note <span style={{ color: "red" }}>*</span>
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
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Bande-annonce (URL YouTube)</label>
        <input
          type="text"
          className="form-control"
          value={trailerURL}
          onChange={(e) => setTrailerURL(e.target.value)}
          placeholder="https://www.youtube.com/watch?v=..."
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">
        Ajouter
      </button>
    </form>
  );
};

export default AddMovie;
