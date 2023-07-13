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
            <div className='w-screen h-screen items-center flex justify-center text-center'>
                <h1 className='text-2xl font-semibold text-center'>THANK YOU FOR YOUR VOTE</h1>
            </div>
        )
    );
}

export default Awarding;