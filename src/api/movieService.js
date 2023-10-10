import http from "./axiosConfig"

const getAllMovies = ()=>{
    return http.get('/allmovies')
}

const getMovieByTitle = (title)=>{
    return http.get('/movie/title/'+ title)
} 

const MovieService = {
    getAllMovies, 
    getMovieByTitle
}

export default MovieService;