import React, { useEffect, useState } from 'react';
import './Review.css'
function Review({ movie }) {
  const reviewIds = movie ? (movie.reviewIds || []) : [];
  const [reviews, setReviews] = useState([]);

  console.log(reviewIds.id)
  useEffect(() => {
    const fetchReviews = () => {
      try {
         reviewIds.map((reviewId) => {   
          setReviews(reviewId.body) 
        });  
        
         
      } catch (error) {
        setReviews([]); 
      }
    };

    if (reviewIds.length > 0) {
      fetchReviews();
    }
  }, [reviewIds]);


  if (reviewIds.length > 0) {
    return (
      <div>
        <p>
           {reviewIds.map((review, index) => (
             <span className='review' key={index}>{review.body}
             <hr className='custom-hr'/>
             </span>
          ))}
          
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <p>***No Reviews***</p>
      </div>
    );
  }
}

export default Review;
