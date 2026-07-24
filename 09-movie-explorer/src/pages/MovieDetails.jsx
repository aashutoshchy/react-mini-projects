import React from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();
  return <div>Movie detail page {id}</div>;
}

export default MovieDetails;
