import React from 'react'
import ReactPlayer from 'react-player';
import './Player.css'



const Player = ({movie}) => {

    const trailerUrl = movie.trailerLink ? `https://www.youtube.com/watch?v=${movie.trailerLink.substring(movie.trailerLink.length - 11)}` : null;

   
  return (
     <div className='trailer-player'>
      <div className='actual-player'>
        {trailerUrl!=null? 
        (
        <ReactPlayer className='one-player' controls='true' 
        playing={true} 
        url={trailerUrl} 
          />):null}
        </div>
        </div>
  )
}

export default Player
