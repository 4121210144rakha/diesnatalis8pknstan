"use client"
import Image from "next/image"
import Link from "next/link"
import { useRef, useEffect } from 'react'

export default function episodecard(props: any) {
    const fadeIn = useRef(null);
    
    useEffect(()=>{
        const options = {
            root:null,
            rootMargin: '0px',
            threshold:0.5,
        };
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    fadeIn.current.classList.add('fade-in');
                }
            });
        }, options);

        observer.observe(fadeIn.current);
    },[]);
    return(
        <Link ref={fadeIn} href={{
            pathname:"[id]",
            query: {
                id: props.alamat,
                title: props.title
            }
        }} 
        as={`${props.alamat}`}
        className="fade-container hover:scale-105 sm:w-96 pb-10 my-8 col-auto rounded-lg overflow-hidden ring-transparent transition ring-1 duration-300 ease-in-out hover:ring-gray-400">
            <Image
                src={props.src}
                // placeholder="blur"
                width={700}
                height={700}
                alt="gambar"
            />
            <p className="pt-8"><small>{props.date}</small></p>
            <h3 className="text-2xl pt-4 pb-10"><strong>{props.heading}</strong></h3>
            <p className="px-4">{props.caption}</p>
        </Link>
    )
}