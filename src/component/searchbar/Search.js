



import React, { useState } from "react";
import  "./Search.css";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { Link } from "react-router-dom";
import Input from "../input/Input";

const Search = ({ movies }) => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [action, setAction] = useState("notClicked");
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleFilter = (event) => {
    const keyword = event.target.value;
    const filteredResults = movies.filter((movie) =>
      movie.title.toLowerCase().includes(keyword.toLowerCase())
    );
    if (keyword === "") {
      setFilteredMovies([]);
    } else {
      setFilteredMovies(filteredResults);
      setAction("notClicked");
    }
    setSearchKeyword(keyword);
  };

  const handleMovieClick = () => {
    setAction("Clicked");
    setSearchKeyword(""); // Reset the search keyword state when a movie is clicked
  };

  return (
    <div className="search">
      <div className="searchInputs">
      <label htmlFor="searchInput"></label>
      <input
        id="searchInput"
        type="search"
        pattern=".*\S.*"
        required
        placeholder="search movies.."
        autoComplete="off"
        onChange={handleFilter}
        value={searchKeyword}
        className="search-input-wrapper"
      />
      <div className="search-div"></div>
        <div className="searchIcon">
          {/* <SearchSharpIcon /> */}
        </div>
      </div>
      {filteredMovies.length !== 0 ? (
        <div className={action == "Clicked" ? "hide" : "dataResults"}>
          {filteredMovies.slice(0, 4).map((movie) => {
            return (
              <div key={movie.id}>
                <Link
                  to={`/reviewpage/${movie.title}`}
                  onClick={handleMovieClick}
                >
                  <img
                    className="search-img"
                    src={movie.poster}
                    alt={`movie poster of ${movie.title}`}
                  />
                </Link>
                <div className="search-info">
                  {movie.title}
                  <div className="year">
                    {"  ("} {new Date(movie.releaseDate).getFullYear()}
                    {" )"}
                  </div>
                </div>

                <hr className="line" />
              </div>
            );
          })}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Search;
