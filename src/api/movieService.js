import http from "./axiosConfig";

let email;
let password;

function getEmailPassword() {
  email = localStorage.getItem("email");
  password = localStorage.getItem("password");
}

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

const addMovie = (data) => {
  return http.post("/admin/addmovie", data);
};

// const addMovie = (data, jwtToken) => {
//   getEmailPassword();
//   if (!jwtToken) {
//     // Handle the case where the token is not present (e.g., redirect to login)
//     return Promise.reject("JWT token is missing");
//   }

//   return http.post("/admin/addmovie", data, {
//     headers: {
//       Authorization: `Bearer ${jwtToken}`,
//     },
//   });
// };
const MovieService = {
  getAllMovies,
  getMovieByTitle,
  addReview,
  getReview,
  addMovie,
};

export default MovieService;
