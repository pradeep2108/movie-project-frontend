import React, { useEffect, useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import MovieService from '../../api/movieService';
import ReviewForm from '../reviewform/ReviewForm';

const Review = ({getMovieData, movie, reviews, setReviews}) => {

  const revText = useRef('');
  const [rev,setRev] = useRef('')
  let params = useParams();
  let movieId = params.movieId;

useEffect(()=>{
  getMovieData(movieId);
},[movieId])

const addReview = async ()=>{
  try{
    const response = await MovieService.addReview({revText:rev, imdbid:movieId})

  const updadatedReviews =[...reviews,{body:rev}];

  rev.value='';

  setReviews(updadatedReviews);
  setRev('')

  }catch(err){
    console.error(err)
  }


}

  return (
    <Container>
      <Row>
        <Col><h3>Reviews</h3></Col>
        </Row>
        <Row>
          <Col>
          {
            <ReviewForm handleSubmit={addReview} revText={revText} labelText= "Write a Review?" setRev={setRev}/>
          }
          </Col>
          <Row>
            <Col>
            <hr/>
            </Col>
          </Row>
            {
              reviews?.map((r, index)=>{
                return(
                  <div key={index}>
                  <Row>
                    <Col>{r.body}</Col>
                  </Row>
                  <Row>
                    <hr/>
                    </Row>
                  </div>
                )
              })
            }
        </Row>
    </Container>
  )
}

export default Review
