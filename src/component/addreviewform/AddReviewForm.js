import { Tag } from "antd";
import React, { useState } from "react";
import MovieService from "../../api/movieService";
import { GENRES_MOCK_DATA } from "../../constants/genres.constants";
import Input from "../input/Input";
import "./AddReviewForm.css";

const AddReviewForm = () => {
  const initialValues = {
    imdbId: "",
    title: "",
    releaseDate: "",
    trailerLink: "",
    genres: [],
    poster: "",
    backdrops: [],
    reviewIds: [],
    description: "",
    duration: "",
    director: "",
    writers: [],
    stars: [],
  };
  const [inputValue, setInputValue] = useState(initialValues);
  const [formError, setFormError] = useState({});
  const [writer, setWriter] = useState(null);
  const [star, setStar] = useState(null);
  const [genre, setgenre] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAddWriter = (event) => {
    event.preventDefault();
    console.log("entered add button");
    setInputValue({ ...inputValue, writers: [...inputValue.writers, writer] });
    setWriter("");
  };

  const handleAddStars = (event) => {
    event.preventDefault();
    console.log("entered star button");
    setInputValue({ ...inputValue, stars: [...inputValue.stars, star] });
    setStar("");
  };
  const handleAddgenres = (event) => {
    event.preventDefault();
    setInputValue({ ...inputValue, genres: [...inputValue.genres, genre] });
    setgenre("");
  };

  const handleTagClose = (index, type) => {
    setInputValue((prevInput) => {
      const updatedInput = { ...prevInput };
      updatedInput[type].splice(index, 1);
      return updatedInput;
    });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "writers") {
      setWriter(value);
    } else if (name === "stars") {
      console.log("entered stars");
      setStar(value);
    } else if (name === "genres") {
      console.log("entered stars");
      setgenre(value);
    } else {
      // For other fields, update the state as usual
      setInputValue((prevInput) => ({
        ...prevInput,
        [name]: value,
      }));
    }
  };
  console.log(inputValue.writers, writer);
  console.log(inputValue.stars, star);

  const validateForm = (formValues) => {
    const errors = {};

    if (!inputValue.imdbId) errors.imdbId = "Enter imdb id";
    if (!inputValue.title) errors.title = "Enter Movie Title";
    if (!inputValue.releaseDate)
      errors.releaseDate = "Enter Movie Release Date";
    if (!inputValue.genres) errors.genres = "Enter Genres";
    if (!inputValue.poster) errors.poster = "Enter Poster Image";
    if (!inputValue.backdrops) errors.backdrops = "Enter Backdrop Image";
    if (!inputValue.trailerLink) errors.backdrops = "Enter trailer link";
    if (!inputValue.description) errors.description = "Enter movie description";
    if (!inputValue.duration) errors.duration = "Enter movie Duration";
    if (!inputValue.director) errors.director = "Enter director name";
    if (!inputValue.writers) errors.writers = "Enter Writers name";
    if (!inputValue.stars) errors.stars = "Password is required";
    return errors;
  };

  const saveMovie = async (data) => {
    await MovieService.addMovie(data)
      .then((response) => {
        alert("added successfully");
        setInputValue(initialValues);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
    setFormError(validateForm(inputValue));
    setIsSubmitted(true);
    if (Object.keys(formError).length === 0) saveMovie(inputValue);
  };

  return (
    <div className="add-form-container">
      <form className="form-wrapper" onSubmit={handleSubmit}>
        <b className="heading">Add New Movie</b>
        <div className="box1">
          <div className="addmovie-input-container">
            <label className="label">Imdb Id</label>
            <input
              type="text"
              placeholder="tt3915174"
              className="movie-input"
              value={inputValue.imdbId}
              name="imdbId"
              onChange={handleChange}
            ></input>
            <b className="error-message">{formError.imdbId}</b>
          </div>
          <div className="addmovie-input-container">
            <label className="label">Title</label>
            <input
              type="text"
              placeholder="Enter movie name"
              className="movie-input"
              value={inputValue.title}
              name="title"
              onChange={handleChange}
            ></input>
            <b className="error-message">{formError.title}</b>
          </div>
        </div>
        <div className="box1">
          <div className="addmovie-input-container">
            <label className="label">Release Date</label>
            <input
              type="text"
              placeholder="YYYY-MM-DD"
              className="movie-input"
              value={inputValue.releaseDate}
              name="releaseDate"
              onChange={handleChange}
            ></input>
            <b className="error-message">{formError.releaseDate}</b>
          </div>
          <div className="addmovie-input-container">
            <label className="label">Genres</label>
            <div className="input-with-button">
              <input
                placeholder="enter genres name"
                className="movie-input"
                rows="4"
                value={genre}
                name="genres"
                onChange={handleChange}
              ></input>
              <button class="button-30" role="button" onClick={handleAddgenres}>
                Add
              </button>
            </div>
            <div className="tag-wrapper">
              {inputValue.genres.map((genre, index) => (
                <Tag key={index} closeIcon>
                  {genre}
                </Tag>
              ))}
            </div>

            {/* <span style={{color:"black"}}></span> */}
            <b className="error-message">{formError.writers}</b>
          </div>

          {/* <div className="addmovie-input-container">
          <label className="label">Genres</label>
          <select
            className="movie-option-input"
            name="genres"
            value={inputValue.genres}
            onChange={handleChange}
          >
            <option value="" disabled hidden>
              Select a genre
            </option>
            {GENRES_MOCK_DATA.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>

          <b className="error-message">{formError.genres}</b>
        </div> */}
        </div>
        <div className="addmovie-input-container">
          <label className="label">Movie Description</label>
          <textarea
            placeholder="enter movie description..."
            className="movie-input"
            rows="4"
            value={inputValue.description}
            name="description"
            onChange={handleChange}
          ></textarea>
          <b className="error-message">{formError.description}</b>
        </div>
        <div className="addmovie-input-container">
          <label className="label">Poster</label>
          <input
            type="text"
            placeholder="enter image link"
            className="movie-input"
            value={inputValue.poster}
            name="poster"
            onChange={handleChange}
          ></input>
          <b className="error-message">{formError.poster}</b>
        </div>
        <div className="addmovie-input-container">
          <label className="label">Backdrops</label>
          <input
            type="text"
            placeholder="enter backdrop link"
            className="movie-input"
            value={inputValue.backdrops}
            name="backdrops"
            onChange={handleChange}
          ></input>
          <b className="error-message">{formError.backdrops}</b>
        </div>
        <div className="addmovie-input-container">
          <label className="label">
            Trailer Link{" "}
            <span className="extra-label">(recommended from youtube)</span>
          </label>
          <input
            type="text"
            placeholder="paste a link"
            className="movie-input"
            value={inputValue.trailerLink}
            name="trailerLink"
            onChange={handleChange}
          ></input>
          <b className="error-message">{formError.trailerLink}</b>
        </div>
        <div className="addmovie-input-container">
          <label className="label">Duration</label>
          <input
            placeholder="HH MM"
            className="movie-input"
            rows="4"
            value={inputValue.duration}
            name="duration"
            onChange={handleChange}
          ></input>
          <b className="error-message">{formError.duration}</b>
        </div>
        <div className="addmovie-input-container">
          <label className="label">Director</label>
          <input
            placeholder="enter director name"
            className="movie-input"
            rows="4"
            value={inputValue.director}
            name="director"
            onChange={handleChange}
          ></input>
          <b className="error-message">{formError.director}</b>
        </div>
        <div className="addmovie-input-container">
          <label className="label">Writers</label>
          <div className="input-with-button">
            <input
              placeholder="enter writer name"
              className="movie-input"
              rows="4"
              value={writer}
              name="writers"
              onChange={handleChange}
            ></input>
            <button class="button-30" role="button" onClick={handleAddWriter}>
              Add
            </button>
          </div>
          <div className="tag-wrapper">
            {inputValue.writers.map((writer, index) => (
              <Tag key={index} closeIcon>
                {writer}
              </Tag>
            ))}
          </div>

          {/* <span style={{color:"black"}}></span> */}
          <b className="error-message">{formError.writers}</b>
        </div>
        <div className="addmovie-input-container">
          <label className="label">Stars</label>
          <div className="input-with-button">
            <input
              placeholder="enter stars name"
              className="movie-input"
              rows="4"
              value={star}
              name="stars"
              onChange={handleChange}
            ></input>
            <button class="button-30" role="button" onClick={handleAddStars}>
              Add
            </button>
          </div>
          <div className="tag-wrapper">
            {inputValue.stars.map((star) => (
              <Tag closeIcon>{star}</Tag>
            ))}
          </div>
          <div className="tag-wrapper"></div>
          <b className="error-message">{formError.stars}</b>
        </div>
        <button class="button-87" role="button">
          submit
        </button>
      </form>
    </div>
  );
};

export default AddReviewForm;
