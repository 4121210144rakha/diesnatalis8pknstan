'use client'
import Link from "next/link";
import { useRef, useEffect } from 'react';

export default function Tautan(props:any){
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
        <div  ref={fadeIn} className="fade-container">
            <Link href={`${props.url}`} rel="noopener noreferrer" className="cursor-pointer hover:underline text-blue-500 w-full p-2"><p>{props.text} &gt;</p></Link>
        </div>
    )
}