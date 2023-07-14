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
           <iframe title='Voting' src="https://www.menti.com/alatrybzcrhx" className='w-screen h-screen scrollbar-hide'></iframe>
        )
    );
}

export default Awarding;