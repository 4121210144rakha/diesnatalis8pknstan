// "use client"
// import React, { useEffect, useRef, useState } from 'react';

export default function Episode1() {
  // const videoRef = useRef<HTMLVideoElement>(null);
  // const [currentTime, setCurrentTime] = useState(0);
  

  // useEffect(() => {
  //   const videoElement = videoRef.current;

  //   const handlePlay = () => {

  //   };

  //   const handleTimeUpdate = () => {
  //     setCurrentTime(videoElement.currentTime);
  //   };

  //   if (videoElement) {
  //     videoElement.addEventListener('play', handlePlay);
  //     videoElement.addEventListener('timeupdate', handleTimeUpdate);
  //   }

  //   return () => {
  //     if (videoElement) {
  //       videoElement.removeEventListener('play', handlePlay);
  //       videoElement.removeEventListener('timeupdate', handleTimeUpdate);
  //     }
  //   };
  // }, []);

  return (
    <>
      <section className="items-center justify-center mt-20 flex flex-col">
        <div className='flex flex-col border border-green-500 overflow-hidden group relative' style={{height:document.getElementById("video1")?.style.height}}>
          <video id="video1" controls className="border border-red-500 w-screen object-cover">
              <source src={"/videos/episode1/episode1.mp4"} type='video/mp4'/>
          </video>

          {/* <div className="">
              <button
                  onClick={()=>{
                      let btnPlay = document.getElementById("btnPlay");
                      let btnPause = document.getElementById("btnPause");
                      if(videoRef.current?.paused){
                          videoRef.current?.play();
                          btnPlay?.classList.remove("block");
                          btnPlay?.classList.add("hidden");
                          btnPause?.classList.remove("hidden");
                          btnPause?.classList.add("block");
                      } else {
                          videoRef.current?.pause();
                          btnPlay?.classList.remove("hidden");
                          btnPlay?.classList.add("block");
                          btnPause?.classList.remove("block");
                          btnPause?.classList.add("hidden");
                      }
                  }}
                  className="">
                  <svg width="20" height="20" viewBox="0 0 74 86" fill="none" xmlns="http://www.w3.org/2000/svg" id="btnPlay">
                      <path d="M73.5 42.134C74.1667 42.5189 74.1667 43.4811 73.5 43.866L1.49999 85.4352C0.833328 85.8201 -4.03627e-06 85.339 -4.00262e-06 84.5692L-3.68521e-07 1.43078C-3.34872e-07 0.660984 0.833333 0.17986 1.5 0.56476L73.5 42.134Z" fill="white"/>
                  </svg>

                  <svg width="20" height="20" viewBox="0 0 69 87" fill="none" xmlns="http://www.w3.org/2000/svg" id="btnPause" className='hidden'>
                      <rect width="23" height="87" fill="white"/>
                      <rect x="46" width="23" height="87" fill="white"/>
                  </svg>
              </button>
              
              <div className='w-full flex flex-row mx-2 relative items-center'>
                <progress value={currentTime} max={videoRef.current?.duration}  className="w-full"></progress>

                <input
                    type='range'
                    id='barVideo'
                    value={currentTime}
                    className='w-full hover:opacity-100 opacity-0 transition ease-in-out duration-200 hover:cursor-pointer'
                    onChange={(e) => {
                      const newTime = parseFloat(e.target.value);
                      videoRef.current.currentTime = newTime;
                      setCurrentTime(newTime);
                    }}
                    max={videoRef.current?.duration}
                    step={0.001}
                />
              </div >
          </div> */}
        
          <div
              id='Opsi'
              className={`group-hover:-translate-y-20 border flex flex-row justify-around pb-2 pt-6 bg-black
              }`}
          >
              <button className='hover:text-white text-gray-500 transition-colors duration-300 ease-in-out'>
              OPSI A
              </button>
              <button className='hover:text-white text-gray-500 transition-colors duration-300 ease-in-out'>
              OPSI B
              </button>
          </div>
        </div>

        
      </section>
    </>
    );
}
