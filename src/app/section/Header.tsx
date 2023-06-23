'use client'
import '@/app/globals.css'
import Image from 'next/image';
import Diesnat from '../../../public/image/Tipografi-DN8.webp'
export default function Header() {
        function playPause() {
        let video1 = document.getElementById("videoBackground");
        let iconPause = document.getElementById("iconPause");
        let iconPlay = document.getElementById("iconPlay");
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
    }
    return(
        <section className="h-screen mask-image-to-bottom">
            <video className="mask-image-to-bottom object-cover fixed h-screen w-screen -z-50 top-0 left-0 right-0 bottom-0" id="videoBackground" autoPlay={true} loop={true}><source src="/videos/trailer.mp4" type='video/mp4'/></video>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Image src={Diesnat} priority width={500} height={500} alt='Logo Diesnat 8' className='flex w-full xl:mx-96'/>
                <button type="button"
                    onClick={playPause}
                    itemType='button'
                >
                    <svg width="50" height="50" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden" id="iconPlay">
                        <path d="M178.5 129.134C179.167 129.519 179.167 130.481 178.5 130.866L106.5 172.435C105.833 172.82 105 172.339 105 171.569L105 88.4308C105 87.661 105.833 87.1799 106.5 87.5648L178.5 129.134Z" fill="white"/>
                        <circle cx="130" cy="130" r="127.5" stroke="white" strokeWidth="5"/>
                    </svg>

                    <svg width="50" height="50" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg" id="iconPause">
                        <circle cx="130" cy="130" r="127.5" stroke="white" strokeWidth="5"/>
                        <rect x="95" y="87" width="23" height="87" fill="white"/>
                        <rect x="141" y="87" width="23" height="87" fill="white"/>
                    </svg>
                </button>
            </div>  
        </section>
    )
}