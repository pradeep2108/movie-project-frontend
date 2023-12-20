import React from "react";
import "./Card.css";

const Card = ({ movie }) => {
  // Check if movie and movie.poster exist and are not null
  if (movie && movie.poster) {
    // Construct the poster URL
    const posterUrl = `https://www.themoviedb.org/t/p/original/${movie.poster.substring(
      movie.poster.length - 31
    )}`;

    return (
      <div className="card-container">
        <div className="card-poster-container">
          <div className="card-poster">
            <img src={posterUrl} alt="movie-poster" />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <p>No poster available for this movie</p>
        </div>
      </div>
    );
  }
};

export default Card;
