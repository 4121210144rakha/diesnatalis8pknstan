// "use client"
// import React, { useState, useEffect, useRef, use } from 'react'
// import ReactPlayer from 'react-player';

// // Components
// import Loading from "../components/Loading";

// export default function Episode1() {
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const formatTime = (time:number) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//   };

//   const handleTimeUpdate = () => {
//     if(videoRef.current) {
//       const { currentTime } = videoRef.current;
//       setCurrentTime(currentTime);
//     }
//   };

//   const handleLoadedMetadata = () => {
//     if(videoRef.current) {
//       const { duration } = videoRef.current;
//       setDuration(duration);
//     }
//   };

//   const[isLoad,setLoading] =  useState(true);
//   useEffect(() => {
//       setLoading(true);
//       setTimeout(()=>{
//           setLoading(false)
//       }, 100)
      
//   }, []);

//   const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { value } = e.target;
//     setCurrentTime(Number(value));
//     if(videoRef.current) {
//       videoRef.current.currentTime = Number(value);
//     }
//   };
  
//   return (
//     isLoad? (<Loading/>):(
//       <>
//         <section className="h-screen flex flex-col items-center justify-center">
//             <div className="border border-green-500 relative" style={{height:document.getElementById("video1")?.style.height}}>
//               <video
//                 id="video1" 
//                 ref={videoRef}
//                 onTimeUpdate={handleTimeUpdate}
//                 onLoadedMetadata={handleLoadedMetadata} 
//                 className="peer" 
//                 style={{width:"100vw"}}
//               >
//                 <source src={"/videos/episode1/zoom.mp4"} type='video/mp4'/>
//               </video>
            
//               <div id="videoPlayer" className="w-full h-fit bottom-0 peer-hover:opacity-100 opacity-0 hover:opacity-100 absolute flex flex-row items-center p-2 pt-6 bg-black bg-opacity-80 mask-image-to-top transition ease-in-out duration-150 ">
//                 <button onClick={()=>{
//                     let video = document.getElementById("video1");
//                     let playIcon = document.getElementById("iconPlay");
//                     let pauseIcon = document.getElementById("iconPause");
//                     if(video instanceof HTMLVideoElement){
//                       if (video.paused) {
//                         video.play();
//                         playIcon?.classList.add("hidden");
//                         pauseIcon?.classList.remove("hidden");
//                       } else {
//                         video.pause();
//                         playIcon?.classList.remove("hidden");
//                         pauseIcon?.classList.add("hidden");
//                       }
//                     }
//                   }}
//                 >
//                   <svg width="20" height="20" viewBox="0 0 74 86" fill="none" xmlns="http://www.w3.org/2000/svg" id="iconPlay">
//                     <path d="M73.5 42.134C74.1667 42.5189 74.1667 43.4811 73.5 43.866L1.49999 85.4352C0.833328 85.8201 -4.03627e-06 85.339 -4.00262e-06 84.5692L-3.68521e-07 1.43078C-3.34872e-07 0.660984 0.833333 0.17986 1.5 0.56476L73.5 42.134Z" fill="white"/>
//                   </svg>

//                   <svg width="20" height="20" viewBox="0 0 69 87" fill="none" xmlns="http://www.w3.org/2000/svg" id="iconPause" className='hidden'>
//                     <rect width="23" height="87" fill="white"/>
//                     <rect x="46" width="23" height="87" fill="white"/>
//                   </svg>
//                 </button>
                    
//                 <div className='w-full relative ml-2'>
//                   <span><small>{formatTime(currentTime)}</small></span>
//                   <progress 
//                     value={currentTime}
//                     max={duration}
//                     className="absolute top-0 left-0 w-full">
//                   </progress>
//                 </div >
//               </div>
//                 <div id="videoOption" className="absolute bottom-0 flex flex-row items-center justify-around w-full bg-black hidden py-4 ">
//                   <button className=" text-gray-500 hover:text-white z-50 hover:scale-110 hover:underline transition duration-150 ease-in-out">
//                     OPSI A
//                   </button>
//                   <button className=" text-gray-500 hover:text-white z-50 hover:scale-110 hover:underline transition duration-150 ease-in-out">
//                     OPSI B
//                   </button>
//                 </div>
//             </div>
//         </section>
//       </>
//     )
//     );
// }