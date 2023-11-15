    import React, { useEffect, useState } from 'react'
    import ReactPlayer from 'react-player';
    import { useParams } from 'react-router-dom';
    import MovieService from '../../api/movieService';
    import Card from '../card/Card';
import Genres from '../genres/Genres';
import Input from '../input/Input';
import LoginForm from '../loginform/LoginForm';
import Credit from '../moviecredit/Credit';
    import Player from '../player/Player';
import Review from '../review/Review';
import ReviewForm from '../reviewform/ReviewForm';
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
        <div className='review-page-container '>
            <div className='review-page-movie-details' >
            <h3>{movie.title}</h3> 
            <p>
                {new Date(movie.releaseDate).getFullYear()} - {movie.duration}
            </p>       
            <div className='review-page-rating-container'>    
            </div>  
            </div>
            
    <div className='review-movie-card'> 
        <Card movie={movie}/>  
        </div> 
    <div className='movie-trailer-container '>
    <Player movie={movie}/> 
    </div>
    <div className='genres'>
        <Genres movie={movie}/>
        <span className='descirption-container'>
            <p className='description'>{movie.description}</p>
            <Credit movie={movie}/>
        </span>
        </div>    
        <ReviewForm onReviewSubmitted={movie} movie={movie}/>
        <Review movie={movie}/>
        <div className='user-reviews'>    
        
        </div>
        </div>

    );
    }

    export default ReviewPage
