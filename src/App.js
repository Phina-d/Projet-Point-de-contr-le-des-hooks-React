import React, { useState } from "react";
import moviesData from "./moviesData";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import Sort from "./components/Sort";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [movies, setMovies] = useState(moviesData);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState("");
  const [sortBy, setSortBy] = useState("");

  const toggleDarkMode = () => setDarkMode(prev => !prev);
  const handleAdd = (newMovie) => setMovies([...movies, newMovie]);
  const handleDelete = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const filteredMovies = movies
    .filter(
      (movie) =>
        movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
        movie.rating >= (filterRating || 0)
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "title-asc":
          return a.title.localeCompare(b.title);
        case "title-desc":
          return b.title.localeCompare(a.title);
        case "rating-asc":
          return a.rating - b.rating;
        case "rating-desc":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <div className="container mt-4 mb-5">
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

      </div>

      <Footer darkMode={darkMode} />
    </>
  );
};

export default App;
