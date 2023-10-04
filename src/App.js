import logo from './logo.svg';
import './App.css';
import api from './api/axiosConfig';
import { useEffect, useState } from 'react';
import MovieService from './api/movieService';
import Layout from './component/layout';
import { createBrowserRouter,Route,Routes,RouterProvider } from 'react-router-dom';
import RootLayout from './component/layout';
import Home from './component/home/home';
import Navbar from './component/header/Navbar';



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

  const router = createBrowserRouter([
    {path:'/', element:<RootLayout/>},
    {path:'/home', element:<Home movies= {movies}/> }
  ])

  return (
    <div className="App">
      <Navbar/>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
