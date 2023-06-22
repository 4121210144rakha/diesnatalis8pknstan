// components
import CardLocked from "../components/cardlocked"
import Link from "next/link"
import { useRef, useEffect } from "react"

export default function Explore() {
    const fadeIn = useRef(null);
    const options = {
        root:null,
        rootMargin: '0px',
        threshold:0.5,
    };
    
    useEffect(()=>{

    },[]);
    
    return(
        <section id="Events" className="my-16">
            <h2 className="text-5xl sm:text-7xl font-semibold pt-10" style={{fontFamily:"Crima"}}>Uncover the Spectacle</h2>
            <p className="py-8 mx-8">
                Immerse yourself in a myriad of captivating events that promise to astound and delight at every turn.
            </p>

            <div className="flex flex-col md:flex-row my-10 sm:justify-evenly justify-center items-center">
                <CardLocked alamat="https://wa.me/6282181771647" heading="Opening Ceremony" place="GEDUNG G" url="https://images.unsplash.com/photo-1565035010268-a3816f98589a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"/>
                <CardLocked alamat="https://wa.me/6281375085265" heading="Bakti Kampus" place="AIR MANCUR PKN STAN" url="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=685&q=80"/>
                <CardLocked alamat="https://wa.me/6281391640148" heading="Acara Puncak" place="GEDUNG G" url="https://images.unsplash.com/photo-1573055592760-a1427683e07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80"/>
            </div>
            
            <div className="flex items-center justify-center">
                <Link href={"/events"} className="hover:underline text-blue-500 w-fit">ALL EVENTS &gt;</Link>
            </div>
        </section>
    )
}