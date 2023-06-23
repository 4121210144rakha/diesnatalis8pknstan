'use client'
import Link from "next/link"
import Image from 'next/image'
import { useRef, useEffect } from 'react'

export default function Tenant() {
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
        <section className="my-16">
            <h2 className="text-5xl" style={{fontFamily:"Crima"}}><strong>Exclusive Offer and Benefits</strong></h2>
            <p className="py-8">
                
            </p>

            <div className="flex flex-col lg:flex-row justify-center sm:justify-evenly items-center">
                <div ref={fadeIn} className="fade-container group my-4 items-center justify-center flex-col overflow-hidden rounded-lg hover:scale-105 hover:border hover:border-gray-500 transition duration-200 ease-in-out mx-4" style={{height:"28rem", width:"20rem"}}>
                <Image src={"https://images.unsplash.com/photo-1640141861696-54685fddf4ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80"} alt="Gambar" width={150} height={200} className='rounded-lg flex object-cover w-full h-full' style={{height:"28rem"}}/>
                <div id="down" className="-translate-y-28 group-hover:-translate-y-52 transition duration-500 ease-in-out px-2 mask-image-to-top bg-black bg-opacity-80">
                    <h3 className="font-semibold text-lg pt-12">Tenants</h3>
                    <p className="">Don’t Miss Out on These Benefits!</p>
                    <Link href={"https://docs.google.com/forms/d/e/1FAIpQLSdgIQw6NPas7xfmm_m9ri3ksW52L2HBmmHdyHsK4IAQi78lTg/viewform"}
                    className="flex flex-col justify-center h-fit bg-white text-black font-semibold py-1 px-2 mt-6 mb-2 rounded-lg hover:scale-105 transition ease-in-out duration-150 text-center"
                    target="_blank" rel="noopener noreferrer"
                    >
                        Get Now!
                    </Link>
                    <div className="flex flex-row justify-between pb-4 pt-2">
                        <Link href={"https://drive.google.com/file/d/14bHFcvh6uV-ukosITssbiZkDosZwPfk4/view"}
                            target="_blank" rel="noopener noreferrer"
                            className="flex w-fit h-fit text-blue-500 hover:underline transition ease-in-out duration-150"
                        >
                            Panduan
                        </Link>
                        <Link href={"https://wa.me/62895614539057"}
                            target="_blank" rel="noopener noreferrer"
                            className="flex w-fit h-fit text-blue-500 hover:underline transition ease-in-out duration-150">Ada pertanyaan?</Link>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}