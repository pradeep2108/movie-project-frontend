
import React from 'react'
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom'
import Header from '../header/Header';
import Home from '../home/home';
import './Trailer.css'

const Trailer = () => {

    const params = useParams();
    const key = params.ytTailerId;
    console.log(key)
  return (
    
    <>
    
      <div className='player-container-design'>
      {(key!=null)?<ReactPlayer controls='true' playing={true} url={`https://www.youtube.com/watch?v=${key}`} width='75%' height='75%' />:null}
      </div>    
    </>
  )
}

export default Trailer
