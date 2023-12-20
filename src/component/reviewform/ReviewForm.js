import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import MovieService from "../../api/movieService";
import "./ReviewForm.css";

const ReviewForm = ({ movie }) => {
  const [body, setBody] = useState("");
  const authorities = localStorage.getItem("authority");
  const imdbId = movie.imdbId;
  // const reviewIds = movie.reviewIds;

  const reviewIds = movie ? movie.reviewIds || [] : [];

  const addReview = async () => {
    try {
      if (authorities && authorities.length > 0) {
        const reviewData = {
          reviewBody: body,
          imdbId: imdbId,
        };
        if (body !== "") {
          const response = await MovieService.addReview(reviewData);
          console.log(response);
          if (response.status === 201) {
            Swal.fire({
              text: "review added successfully!",
              icon: "success",
              customClass: {
                width: "20rem",
                height: "3rem",
              },
            });
            setBody("");
          }
        } else {
          Swal.fire({
            text: "Please add your review!",
            icon: "warning",
          });
        }
      } else {
        Swal.fire({
          title: "<strong>opps</strong>",
          icon: "warning",
          html: `
            to add review please,
            <a href="http://localhost:3000/signup">Sign Up</a>
          `,
          showCloseButton: true,
          showCancelButton: false,
          focusConfirm: false,
          confirmButtonText: `
            <i class="fa fa-thumbs-up"></i> Great!
          `,
          confirmButtonAriaLabel: "Thumbs up, great!",
          cancelButtonText: `
            <i class="fa fa-thumbs-down"></i>
          `,
          cancelButtonAriaLabel: "Thumbs down",
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setBody(e.target.value);
  };

  return (
    <div className="review-container container-fluid">
      <label className="form-label">
        {reviewIds !== null ? `${reviewIds.length} Reviews` : "No Reviews"}
      </label>
      <textarea
        value={body}
        onChange={handleChange}
        className="text-box"
        placeholder="Add a review"
      ></textarea>
      <Button
        variant="outline-warning"
        onClick={addReview}
        className="submit-btn"
      >
        Submit
      </Button>
    </div>
  );
};

export default ReviewForm;
