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
            <div className="h-screen w-screen items-center justify-center flex flex-col"><h1 className="font-semibold text-2xl">THANK YOU FOR YOUR VOTE</h1>
</div>
        )
    );
}

export default Awarding;