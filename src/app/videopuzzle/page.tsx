"use client"
import React, { useState, useEffect, useRef, } from 'react';
import Image from 'next/image';
// Components
import Loading from "../components/Loading";

const Episode1 = () => {
  const browser = useRef<HTMLDivElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  var [src, setSrc] = useState<string>('/videos/movie/eps 1.mp4');
  const[isLoad,setLoading] =  useState(true);

  var [opsiA, setOpsiA] = useState<string>('KERJA');
  var [opsiB, setOpsiB] = useState<string>('KULIAH');
  var [source1, setSource1] = useState<string>('/videos/movie/eps 2a.mp4');
  var [source2, setSource2] = useState<string>('/videos/movie/eps 2b.mp4');
  
  const handleFullscreen = () => {
    if (browser.current) {
        browser.current.requestFullscreen();
      if ((browser.current as any).mozRequestFullScreen) {
        (browser.current as any).mozRequestFullScreen();
      } else if ((browser.current as any).webkitRequestFullscreen) {
        (browser.current as any).webkitRequestFullscreen();
      } else if ((browser.current as any).msRequestFullscreen) {
        (browser.current as any).msRequestFullscreen();
      }
    }
  };

  const formatTime = (time:number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  useEffect(()=>{
    setLoading(true);
      setTimeout(()=>{
          setLoading(false)
      }, 0)
    if(videoRef.current) {videoRef.current.load()};
  },[src]);

  const handleTimeUpdate = () => {
    let videoOption = document.getElementById("videoOption");
    if(videoRef.current) {
      const { currentTime } = videoRef.current;
      setCurrentTime(currentTime);

      if (Math.floor(videoRef.current.currentTime) == Math.floor(duration)) {
        if (src == "/videos/movie/eps 1.mp4") {
          videoOption?.classList.add("opacity-100");
          videoOption?.classList.add("z-50");
          videoOption?.classList.remove("opacity-0")
          document.getElementById("btnWrap")?.classList.add("hidden");
          videoRef.current.removeEventListener("timeupdate", handleTimeUpdate);
        }
        else if (src == "/videos/movie/eps 2a.mp4") {
          videoOption?.classList.add("opacity-100");
          videoOption?.classList.add("z-50");
          videoOption?.classList.remove("opacity-0")
          document.getElementById("btnWrap")?.classList.add("hidden");
          videoRef.current.removeEventListener("timeupdate", handleTimeUpdate);
          setOpsiA("KERJA JAUH");
          setOpsiB("KERJA DEKAT");
          setSource1("/videos/movie/eps 3a.mp4");
          setSource2("/videos/movie/eps 3b.mp4");
        } else if (src == "/videos/movie/eps 2b.mp4") {
          videoOption?.classList.add("opacity-100");
          videoOption?.classList.add("z-50");
          videoOption?.classList.remove("opacity-0")
          document.getElementById("btnWrap")?.classList.add("hidden");
          videoRef.current.removeEventListener("timeupdate", handleTimeUpdate);
          setOpsiA("BANTU");
          setOpsiB("TOLAK");
          setSource1("/videos/movie/eps 3c.mp4");
          setSource2("/videos/movie/eps 3d.mp4");
        } else if (src == "/videos/movie/eps 3a.mp4" || src == "/videos/movie/eps 3b.mp4" || src == "/videos/movie/eps 3c.mp4" || src == "/videos/movie/eps 3d.mp4") {
          document.getElementById("endingTitle")?.classList.remove("hidden");
          videoRef.current.pause();
        }
      }
    }
  };

  const handleLoadedMetadata = () => {
    if(videoRef.current) {
      const { duration } = videoRef.current;
      setDuration(duration);
    }
  };

  const handlePlayerIcon = () => {
    let playIcon = document.getElementById("iconPlay");
    let pauseIcon = document.getElementById("iconPause");
    if(videoRef.current?.paused) {
      playIcon?.classList.remove("hidden");
      pauseIcon?.classList.add("hidden");
    } else {
      pauseIcon?.classList.remove("hidden");
      playIcon?.classList.add("hidden");
    }
  }
  return (
    isLoad? (<Loading/>):(
      <>
        <section ref={browser} className="flex flex-col h-screen items-center justify-center">
            <div className="relative flex lg:mx-56 sm:mx-24">
              {/* Video */}
              <video
                id="video" 
                ref={videoRef}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata} 
                className="w-screen rounded-xl"
                autoPlay={true}
                key={src}
                playsInline={true}
                preload='auto'
                onCanPlayThrough={()=>{videoRef.current?.play()}}
              >
                <source src={src} type='video/mp4'/>
              </video>
              
              {/* Pause Wrap */}
              <button
                type='button'
                id='btnWrap'
                onClick={()=> {
                  videoRef.current?.paused?videoRef.current.play():videoRef.current?.pause();
                }}
                className="peer w-full z-10 h-full absolute bottom-0 opacity-0 cursor-default"
                ref = {handlePlayerIcon}
              >
                Play
              </button>

              {/* Video Player */}
              <div id='videoPlayer' className=" rounded-b-xl z-20 w-full h-fit bottom-0 peer-hover:opacity-100 opacity-0 hover:opacity-100 absolute flex flex-col items-center p-2 bg-black bg-opacity-80 transition ease-in-out duration-150 ">
                {/* Progress Bar */}
                <progress 
                  value={currentTime}
                  max={duration}
                  className="w-full"
                >
                </progress>

                <div className="flex flex-row h-fit items-center w-full pt-1 z-20 group">
                  <button
                    title='Rewind 10s'
                    type="button"
                    onClick={()=>{
                      if(videoRef.current){
                        videoRef.current.currentTime-=5;
                      }
                    }}
                    className="mx-2 -translate-y-0 group-hover:-translate-y-0"
                  >
                    <svg width="20" height="20" viewBox="0 0 101 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.499996 43.866C-0.16667 43.4811 -0.166669 42.5189 0.499998 42.134L72.5 0.564752C73.1667 0.179852 74 0.660978 74 1.43078L74 84.5692C74 85.339 73.1667 85.8201 72.5 85.4352L0.499996 43.866Z" fill="white"/>
                      <path d="M27.5 43.866C26.8333 43.4811 26.8333 42.5189 27.5 42.134L99.5 0.564752C100.167 0.179852 101 0.660978 101 1.43078L101 84.5692C101 85.339 100.167 85.8201 99.5 85.4352L27.5 43.866Z" fill="white"/>
                    </svg>
                  </button>
                  
                  <button 
                    title='Play/Pause'
                    type="button"
                    onClick={()=>{
                      let playIcon = document.getElementById("iconPlay");
                      let pauseIcon = document.getElementById("iconPause");
                      if(videoRef.current){
                        if (videoRef.current.paused) {
                          videoRef.current.play();
                          playIcon?.classList.add("hidden");
                          pauseIcon?.classList.remove("hidden");
                        } else {
                          videoRef.current.pause();
                          playIcon?.classList.remove("hidden");
                          pauseIcon?.classList.add("hidden");
                        }
                      }
                    }}
                    className="mx-2 -translate-y-0 group-hover:-translate-y-0"
                  >
                    <svg width="20" height="20" viewBox="0 0 74 86" fill="none" xmlns="http://www.w3.org/2000/svg" id="iconPlay">
                      <path d="M73.5 42.134C74.1667 42.5189 74.1667 43.4811 73.5 43.866L1.49999 85.4352C0.833328 85.8201 -4.03627e-06 85.339 -4.00262e-06 84.5692L-3.68521e-07 1.43078C-3.34872e-07 0.660984 0.833333 0.17986 1.5 0.56476L73.5 42.134Z" fill="white"/>
                    </svg>

                    <svg width="20" height="20" viewBox="0 0 69 87" fill="none" xmlns="http://www.w3.org/2000/svg" id="iconPause" className='hidden'>
                      <rect width="23" height="87" fill="white"/>
                      <rect x="46" width="23" height="87" fill="white"/>
                    </svg>
                  </button>

                  <button
                    title='Reload'
                    type='button'
                    className='mx-2 -translate-y-0 group-hover:-translate-y-0'
                    onClick={()=>{
                      window.location.reload();
                    }}
                  >
                    <Image width="20" height="20" src="https://img.icons8.com/ios-filled/50/FFFFFF/rotate.png" alt="rotate"/>
                  </button>
                      
                  <span className="mx-2"><small>{formatTime(currentTime)} / {formatTime(duration)}</small></span>
                  
                  <button
                    title='Fullscreen'
                    type="button"
                    onClick={()=>{
                      document.getElementById("NavigationBar")?.classList.add("hidden");
                      handleFullscreen;
                    }}
                    className="right-0 absolute mr-2 -translate-y-0 group-hover:-translate-y-0"
                  >
                    <Image width={30} height={30} src={"https://img.icons8.com/sf-regular/48/FFFFFF/full-screen.png"} alt="fulscreen"/>
                  </button>
                </div>
              </div>

              {/* VIDEO OPTION */}
              <div id="videoOption" className="absolute bottom-0 flex flex-row items-center justify-around w-full bg-black -z-50 opacity-0 sm:h-20 h-12 transition duration-500 delay-300 group">
                <button type="button"
                  onClick={()=> {
                    let videoOption = document.getElementById("videoOption");
                    videoOption?.classList.add("opacity-0");
                    videoOption?.classList.add("-z-50");
                    videoOption?.classList.remove("opacity-100");
                    document.getElementById("btnWrap")?.classList.remove("hidden");
                    setTimeout(()=>{
                      setSrc(source1);
                      if(videoRef.current){
                        videoRef.current.play();
                        videoOption?.classList.remove("z-50");
                      }
                    },725)
                  }}
                  className="w-full h-full font-semibold text-gray-500 hover:text-white z-50 hover:scale-110 hover:border transition duration-300 ease-in-out -translate-y-0 group-hover:-translate-y-0">
                  {opsiA}
                </button>
                <button type="button"
                  onClick={()=> {
                    let videoOption = document.getElementById("videoOption");
                    videoOption?.classList.add("opacity-0");
                    videoOption?.classList.add("-z-50");
                    videoOption?.classList.remove("opacity-100");
                    document.getElementById("btnWrap")?.classList.remove("hidden");
                    setTimeout(()=>{
                      setSrc(source2);
                      if(videoRef.current){
                        videoRef.current.play();
                        videoOption?.classList.remove("z-50");
                      }
                    },725)
                  }}
                  className="w-full font-semibold h-full text-gray-500 hover:text-white z-50 hover:scale-110 hover:border transition duration-300 ease-in-out -translate-y-0 group-hover:-translate-y-0"
                >
                  {opsiB}
                </button>
              </div>
            </div>
        </section>
      </>
    )
    );
}

export default Episode1;