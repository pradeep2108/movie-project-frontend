import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import MovieService from '../../api/movieService';
import Card from '../card/Card';
import Player from '../player/Player';
import Trailer from '../trailer/Trailer';
import './ReviewPage.css'

const ReviewPage = () => {
 const [movie, setMovie]= useState({});
  const params = useParams();
  const title = params.title;
    
    const getMovieByTitle = async ()=>{

        try{
            const response =  await MovieService.getMovieByTitle(title);
            setMovie(response.data)
        }catch(err){
            console.log(err)
        }
        
    }

    useEffect(()=>{
        getMovieByTitle()
    },[title])

  return (
    <div className='review-page-container'>
        <div className='box'>
        <div className='review-page-movie-details' >
           <h3>{movie.title}</h3> 
           <p>{new Date(movie.releaseDate).getFullYear()} - {movie.duration}</p>         
        </div>
        <div className='review-page-rating-container'>    
         </div>
    </div> 
<div>

<div className='review-movie-card'> 
    <Card movie={movie}/>  
<div className='movie-trailer-container'>
<Player movie={movie} /> 
</div>
    
        </div> 
</div>
    
        {/* <Card movie={movie}/>  
        <Player movie={movie}/>    */}
    </div>

  )
}

export default ReviewPage
