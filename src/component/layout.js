import { Outlet } from 'react-router-dom'
import React from 'react'
import Home from './home/home'

const RootLayout = () => {
  return (
    <main>
      <Outlet/>
    </main>
  )
}

export default RootLayout
