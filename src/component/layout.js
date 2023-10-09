import { Outlet } from 'react-router-dom'
import React from 'react'
import Home from './home/home'
import Hero from './hero/Hero'
import Header from './header/Header'

const RootLayout = ({movies}) => {
  return (
    <main>
      {/* <Hero movies ={movies}/>
      <Outlet/> */}    
      <Outlet/>
      <Home movies ={movies}/>
    </main>
  )
}

export default RootLayout
