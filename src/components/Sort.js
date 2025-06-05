import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Si pas encore fait

const Sort = ({ sortBy, setSortBy }) => {
  return (
    <div className="container mt-4">
      <form className="text-center">
        <div className="mb-3">
          <label htmlFor="sort-select" className="form-label">
            Trier par :
          </label>
          <select
            id="sort-select"
            className="form-select mx-auto"
            style={{ maxWidth: "300px" }}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">-- Choisir --</option>
            <option value="title-asc">Titre (A-Z)</option>
            <option value="title-desc">Titre (Z-A)</option>
            <option value="rating-asc">Note croissante</option>
            <option value="rating-desc">Note décroissante</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Sort;
