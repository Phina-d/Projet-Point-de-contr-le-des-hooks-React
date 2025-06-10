import React from "react";

const Sort = ({ sortBy, setSortBy }) => {
  return (
    <div
      className="container mt-4 p-3 rounded"
      style={{
        backgroundColor: "#1f1f1f",
        maxWidth: "350px",
        margin: "30px auto",
        border: "1px solid #333",
        boxShadow: "0 4px 8px rgba(0,0,0,0.7)",
      }}
    >
      <form className="text-center">
        <label
          htmlFor="sort-select"
          className="form-label"
          style={{ color: "#fff", fontWeight: "600", marginBottom: "12px" }}
        >
          Trier par :
        </label>
        <select
          id="sort-select"
          className="form-select mx-auto"
          style={{
            maxWidth: "300px",
            backgroundColor: "#2b2b2b",
            color: "#fff",
            border: "1px solid #444",
          }}
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">-- Choisir --</option>
          <option value="title-asc">Titre (A-Z)</option>
          <option value="title-desc">Titre (Z-A)</option>
          <option value="rating-asc">Note croissante</option>
          <option value="rating-desc">Note décroissante</option>
        </select>
      </form>
    </div>
  );
};

export default Sort;
