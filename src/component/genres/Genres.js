import React from 'react';
import './Genres.css'

const Genres = ({ movie }) => {
  // Check if the genres array exists and is not empty
  if (movie.genres && movie.genres.length > 0) {
    return (
      <div>
        <p>
          {movie.genres.map((genre, index) => (
            <span className='genre-tag' key={index}>{genre}</span>
          ))}
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <p>No genres available.</p>
      </div>
    );
  }
};

export default Genres;
