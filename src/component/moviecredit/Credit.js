import React from 'react'
import './Credit.css'

const Credit = ({ movie }) => {
  return (
    <div>
      <hr className='horizontal-line'></hr>
      <p>Director<span className='name'>{movie.director}</span> </p>
      <hr className='horizontal-line'></hr>
      <p>Writers
        {Array.isArray(movie.writers) ? (
          movie.writers.map((writer, index) => (
            <span className='name' key={index}>{writer}</span>
          ))
        ) : (
          <span>No writers found</span>
        )}
      </p>
      <hr className='horizontal-line'></hr>
      <p>Stars {Array.isArray(movie.stars)?(
        movie.stars.map((actor,index)=>(
          <span className='name' key={index}>{actor}</span>
        ))
      ):(
        <span>No Actors found</span>
        )}
        </p>
        <hr/>

    </div>
  )
}

export default Credit;
