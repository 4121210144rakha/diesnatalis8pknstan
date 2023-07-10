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
            <h1 className='text-3xl font-semibold items-center justify-center h-screen'>THANK YOU FOR YOUR VOTE!!</h1>
        )
    );
}

export default Awarding;