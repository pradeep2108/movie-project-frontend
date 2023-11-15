import http from "./axiosConfig";

const getAllMovies = (jwToken) => {
  return http.get("/public/allmovies");
};

const getMovieByTitle = (title) => {
  return http.get("/public/movie/title/" + title);
};

const addReview = (data) => {
  return http.post("/public/addreview", data);
};

const getReview = (id) => {
  return http.get(`/public/getreview/${id}`);
};

const MovieService = {
  getAllMovies,
  getMovieByTitle,
  addReview,
  getReview,
};

export default MovieService;
