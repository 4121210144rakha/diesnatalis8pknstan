"use client"
import { useState, useEffect } from 'react';
import Loading from '../components/Loading';

const Awarding = () => {
    const[isLoad,setLoading] =  useState(true);
    useEffect(() => {
        setLoading(true);
        setTimeout(()=>{
            setLoading(false)
        }, 1000)
    }, []);
    return(
        isLoad?(<Loading/>):(
           <div className="h-screen w-screen flex flex-col items-center justify-center"><p className="text-2xl font-semibold">Thank you for your vote</p></div>
        )
    );
}

export default Awarding;