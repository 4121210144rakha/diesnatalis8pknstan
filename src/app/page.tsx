'use client'
import Link from 'next/link'
// Components
import Card from './components/cards'
import EpisodeCard from './components/episodecard'

import React from 'react'

export default function Home() {
  return (
    <main className="text-center">
      <div className="h-screen mask-image-to-bottom">
        <video className="mask-image-to-bottom object-cover fixed h-screen w-screen -z-50 top-0 left-0 right-0 bottom-0" id="videoBackground" muted autoPlay loop><source src="/videos/header.mp4" type='video/mp4'/></video>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="sm:text-8xl text-6xl" style={{fontFamily:"Crima"}}><strong>Dies Natalis</strong></h1>
          <p className="mt-8">Manifestasi Harmoni Untuk Ciptakan Gemilang Karya</p>
          {/* <button className="rounded-full" type="button">PLAY/PAUSE</button> */}
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
        <div className="flex my-10 sm:justify-around items-center flex-col lg:flex-row">
          <Card className="disabled:scale-100" alamat="opentalent" src="https://images.unsplash.com/photo-1565035010268-a3816f98589a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" heading="Opening Ceremony" paragraph="GEDUNG G"/>
          <Card alamat="/webinar" src="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" heading="Webinar Internasional" paragraph="ZOOM"/>
          <Card alamat="/sidangsenat" src="https://plus.unsplash.com/premium_photo-1661856221850-8d6cc299049c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" heading="Sidang Senat" paragraph="GEDUNG G"/>
          <Card alamat="/specialevent" src="https://images.unsplash.com/photo-1603910234616-3b5f4a6be2b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" heading="Special Event" paragraph="GEDUNG G"/>
          <Card alamat="/closingceremony" src="https://images.unsplash.com/photo-1576328077645-2dd68934d2b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80" heading="Closing Ceremony" paragraph="GEDUNG G"/>
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

      
    </main>
  )
}
