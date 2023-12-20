import logo from "./logo.svg";
import "./App.css";
import api from "./api/axiosConfig";
import { useEffect, useState } from "react";
import MovieService from "./api/movieService";
import Layout from "./component/layout";
import {
  createBrowserRouter,
  RoutesRouterProvider,
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import RootLayout from "./component/layout";
import Home from "./component/home/home";
import { Navbar } from "react-bootstrap";
import Header from "./component/header/Header";
import Trailer from "./component/trailer/Trailer";
import ReviewPage from "./component/reviewpage/ReviewPage";
import LogoutForm from "./component/logout/LogoutForm";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoginSignup from "./component/LoginSignup/LoginSignup";
import AddReviewForm from "./component/addreviewform/AddReviewForm";
import { Footer } from "antd/es/layout/layout";
import FooterDesign from "./component/footerDesign/FooterDesign";

function App() {
  const [username, setUserName] = useState("");
  const [authorities, setAuthorities] = useState("");
  const [movies, setMovie] = useState([]);
  const location = useLocation();
  useEffect(() => {
    setUserName(localStorage.getItem("userName"));
    setAuthorities(localStorage.getItem("authority"));
  }, []);

  console.log("this is form app.js" + localStorage.getItem("authority"));
  const getMovies = async () => {
    try {
      const response = await MovieService.getAllMovies();
      console.log(response.data);
      setMovie(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  // const router = createBrowserRouter([
  //   {path:'/', element:<RootLayout/>},
  //   {path:'/home', element:<Home movies= {movies}/> }
  // ])

  return (
    <div className="App">
      <Header className="header" movies={movies} />
      <Routes>
        <Route
          path="/"
          element={<RootLayout movies={movies} setUsername={setUserName} />}
        />
        <Route path="/" element={<Home movies={movies} />} />
        <Route path="/Trailer/:ytTailerId" element={<Trailer />}></Route>
        <Route path="/reviewpage/:title" element={<ReviewPage />}></Route>
        {/* <Route path='/login' element={<LoginForm setUsername={setUserName} setAuthorities={setAuthorities}/>}></Route> */}
        <Route
          path="/logoutuser"
          element={
            <LogoutForm
              setUsername={setUserName}
              setAuthorities={setAuthorities}
            />
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <LoginSignup
              setUsername={setUserName}
              setAuthorities={setAuthorities}
            />
          }
        ></Route>
        <Route path="/admin/addmovie" element={<AddReviewForm />}></Route>
      </Routes>
      {location.pathname.startsWith("/Trailer") ? null : <FooterDesign />}
      {/* <FooterDesign /> */}

      {/* <RouterProvider router={router}/> */}
    </div>
  );
}

export default App;
