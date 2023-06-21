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

export default function Home() {
  const[isLoad,setLoading] =  useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    }, 1500)

  }, []);
  return (
    isLoad?(<Loading/>):(
      <div className="text-center flex flex-col">
        <Header/>

        <Explore/>

        <Competition/>

        <Movie/>

        <Image src={"/image/footer.jpg"} width={1000} height={1000} alt='Gambar' loading='lazy' style={{width:"100vw",height:"100vh"}} className="flex object-cover object-center mask-image-to-top"/>
      </div>
    )
  )
}
