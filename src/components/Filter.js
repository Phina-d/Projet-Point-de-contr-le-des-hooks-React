import React from "react";
import { FaSearch, FaStar } from "react-icons/fa";

const Filter = ({ filterTitle, filterRating, setFilterTitle, setFilterRating }) => (
  <div className="container my-4 p-4 bg-dark text-light rounded shadow">
    <h5 className="text-center mb-3">Filtrer les films</h5>
    <div className="row justify-content-center">
      <div className="col-md-5 mb-3">
        <div className="input-group">
          <span className="input-group-text bg-secondary text-white">
            <FaSearch />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Filtrer par titre"
            value={filterTitle}
            onChange={(e) => setFilterTitle(e.target.value)}
          />
        </div>
      </div>
      <div className="col-md-3 mb-3">
        <div className="input-group">
          <span className="input-group-text bg-secondary text-white">
            <FaStar />
          </span>
          <input
            type="number"
            className="form-control"
            placeholder="Note min"
            value={filterRating}
            onChange={(e) => setFilterRating(e.target.value)}
            min="0"
            max="10"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Filter;
