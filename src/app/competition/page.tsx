"use client"
import { useState, useEffect } from 'react'
// components
import Lombacard from '@/app/components/lombacard'
import Loading from '../components/Loading';

export default function Competition() {
    const[isLoad,setLoading] =  useState(true);
    useEffect(() => {
        setLoading(true);
        setTimeout(()=>{
            setLoading(false)
        }, 1500)
    }, []);
    return(
        isLoad?(<Loading/>):(
            <>
                <section className="my-20 text-center">
                    <h2 className="text-5xl sm:text-7xl font-semibold" style={{fontFamily:"Crima"}}>Competition Board</h2>
                    <p className="py-8 mx-8">Dive into a diverse array of captivating competitions and seize the chance to claim exhilarating victories and amazing prizes!</p>
                    <h3 className="text-3xl my-4 font-semibold">Sport</h3>
                    <div className="flex lg:flex-row flex-col sm:justify-evenly justify-center items-center mb-10">
                        <Lombacard alamat="https://docs.google.com/forms/d/e/1FAIpQLSdmFeDcHHTjnIHGicA1OSyNeJ60ut8N3HcGzTtCTGL-kIn3SA/viewform" image="https://images.unsplash.com/photo-1639656333164-d67ca531e632?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" heading="Mobile Legends" caption="Unleash your legend! Join the battle." wa="http://wa.me/6282120421260" check="https://docs.google.com/spreadsheets/d/1IRHD3v6IhZy6cJjonA_kY5mSzUPcTzDC-HsL1zaEpF8/edit" panduan="#"/>
                        <Lombacard alamat="https://docs.google.com/forms/d/e/1FAIpQLSeunzKs_5vKcw_SOhBZSOc5YReH781neMmVe39m4qExGSJXRw/viewform" image="https://images.unsplash.com/photo-1626225015999-2e53f6aaa008?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" heading="Badminton" caption="Smash your way to victory!" wa="http://wa.me/6282120421260" check="https://docs.google.com/spreadsheets/d/14CgFqNuXxJPWeSLLOio1aGMxDXp9yIri4rXHY2Tku_I/edit#gid=0" panduan="#"/>
                    </div>
                    <h3 className="text-3xl my-4 font-semibold">Academic</h3>
                    <div className="flex lg:flex-row flex-col sm:justify-evenly justify-center items-center">
                        <Lombacard alamat="https://docs.google.com/forms/d/e/1FAIpQLSes435dEVii_SVz2TuoddeF5shcAmAcYUlp1x58egcSc5FDLg/viewform" image="https://images.unsplash.com/photo-1623278589094-6741f418d3bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=709&q=80" heading="STAN MUN" caption="Speak up! Make a difference." wa="http://wa.me/6282335195569" check="https://docs.google.com/spreadsheets/d/1skq3wRyY2fc9uUSGWjp9tw4rOU1RuJKNYq9wUePPTZA/edit?usp=sharing" panduan="https://drive.google.com/file/d/1aa2aJOYaWd3_jzG9ntTX3bCAQs2sDqKe/preview"/>
                        <Lombacard alamat="https://docs.google.com/forms/d/e/1FAIpQLSe9QMaB58hL844a6_l_oCgOIrQdKoKUQsHggwqzqYGsOph7Pw/viewform" image="https://images.unsplash.com/photo-1613951085587-cfe5d0a6cffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=634&q=80" heading="Try to Survive" caption="No escape. Only survival." wa="http://wa.me/6282335195569" check="https://docs.google.com/spreadsheets/d/1UktQI3I1nC4M9LERLGFXi6kRK6tyVa-Mqd2bULx4Vdc/edit#gid=0" panduan="https://drive.google.com/file/d/1aa2aJOYaWd3_jzG9ntTX3bCAQs2sDqKe/preview"/>
                        <Lombacard alamat ="https://docs.google.com/forms/d/e/1FAIpQLSdVZ9j76GM88gKbWf1fzqytoe1tPGRZqMohMtEYdi7GF4xuhw/viewform" image="https://images.unsplash.com/photo-1540634759006-203f597e1a34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=791&q=80" heading="Show Your Abilities" caption="Your world, your road!" wa="http://wa.me/6282335195569" check="https://docs.google.com/spreadsheets/d/1Onvuzk53DtcyrX0UeCsVzmUVfuhcARl3BparvJiz2sY/edit#gid=0" panduan="https://drive.google.com/file/d/1aa2aJOYaWd3_jzG9ntTX3bCAQs2sDqKe/preview"/>
                    </div>
                    <div className="flex lg:flex-row flex-col sm:justify-evenly justify-center items-center mb-10">
                        <Lombacard alamat="https://docs.google.com/forms/d/14PxvT5jsUGOEMUvptrr3cJA4qB0AuFiPPNNo-LK_QIE/closedform" image="https://images.unsplash.com/photo-1587135991058-8816b028691f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" heading="3 Minutes Thesis" caption="Show your thesis skill in 3 minutes thrill." wa="http://wa.me/6282335195569" check="https://docs.google.com/spreadsheets/d/1VSAQRUOSGIr_9wXWXaGT38Imnu6OjRe7_RkBDpqlqkU/edit" panduan="https://drive.google.com/file/d/1aa2aJOYaWd3_jzG9ntTX3bCAQs2sDqKe/preview"/>
                    </div>
                    <h3 className="text-3xl my-4 font-semibold">Art</h3>
                    <div className="flex lg:flex-row flex-col sm:justify-evenly justify-center items-center mb-10">
                        <Lombacard alamat="https://docs.google.com/forms/d/e/1FAIpQLSc3b2mTNywf_v7q9azR68J89RBbmiKImeUX4FzX6VqdWYWQ1A/viewform" image="https://images.unsplash.com/photo-1581349485608-9469926a8e5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" heading="STAN Chef" caption="Ready, set, cook!" wa="http://wa.me/6281235535951" check="https://docs.google.com/spreadsheets/d/1Q5wI4X2KP6VWsLQ0myS7iMyq1tfJNaK7grU511YIco0/edit" panduan="https://drive.google.com/file/d/1bcZkHNbn9gBtx1UeV56NZSkzY4KkqkMI/preview"/>
                        <Lombacard alamat="https://docs.google.com/forms/d/e/1FAIpQLSe_OmmvWzX3EGIDfZKG929M83lG6rwVsKJKH9LHvI8t6h4yMQ/viewform" image="https://plus.unsplash.com/premium_photo-1681503973682-29cec46571b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" heading="STAN Band" caption="Rock the stage!" wa="http://wa.me/6281235535951" check="https://docs.google.com/spreadsheets/d/1kwiCA2uHjR3PrB6ucdvQgh7BdjcR1bVQhz99Ldm9hsM/edit#gid=0" panduan="https://drive.google.com/file/d/1bcZkHNbn9gBtx1UeV56NZSkzY4KkqkMI/preview"/>
                        <Lombacard alamat="https://docs.google.com/forms/d/e/1FAIpQLSe6uYqw9Hy3HuDKMc24tyZ7cDhe37YCkF5W3_r5jfWy42wKPQ/viewform" image="https://images.unsplash.com/photo-1584661156681-540e80a161d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" heading="PoP (Painting on Polywood)" caption="Express your creativity!" wa="http://wa.me/6281235535951" check="https://docs.google.com/spreadsheets/d/1HfgXshLuw2oMlmmpMvsfmqPsQU0cqE_sGeVqoLtEN0s/edit?usp=sharing" panduan="https://drive.google.com/file/d/1bcZkHNbn9gBtx1UeV56NZSkzY4KkqkMI/preview"/>
                    </div>
                </section>
            </>
        )
    )
    
}