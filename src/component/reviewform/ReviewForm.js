import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import MovieService from '../../api/movieService';
import './ReviewForm.css'

const ReviewForm = ({movie}) => {

  const [body,setBody] = useState('');
  const imdbId = movie.imdbId
  const reviewIds = movie ? movie.reviewIds : [];

  console.log(movie.reviewIds)
  console.log("new game")

const addReview = async ()=>{
  try{
     const reviewData = {
      reviewBody:body,
      imdbId:imdbId, 
     };

     console.log(imdbId)
     console.log(body)
     const response = await MovieService.addReview(reviewData);
     console.log(response);
     if (response.status === 201) {
      alert('added successfully')
      const newReview = response.data;
      // onReviewSubmitted(newReview);
      setBody('');  
  }
  }catch(err){
    console.error(err);
}
};

    const handleChange = (e)=>{
    setBody(e.target.value);
  };

  return (
        // <Form>
        //     <Form.Group>
        //         <Form.Label>{labelText}</Form.Label>
        //         <Form.Control ref={revText} as='textarea' rows={3} defaultValue={defaultValue}/>
        //     </Form.Group>
        //     <Button variant='outline-info' onClick={handleSubmit}>Submit</Button>
        // </Form>

    <div className="review-container container-fluid">
  <label for="exampleFormControlInput1" className="form-label">
    {reviewIds ? `${reviewIds.length > 0} Reviews` : 'No Reviews'}</label>
  <textarea value={body} onChange={handleChange} className='text-box' placeholder='Add a review'></textarea>
  <Button variant='outline-info' onClick={addReview} className='submit-btn'>Submit</Button>
</div>
      
  )
}

export default ReviewForm
