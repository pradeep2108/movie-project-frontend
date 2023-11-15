import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import MovieService from '../../api/movieService';
import './ReviewForm.css'

const ReviewForm = ({movie}) => {

  const [body,setBody] = useState('');
  const imdbId = movie.imdbId ;
  // const reviewIds = movie.reviewIds;

  const reviewIds = movie ? (movie.reviewIds || []) : [];

const addReview = async ()=>{
  try{
     const reviewData = {
      reviewBody:body,
      imdbId:imdbId, 
     };

     if(body!=""){
      const response = await MovieService.addReview(reviewData);
     console.log(response);
     if (response.status === 201) {
      alert('added successfully')
      setBody(''); 
     }
      
  }
  }catch(err){
    console.error(err);
}
};

    const handleChange = (e)=>{
    setBody(e.target.value);
  };

  return (

    <div className="review-container container-fluid">
  <label  className="form-label">
    {reviewIds !== null ? `${reviewIds.length} Reviews` : 'No Reviews'}</label>
  <textarea value={body} onChange={handleChange} className='text-box' placeholder='Add a review'></textarea>
  <Button variant='outline-info' onClick={addReview} className='submit-btn'>Submit</Button>
</div>
      
  )
}

export default ReviewForm
