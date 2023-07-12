"use client"
import { useRef, useEffect } from 'react'

export default function Episodecard(props: any) {
    const fadeIn = useRef<HTMLDivElement|null>(null);
    
    useEffect(()=>{
        const options = {
            root:null,
            rootMargin: '0px',
            threshold:0.5,
        };
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting && fadeIn.current) {
                    fadeIn.current.classList.add('fade-in');
                }
            });
        }, options);

        if (fadeIn.current){observer.observe(fadeIn.current);}
        return () => {
            if (fadeIn.current) {
                observer.unobserve(fadeIn.current);
            }
        };
    },[]);

    return(
        <div ref={fadeIn} className="fade-container hover:scale-105 sm:w-96 pb-10 my-8 col-auto rounded-lg overflow-hidden ring-transparent transition ring-1 duration-300 ease-in-out hover:ring-gray-400">
            <iframe src="https://drive.google.com/file/d/1tmFT2zicsTf1pmvc0qEZfLYmHbKusTBu/preview" title='Trailer Video Puzzle' className="w-96 h-64"></iframe>
            <p className="pt-8"><small>13 July 2023</small></p>
            <h3 className="text-2xl pt-4 pb-10"><strong>The Silent Vow</strong></h3>
            <p className="px-4">Perjalanan batin yang penuh refleksi dan janji. Temukan maknamu dan ungkap di Malam Mahakarya</p>
        </div>
    )
}