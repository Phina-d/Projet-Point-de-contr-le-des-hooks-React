// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Films from "./components/Films"; // ➕ ajoute cette ligne
import Home from "./components/Home";
import Contact from "./components/Contact";
import MovieDescription from "./components/MovieDescription";
import moviesData from "./moviesData";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
  document.body.className = darkMode ? "dark-mode" : "light-mode";
  document.body.style.backgroundColor = darkMode ? "#121212" : "#fff";
  document.body.style.color = darkMode ? "#fff" : "#000";
  return () => {
    document.body.className = "";
    document.body.style.backgroundColor = "";
    document.body.style.color = "";
  };
}, [darkMode]);


  const [movies, setMovies] = useState(moviesData);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState("");
  const [sortBy, setSortBy] = useState("");

  const toggleDarkMode = () => setDarkMode(prev => !prev);
  const handleAdd = (newMovie) => setMovies([newMovie, ...movies]);
  const handleDelete = (id) => setMovies(movies.filter((movie) => movie.id !== id));

  const filteredMovies = movies
    .filter(
      (movie) =>
        movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
        movie.rating >= Number(filterRating || 0)
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "title-asc": return a.title.localeCompare(b.title);
        case "title-desc": return b.title.localeCompare(a.title);
        case "rating-asc": return a.rating - b.rating;
        case "rating-desc": return b.rating - a.rating;
        default: return 0;
      }
    });

  return (
    <Router>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="container mt-4 mb-5">
        <Routes>
          <Route path="/home" element={
            <Home
              filterTitle={filterTitle}
              setFilterTitle={setFilterTitle}
              filterRating={filterRating}
              setFilterRating={setFilterRating}
              sortBy={sortBy}
              setSortBy={setSortBy}
              handleAdd={handleAdd}
              filteredMovies={filteredMovies}
              handleDelete={handleDelete}
            />
          } />

          <Route path="/contact" element={<Contact />} />
          <Route path="/movie/:id" element={<MovieDescription movies={movies} />} />
          <Route path="/" element={<Navigate to="/home" />} />
        <Route
  path="/films"
  element={<Films movies={movies} handleDelete={handleDelete} />}
/>

        </Routes>
      </div>
      <Footer darkMode={darkMode} />
    </Router>
  );
};

export default App;
