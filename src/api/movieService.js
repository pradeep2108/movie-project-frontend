import http from "./axiosConfig"

const getAllMovies = ()=>{
    return http.get('/api/reelreview/allmovies')
}

const MovieService = {
    getAllMovies
}

export default MovieService;