import http from "./axiosConfig";

const getAllMovies = () => {
  return http.get("/allmovies");
};

const getMovieByTitle = (title) => {
  return http.get("/movie/title/" + title);
};

const addReview = (data) => {
  return http.post("/addreview", data);
};

const MovieService = {
  getAllMovies,
  getMovieByTitle,
  addReview,
};

export default MovieService;
