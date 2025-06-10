import React from "react";
import AddMovieForm from "./AddMovieForm";

const AddMovie = ({ handleAdd }) => {
  return <AddMovieForm onAddMovie={handleAdd} />;
};

export default AddMovie;
