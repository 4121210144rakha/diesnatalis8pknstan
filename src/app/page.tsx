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

const Home = () => {
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

        <iframe src="https://www.menti.com/alatrybzcrhx" className='w-screen scrollbar-hide mask-image-to-bottom-for-iframe' style={{height:"120vh"}}></iframe>

        <Explore/>

        <Competition/>

        <Movie/>

        <Tenant/>

        <Image src={"https://s6.imgcdn.dev/vlVqS.jpg"} width={1000} height={1000} alt='Gambar' style={{width:"100vw",height:"100vh"}} className="flex object-cover mask-image-to-top"/>
      </div>
    )
  )
}

export default Home;