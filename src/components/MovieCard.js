import React from 'react';
import '../css/MovieCard.css';

function MovieCard({ title, year, poster }) {
  return (
    <div className="movie-card">
      <img
        src={poster !== "N/A" ? poster : "https://via.placeholder.com/300x450?text=No+Image"}
        alt={`${title} poster`}
        className="movie-poster"
      />
      <div className="movie-info">
        <h3>{title}</h3>
        <p>{year}</p>
      </div>
    </div>
  );
}

export default MovieCard;