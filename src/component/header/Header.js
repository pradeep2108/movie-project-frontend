import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Route, Routes } from "react-router-dom";
import "./Header.css";
import { useEffect, useState } from "react";
import Search from "../searchbar/Search";

const Header = ({ movies }) => {
  const username = localStorage.getItem("userName");

  const authorities = localStorage.getItem("authority");
  console.log("this is authority " + authorities);
  console.log(username);
  //   const[username, setUserName] = useState('');

  //  useEffect(()=>{
  //   setUserName(localStorage.getItem("username"))
  //  },[])

  //     const handleLogout=(e)=>{
  //       e.preventDefault();
  //       setUserName('');
  //     }

  return (
    <Navbar
      bg="black"
      variant="dark"
      expand="lg"
      className="navbar-main navbar-fixed"
    >
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: "gold" }}>
          {/* <FontAwesomeIcon icon ={faVideoSlash}/>Gold */}
          <NavLink className="nav-link" to="/">
            <img
              src={`${process.env.PUBLIC_URL}/reel-reivew-logo.png`}
              alt="logo"
              width={200}
              height={50}
            />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            {/* <NavLink className="nav-link" to="/watchList">
              Watch List
            </NavLink> */}
          </Nav>
          {authorities === "ADMIN" ? (
            <Button
              variant="outline-warning"
              className="me-2"
              as={NavLink}
              to="/admin/addmovie"
            >
              Add Movie
            </Button>
          ) : (
            <div></div>
          )}
          {!username ? (
            <>
              {/* <Button variant="outline-info" className="me-2" as={NavLink} to="/login">Login</Button> */}
              <Button
                variant="outline-warning"
                className=""
                as={NavLink}
                to="/signup"
              >
                Sign Up
              </Button>
            </>
          ) : (
            <Button
              variant="outline-warning"
              className="me-2"
              as={NavLink}
              to="/logoutuser"
            >
              Logout
            </Button>
          )}
          <div className="search-input-header">
            <Search movies={movies} />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
