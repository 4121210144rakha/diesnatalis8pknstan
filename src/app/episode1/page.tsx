"use client"
import React, { useState, useEffect, useRef, use } from 'react'
// Components
import Loading from "../components/Loading";

export default function Episode1() {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const formatTime = (time:number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleTimeUpdate = () => {
    if(videoRef.current) {
      const { currentTime } = videoRef.current;
      setCurrentTime(currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if(videoRef.current) {
      const { duration } = videoRef.current;
      setDuration(duration);
    }
  };

  const[isLoad,setLoading] =  useState(true);
  useEffect(() => {
      setLoading(true);
      setTimeout(()=>{
          setLoading(false)
      }, 100)
      
  }, []);

  useEffect(
    ()=>{
      document.getElementById("NavigationBar")?.classList.add("hidden");
      if(videoRef.current) {
        if(videoRef.current.currentTime >= videoRef.current.duration) {
          alert("ok");
        }
      }
    },
    []
  );

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

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCurrentTime(Number(value));
    if(videoRef.current) {
      videoRef.current.currentTime = Number(value);
    }
  };

  
  
  return (
    isLoad? (<Loading/>):(
      <>
        <section className="h-screen flex flex-col items-center justify-center">
            <div className="relative" style={{height:document.getElementById("video1")?.style.height}}>
              <div className='peer h-screen w-screen relative'>
                <button onClick={()=> {
                    videoRef.current?.paused?videoRef.current.play():videoRef.current?.pause();
                  }}
                  className="h-screen w-screen absolute top-0 left-0 z-10 opacity-0 cursor-default"
                  ref = {handlePlayerIcon}
                  >
                    Play
                </button>
                <video
                  id="video1" 
                  ref={videoRef}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata} 
                  className="h-screen w-screen absolute top-0 left-0" 
                  style={{width:"100vw"}}
                >
                  <source src={"/videos/episode1/episode1.mp4"} type='video/mp4'/>
                </video>
              </div>

              <div id="videoPlayer" className="w-full h-fit bottom-0 peer-hover:opacity-100 opacity-0 hover:opacity-100 absolute flex flex-col items-center p-2 bg-black bg-opacity-80 transition ease-in-out duration-150 ">
                <progress 
                  value={currentTime}
                  max={duration}
                  className="w-full"
                  
                >
                </progress>
                
                <div className="flex flex-row justify-start w-full pt-2 z-20">
                  <button onClick={()=>{
                      let video = document.getElementById("video1");
                      if(video instanceof HTMLVideoElement){
                        video.currentTime-=10;
                      }
                    }}
                    className="px-2"
                  >
                    <svg width="20" height="20" viewBox="0 0 101 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.499996 43.866C-0.16667 43.4811 -0.166669 42.5189 0.499998 42.134L72.5 0.564752C73.1667 0.179852 74 0.660978 74 1.43078L74 84.5692C74 85.339 73.1667 85.8201 72.5 85.4352L0.499996 43.866Z" fill="white"/>
                      <path d="M27.5 43.866C26.8333 43.4811 26.8333 42.5189 27.5 42.134L99.5 0.564752C100.167 0.179852 101 0.660978 101 1.43078L101 84.5692C101 85.339 100.167 85.8201 99.5 85.4352L27.5 43.866Z" fill="white"/>
                    </svg>
                  </button>
                  
                  <button onClick={()=>{
                      let video = document.getElementById("video1");
                      let playIcon = document.getElementById("iconPlay");
                      let pauseIcon = document.getElementById("iconPause");
                      if(video instanceof HTMLVideoElement){
                        if (video.paused) {
                          video.play();
                          playIcon?.classList.add("hidden");
                          pauseIcon?.classList.remove("hidden");
                        } else {
                          video.pause();
                          playIcon?.classList.remove("hidden");
                          pauseIcon?.classList.add("hidden");
                        }
                      }
                    }}
                    className="px-2"
                  >
                    <svg width="20" height="20" viewBox="0 0 74 86" fill="none" xmlns="http://www.w3.org/2000/svg" id="iconPlay">
                      <path d="M73.5 42.134C74.1667 42.5189 74.1667 43.4811 73.5 43.866L1.49999 85.4352C0.833328 85.8201 -4.03627e-06 85.339 -4.00262e-06 84.5692L-3.68521e-07 1.43078C-3.34872e-07 0.660984 0.833333 0.17986 1.5 0.56476L73.5 42.134Z" fill="white"/>
                    </svg>

                    <svg width="20" height="20" viewBox="0 0 69 87" fill="none" xmlns="http://www.w3.org/2000/svg" id="iconPause" className='hidden'>
                      <rect width="23" height="87" fill="white"/>
                      <rect x="46" width="23" height="87" fill="white"/>
                    </svg>
                  </button>
                      
                  <span className="px-2"><small>{formatTime(currentTime)} / {formatTime(duration)}</small></span>
                </div>
              </div>

              <div id="videoOption" className="absolute bottom-0 flex flex-row items-center justify-around w-full bg-black hidden py-4 ">
                <button className=" text-gray-500 hover:text-white z-50 hover:scale-110 hover:underline transition duration-150 ease-in-out">
                  OPSI A
                </button>
                <button className=" text-gray-500 hover:text-white z-50 hover:scale-110 hover:underline transition duration-150 ease-in-out">
                  OPSI B
                </button>
              </div>
            </div>
        </section>
        <section className='p-4 w-screen'>
          <form className='flex flex-col'>
            <textarea id="comment" placeholder="Write a comment..." className="w-full border rounded-md" maxLength={100}></textarea>
            <button type="submit" className="p-2 flex w-fit bg-white text-black font-semibold m-2 ml-0 rounded-md">Add comment</button>
          </form>
        </section>
      </>
    )
    );
}