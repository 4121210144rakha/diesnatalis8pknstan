"use client"
import Image from 'next/image';

const Header = () => {
    return(
        <section className="h-screen mask-image-to-bottom mb-48">
            <video id='backgroundVideo' playsInline={true} className="mask-image-to-bottom object-cover fixed h-screen w-screen -z-50 top-0 left-0 right-0 bottom-0" onCanPlayThrough={()=>{document.getElementById("backgroundVideo")}} autoPlay={true} loop={true} height={1000} width={1000}><source src={"/videos/trailer.mp4"}/></video>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Image src={"https://s6.imgcdn.dev/vlAZ8.webp"} fetchPriority='high' width={10000} height={10000} alt='Logo Diesnat 8' className='flex w-full xl:px-96'/>
                <button type="button"
                    onClick={() => {
                        let playIcon = document.getElementById("playIcon");
                        let pauseIcon = document.getElementById("pauseIcon");
                        let backgroundVideo = document.getElementById("backgroundVideo");
                        if(backgroundVideo instanceof HTMLVideoElement) {
                            if (backgroundVideo.paused) {
                                backgroundVideo.play();
                                playIcon?.classList.add("hidden");
                                pauseIcon?.classList.remove("hidden");
                            } else {
                                backgroundVideo.pause();
                                pauseIcon?.classList.add("hidden");
                                playIcon?.classList.remove("hidden");
                            }
                        }
                    }}
                >
                    <svg id='playIcon' width="50" height="50" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg" className='hidden'>
                        <path d="M178.5 129.134C179.167 129.519 179.167 130.481 178.5 130.866L106.5 172.435C105.833 172.82 105 172.339 105 171.569L105 88.4308C105 87.661 105.833 87.1799 106.5 87.5648L178.5 129.134Z" fill="white"/>
                        <circle cx="130" cy="130" r="127.5" stroke="white" stroke-width="5"/>
                    </svg>
                    <svg id='pauseIcon' width="50" height="50" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="130" cy="130" r="127.5" stroke="white" stroke-width="5"/>
                        <rect x="95" y="87" width="23" height="87" fill="white"/>
                        <rect x="141" y="87" width="23" height="87" fill="white"/>
                    </svg>
                </button>
            </div>  
        </section>
    )
}

export default Header;