"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

// Components
import Loading from './components/Loading'

// section
import Explore from './section/explore'
import Competition from './section/competition'
import Movie from './section/movie'
import Header from './section/Header'
import Tenant from './section/Tenant'
import Polling from './section/Polling'

const Home: React.FC = () => {
  const[isLoad,setLoading] =  useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    }, 3000)

  }, []);
  return (
    isLoad?(<Loading/>):(
      <div className="text-center grid grid-cols-1">
        <Header/>

        <Polling/>

        <Explore/>

        <div
          style={{ cursor: 'pointer' }}
          onClick={() => {
            console.log('Clicked!');
          }}
        >
          Click me!
        </div>

        <Competition/>

        <Movie/>

        <Tenant/>

        <Image src={"https://s6.imgcdn.dev/vlVqS.jpg"} width={1000} height={1000} alt='Gambar' style={{width:"100vw",height:"100vh"}} className="flex object-cover mask-image-to-top"/>
      </div>
    )
  )
}

export default Home;