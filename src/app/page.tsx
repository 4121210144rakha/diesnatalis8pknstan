'use client'
import Link from 'next/link'
// Components
import Card from './components/cards'
import EpisodeCard from './components/episodecard'

import React from 'react'

export default function Home() {
  window.onscroll = function() {myFunction()};

  function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }
  return (
    <main className="text-center">
      <div className="h-screen mask-image-to-bottom first-background">
        <video className="mask-image-to-bottom object-cover fixed h-screen w-screen hidden sm:block -z-50 top-0 left-0 right-0 bottom-0" id="videoBackground" muted autoPlay loop><source src="/videos/Beach.mp4" type='video/mp4'/></video>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-7xl"><strong>The Great Outdoors</strong></h1>
          <p className="pt-10">Wander often. Wonder always</p>
          <button className="rounded-full" type="button">PLAY/PAUSE</button>
        </div>  
      </div>

      

      <div id="Explore" className="py-8">
        <div className="">
          <h2 className="text-5xl"><strong>Explore the World</strong></h2>
          <p className="py-8">
            We seek to provide the most authentic content from athletes, adventurers, explorers and travellers around the world. Our long-term mission is to educate, inspire, and enable all peoples to experience & protect wilderness.
          </p>
        </div>
          
        {/* Slider */}
        <div className="flex my-10 sm:justify-around flex-col sm:flex-row">
          <Card alamat="opentalent" src="https://images.unsplash.com/photo-1685396562089-c4b00814d30a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=647&q=80" heading="Næroyfjorden" paragraph="NORWAY"/>
          <Card src="https://images.unsplash.com/photo-1602088693260-78f2c76287c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" heading="Antelope Canyon" paragraph="UNITED STATES"/>
          <Card src="https://images.unsplash.com/photo-1485684884494-0149f7871a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=663&q=80" heading="Grossglockner" paragraph="AUSTRIA"/>
        </div>
      </div>

      <div id="Journal" className="py-8">
        <div className="">
          <h2 className="text-5xl"><strong>The Journal</strong></h2>
          <p className="py-8">
            Our favorite stories about public lands and opportunities for you to get involved in protecting your outdoor experiences.
          </p>
        </div>
          
        <div className="flex my-10 sm:justify-around items-start flex-col sm:flex-row">
          <EpisodeCard src={"https://images.unsplash.com/photo-1516687401797-25297ff1462c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"} date="MAY 30, 2017" title="An Unforgettable" caption="If you only have one day to visit Yosemite National Park and you want to make the most out of it."/>
          <EpisodeCard src={"https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"} date="???" title="Episode 2" caption="Coming soon ..."/>
        </div>

        <Link
          href={"/episode"}
          className="text-blue-500 hover:underline"
        >
          ALL POST &gt;
        </Link>
      </div>

      <div className="py-8 h-screen mask-image-to-top mask-image-to-bottom" style={{backgroundImage:`url("https://images.unsplash.com/photo-1579961611811-54b643ddbd91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")`, backgroundSize:"cover"}}>

      </div>
    </main>
  )
}
