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
            <div className='items-center justify-center flex h-screen'>
                <h1>SORRY THIS PAGE IS UNDER CONSTRUCTION</h1>
            </div>
        )
    );
}

export default Awarding;