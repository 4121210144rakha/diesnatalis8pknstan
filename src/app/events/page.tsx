"use client"
import { useState, useEffect } from "react";
// components
import CardLocked from "@/app/components/cardlocked"
import Loading from "../components/Loading";
import Card from "../components/cards";

export default function Events() {
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
                <section className="mt-20 text-center">
                    <h2 className="text-5xl sm:text-7xl font-semibold pt-10" style={{fontFamily:"Crima"}}>Uncover the Spectacle</h2>
                    <p className="py-8 mx-8">
                        Immerse yourself in a myriad of captivating events that promise to astound and delight at every turn.
                    </p>
                    <div className="flex lg:flex-row flex-col sm:justify-evenly justify-center items-center">
                        <Card alamat="https://wa.me/6281375085265" kontak="https://wa.me/6281375085265" url="https://images.unsplash.com/photo-1644726270363-e746b37b482b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80" heading="Bakti Sosial" place="LAPAK SARMILI"/>
                        <CardLocked alamat="https://wa.me/6281375085265" url="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=685&q=80" heading="Bakti Kampus" place="PKN STAN"/>
                        <CardLocked alamat="https://wa.me/6281375085265" url="https://images.unsplash.com/photo-1669533035765-43cd173ca448?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" heading="Donor Darah" place="GEDUNG N"/>
                    </div>
                    <div className="flex lg:flex-row flex-col sm:justify-evenly justify-center items-center">
                        <CardLocked alamat="https://wa.me/6282181771647" heading="Opening Ceremony" place="GEDUNG G" url="https://images.unsplash.com/photo-1565035010268-a3816f98589a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"/>
                        <CardLocked alamat="https://wa.me/6285881631363" heading="Workshop ESG" place="GEDUNG G" url="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"/>
                        <CardLocked alamat="https://wa.me/6282131002008" heading="Seminar Internasional" place="ZOOM" url="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"/>
                    </div>
                    <div className="flex lg:flex-row flex-col sm:justify-evenly justify-center items-center">
                        <CardLocked alamat="https://wa.me/6282235409602" heading="Special Event" place="GEDUNG G" url="https://images.unsplash.com/photo-1603910234616-3b5f4a6be2b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"/>
                        <CardLocked alamat="https://wa.me/6282245438933" heading="Talkshow" place="GEDUNG G" url="https://plus.unsplash.com/premium_photo-1679079456783-5d862f755557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"/>
                        <CardLocked alamat="https://wa.me/6282276264815" heading="Sidang Senat" place="GEDUNG G" url="https://plus.unsplash.com/premium_photo-1661856221850-8d6cc299049c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"/>
                    </div>
                    <div className="flex lg:flex-row flex-col sm:justify-evenly justify-center items-center">
                        <CardLocked alamat="https://wa.me/6281391640148" heading="Acara Puncak" place="GEDUNG G" url="https://images.unsplash.com/photo-1573055592760-a1427683e07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80"/>
                        <CardLocked alamat="https://wa.me/6281285604102" heading="Closing Ceremony" place="GEDUNG G" url="https://images.unsplash.com/photo-1576328077645-2dd68934d2b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80"/>
                    </div>
                </section>
            </>
        )
    )
}