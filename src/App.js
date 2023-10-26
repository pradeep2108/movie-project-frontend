import logo from './logo.svg';
import './App.css';
import api from './api/axiosConfig';
import { useEffect, useState } from 'react';
import MovieService from './api/movieService';
import Layout from './component/layout';
import { createBrowserRouter,RoutesRouterProvider,BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RootLayout from './component/layout';
import Home from './component/home/home';
import { Navbar } from 'react-bootstrap';
import Header from './component/header/Header';
import Trailer from './component/trailer/Trailer';
import ReviewPage from './component/reviewpage/ReviewPage';





function App() {
  const [movies,setMovie] = useState([]);

  const getMovies = async ()=>{
    try{
      const response = await MovieService.getAllMovies();
      console.log(response.data);
      setMovie(response.data);
    }catch(err){
      console.log(err)
    }
  }



  useEffect(()=>{
    getMovies();
  },[])

  

  // const router = createBrowserRouter([
  //   {path:'/', element:<RootLayout/>},
  //   {path:'/home', element:<Home movies= {movies}/> }
  // ])

  return (
    <div className="App">
      <Header className='header'/>
      <Routes>
        <Route path='/' element={<RootLayout movies= {movies}/>}/>
        <Route path='/' element={<Home movies= {movies}/>}/>
        <Route path='/Trailer/:ytTailerId' element={<Trailer/>}></Route>
        <Route path='/reviewpage/:title' element={<ReviewPage/>}></Route>
      </Routes>

      
      {/* <RouterProvider router={router}/> */}
      
      </div>
  );
}

export default App;
