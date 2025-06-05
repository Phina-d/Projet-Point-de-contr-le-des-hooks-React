import React from "react";

const Filter = ({ filterTitle, filterRating, setFilterTitle, setFilterRating }) => (
  <div style={{ marginBottom: "20px", textAlign: "center" }}>
    <input
      type="text"
      placeholder="Filtrer par titre"
      value={filterTitle}
      onChange={(e) => setFilterTitle(e.target.value)}
      style={{ marginRight: "10px" }}
    />
    <input
      type="number"
      placeholder="Note min"
      value={filterRating}
      onChange={(e) => setFilterRating(e.target.value)}
      min="0"
      max="10"
    />
  </div>
);

export default Filter;
