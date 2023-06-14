'use client'
import Link from 'next/link'
import Image from 'next/image'

// Components
import Card from './components/cards'
import EpisodeCard from './components/episodecard'
import Lombacard from './components/lombacard'

import React from 'react'

//svg
import Lock from '../../public/locked.svg'
import Diesnat from '../../public/image/Tipografi DN8.png'

export default function Home() {
  return (
    <main className="text-center">
      <div className="h-screen mask-image-to-bottom">
        <video className="mask-image-to-bottom object-cover fixed h-screen w-screen -z-50 top-0 left-0 right-0 bottom-0" id="videoBackground" muted autoPlay loop><source src="/videos/header.mp4" type='video/mp4'/></video>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Image src={Diesnat} width={1000} height={1000} alt='Logo Diesnat 8'/>
          <button className="hover:scale-105 transition duration-200 ease-in-out" type="button"
            onClick={()=>{
              var video1 = document.getElementById("videoBackground");
              var iconPause = document.getElementById("iconPause");
              var iconPlay = document.getElementById("iconPlay");
              if(video1 instanceof HTMLVideoElement) {
                if(video1.paused) {
                  iconPause?.classList.remove("hidden");
                  iconPause?.classList.add("block");
                  iconPlay?.classList.add("hidden")
                  video1.play();
                } else {
                  iconPlay?.classList.remove("hidden");
                  iconPlay?.classList.add("block");
                  iconPause?.classList.add("hidden");
                  video1.pause();
                }

              }
            }}
          >
            <svg width="50" height="50" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="" id="iconPlay">
              <path d="M178.5 129.134C179.167 129.519 179.167 130.481 178.5 130.866L106.5 172.435C105.833 172.82 105 172.339 105 171.569L105 88.4308C105 87.661 105.833 87.1799 106.5 87.5648L178.5 129.134Z" fill="white"/>
              <circle cx="130" cy="130" r="127.5" stroke="white" stroke-width="5"/>
            </svg>

            <svg width="50" height="50" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden" id="iconPause">
              <circle cx="130" cy="130" r="127.5" stroke="white" stroke-width="5"/>
              <rect x="95" y="87" width="23" height="87" fill="white"/>
              <rect x="141" y="87" width="23" height="87" fill="white"/>
            </svg>


          </button>
        </div>  
      </div>

      <div id="Explore" className="py-8">
        <div className="">
          <h2 className="text-5xl sm:text-7xl font-semibold " style={{fontFamily:"Crima"}}>Explore the World</h2>
          <p className="py-8">
            We seek to provide the most authentic content from athletes, adventurers, explorers and travellers around the world. Our long-term mission is to educate, inspire, and enable all peoples to experience & protect wilderness.
          </p>
        </div>
          
        {/* Slider */}
        <div className="flex my-10 sm:justify-around items-center flex-col lg:flex-row">
          <Card className="disabled:scale-100" alamat="https://google.com" src="https://images.unsplash.com/photo-1565035010268-a3816f98589a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" heading="Opening Ceremony" paragraph="GEDUNG G"/>
          <div className="my-8 hover:scale-105 transition-all duration-300 ease-in-out mx-4 w-72 justify-center text-center bg-cover bg-center"  style={{backgroundImage:`url("https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80")`, height:"28rem"}}>
            <div className="group bottom-0 pb-10 hover:backdrop-blur-sm items-center flex hover:justify-center justify-end flex-col h-full transition duration-300 ease-in-out">
              <h3 className="text-lg group-hover:hidden"><b>Webinar Internasional</b></h3>
              <p className="group-hover:hidden">ZOOM</p>
              <Image className="hidden group-hover:block" src={Lock} width={30} height={30} alt='Lock'/>
            </div>
          </div>
          <div className="my-8 hover:scale-105 transition-all duration-300 ease-in-out mx-4 w-72 justify-center text-center bg-cover bg-center"  style={{backgroundImage:`url("https://plus.unsplash.com/premium_photo-1661856221850-8d6cc299049c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80")`, height:"28rem"}}>
            <div className="group bottom-0 pb-10 hover:backdrop-blur-sm items-center flex hover:justify-center justify-end flex-col h-full transition duration-300 ease-in-out">
              <h3 className="text-lg group-hover:hidden"><b>Sidang Senat</b></h3>
              <p className="group-hover:hidden">GEDUNG G</p>
              <Image className="hidden group-hover:block" src={Lock} width={30} height={30} alt='Lock'/>
            </div>
          </div>
          <div className="my-8 hover:scale-105 transition-all duration-300 ease-in-out mx-4 w-72 justify-center text-center bg-cover bg-center"  style={{backgroundImage:`url("https://images.unsplash.com/photo-1603910234616-3b5f4a6be2b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80")`, height:"28rem"}}>
            <div className="group bottom-0 pb-10 hover:backdrop-blur-sm items-center flex hover:justify-center justify-end flex-col h-full transition duration-300 ease-in-out">
              <h3 className="text-lg group-hover:hidden"><b>Special Event</b></h3>
              <p className="group-hover:hidden">GEDUNG G</p>
              <Image className="hidden group-hover:block" src={Lock} width={30} height={30} alt='Lock'/>
            </div>
          </div>
          <div className="my-8 hover:scale-105 transition-all duration-300 ease-in-out mx-4 w-72 justify-center text-center bg-cover bg-center"  style={{backgroundImage:`url("https://images.unsplash.com/photo-1576328077645-2dd68934d2b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80")`, height:"28rem"}}>
            <div className="group bottom-0 pb-10 hover:backdrop-blur-sm items-center flex hover:justify-center justify-end flex-col h-full transition duration-300 ease-in-out">
              <h3 className="text-lg group-hover:hidden"><b>Closing Ceremony</b></h3>
              <p className="group-hover:hidden">GEDUNG G</p>
              <Image className="hidden group-hover:block" src={Lock} width={30} height={30} alt='Lock'/>
            </div>
          </div>
          {/* <Card alamat="/webinar" src="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" heading="Webinar Internasional" paragraph="ZOOM"/>
          <Card alamat="/sidangsenat" src="https://plus.unsplash.com/premium_photo-1661856221850-8d6cc299049c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" heading="Sidang Senat" paragraph="GEDUNG G"/>
          <Card alamat="/specialevent" src="https://images.unsplash.com/photo-1603910234616-3b5f4a6be2b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" heading="Special Event" paragraph="GEDUNG G"/>
          <Card alamat="/closingceremony" src="https://images.unsplash.com/photo-1576328077645-2dd68934d2b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80" heading="Closing Ceremony" paragraph="GEDUNG G"/> */}
        </div>
      </div>

      <div>
        <h2 className="text-5xl" style={{fontFamily:"Crima"}}><strong>Perlombaan</strong></h2>
        <p className="py-8">Lorem ipsum dolor sit amet</p>
        <div>
          <Lombacard sauce="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" alternatif="Gambar Bola" heading="Futsal" description="Lorem ipsum dolor sit amet" url="https://google,com"/>
        </div>
      </div>

      <div id="Journal" className="py-8">
        <div className="">
          <h2 className="text-5xl" style={{fontFamily:"Crima"}}><strong>The Journal</strong></h2>
          <p className="py-8">
            Our favorite stories about public lands and opportunities for you to get involved in protecting your outdoor experiences.
          </p>
        </div>
          
        <div className="flex my-10 sm:justify-around items-start flex-col sm:flex-row">
          <EpisodeCard alamat="anunforgetable" title="Episode 1: An Unforgetable" src={"https://images.unsplash.com/photo-1516687401797-25297ff1462c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"} date="MAY 30, 2017" heading="An Unforgettable" caption="If you only have one day to visit Yosemite National Park and you want to make the most out of it."/>
        </div>

        <Link
          href={"/episode"}
          className="text-blue-500 hover:underline"
        >
          ALL POST &gt;
        </Link>
      </div>

      <div className="h-screen items-end flex mask-image-to-top bg-cover w-screen bg-center"  style={{backgroundImage:`url("/image/footer.jpg")`}}>

      </div>
      
    </main>
  )
}
