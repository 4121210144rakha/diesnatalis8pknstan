"use client"
import Link from "next/link"
import { useRef,useEffect } from 'react'

export default function Card(props: any){
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
        <div ref={fadeIn} className="fade-container mt-8 hover:scale-105 hover:border hover:border-gray-300 transition-all duration-300 ease-in-out md:mx-2 w-72 justify-center text-center bg-cover bg-center rounded-xl"  style={{backgroundImage:`url("`+props.url+`")`, height:"28rem"}}>
            <Link href={`${props.alamat}`}
                target="_blank" rel="noopener noreferrer"
                >
                <div className="group bottom-0 pb-4 items-center flex justify-end flex-col h-full transition duration-300 ease-in-out" >
                    <h3 className="text-lg"><b>{props.heading}</b></h3>
                    <p>{props.place}</p>
                    <Link  href={`${props.kontak}`}
                        target="_blank" rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >Ada pertanyaan?</Link>
                </div>
            </Link>
        </div>
    )
}
