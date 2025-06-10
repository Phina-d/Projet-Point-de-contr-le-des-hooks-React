// src/components/Home.js
import React from "react";
import Filter from "./Filter";
import Sort from "./Sort";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";

const Home = ({
  filterTitle,
  setFilterTitle,
  filterRating,
  setFilterRating,
  sortBy,
  setSortBy,
  handleAdd,
  filteredMovies,
  handleDelete,
}) => {
  return (
    <>
      <h1 className="text-center mb-4">🎬 Mes Films & Séries</h1>
      <Filter
        filterTitle={filterTitle}
        filterRating={filterRating}
        setFilterTitle={setFilterTitle}
        setFilterRating={setFilterRating}
      />
      <Sort sortBy={sortBy} setSortBy={setSortBy} />
      <AddMovie handleAdd={handleAdd} />
      <MovieList movies={filteredMovies} handleDelete={handleDelete} />
    </>
  );
};

export default Home;
