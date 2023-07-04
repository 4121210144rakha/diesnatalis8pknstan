"use client"
import { useState, useEffect } from "react";
// components
import CardLocked from "@/app/components/cardlocked"
import Loading from "../components/Loading";
import Lombacard from "../components/lombacard";

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
                        <Lombacard alamat="https://wa.me/6281375085265" wa="https://wa.me/6281375085265" image="https://images.unsplash.com/photo-1644726270363-e746b37b482b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80" heading="Bakti Sosial" caption="LAPAK SARMILI" text="Join Now!" panduan="#" check="#"/>
                        <Lombacard alamat="https://www.eventbrite.com/e/opening-ceremony-dies-natalis-8-pkn-stan-tickets-662254951387" wa="https://wa.me/6282181771647" heading="Opening Ceremony" caption="GEDUNG G" image="https://s6.imgcdn.dev/vl9ki.png" text="Join Now!" panduan="#" check="https://docs.google.com/spreadsheets/d/1liuYoqIPSLRBn2rqk8PWspiyPPPP-WXi3-9VZTdpThA/edit#gid=0"/>
                        <Lombacard alamat="https://docs.google.com/forms/d/e/1FAIpQLSeyeYXKGtuZzm4lnoTxATGTotT4iBq5oehLhcBSJKIUVfrHWA/closedform" wa="https://wa.me/6281375085265" image="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=685&q=80" heading="Bakti Kampus" caption="PKN STAN" text="Join Now!" panduan="#" check="https://docs.google.com/spreadsheets/d/1Y3E2HbCN2N_DTUPJtzP2T50fy3P5dU3pi-mNOrAUpNI/edit#gid=0"/>
                    </div>
                    <div className="flex lg:flex-row flex-col sm:justify-evenly justify-center items-center">
                        <Lombacard alamat="https://docs.google.com/forms/d/e/1FAIpQLScwoPl15B3I00lRkt9JCjT3DAMBivG7ki12peTvEbHMCGW1QA/closedform" wa="https://wa.me/6281375085265" image="https://images.unsplash.com/photo-1669533035765-43cd173ca448?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" heading="Donor Darah" caption="GEDUNG N" text="Join Now!" panduan="#" check="https://docs.google.com/spreadsheets/d/1IkLm7vK3KTris-6RJ6rt7UMTs3YMpgUT_QRP7csYaTk/edit#gid=0"/>
                        <Lombacard alamat="https://www.eventbrite.com/e/the-effect-of-climate-change-on-property-value-fact-or-fiction-tickets-665040111877" wa="http://wa.me/6282131002008" image="https://images.unsplash.com/photo-1569038786784-24a715a36507?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" heading="International Seminar: Property Value" caption="GEDUNG N" text="Join Now!" panduan="https://drive.google.com/drive/u/0/folders/1M9Ue_7h7lplCUBv5VM3odnDzFuzNQ9ln" check="/events/seminarclimatechange"/>
                        <Lombacard alamat="#" wa="https://wa.me/6285881631363" heading="Workshop ESG" caption="GEDUNG G" image="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" text="Join Now!" panduan="#" check="#"/>
                    </div>
                    <div className="flex lg:flex-row flex-col sm:justify-evenly justify-center items-center">
                        <Lombacard alamat="https://www.eventbrite.com/e/art-gallery-dies-natalis-8-pkn-stan-tickets-669264376767" wa="https://wa.me/6282235409602" heading="Art Gallery" caption="GEDUNG N" image="https://images.unsplash.com/photo-1594794312433-05a69a98b7a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" text="Join Now!" panduan="#" check="/events/artgallery"/>
                        <CardLocked alamat="https://wa.me/6282235409602" heading="Special Event" place="GEDUNG G" url="https://images.unsplash.com/photo-1603910234616-3b5f4a6be2b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"/>
                        <CardLocked alamat="https://wa.me/6282245438933" heading="Talkshow" place="GEDUNG G" url="https://plus.unsplash.com/premium_photo-1679079456783-5d862f755557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"/>
                    </div>
                    <div className="flex lg:flex-row flex-col sm:justify-evenly justify-center items-center">
                        <CardLocked alamat="https://wa.me/6282276264815" heading="Sidang Senat" place="GEDUNG G" url="https://s6.imgcdn.dev/vlRrH.png"/>
                        <CardLocked alamat="https://wa.me/6281391640148" heading="Acara Puncak" place="GEDUNG G" url="https://s6.imgcdn.dev/vlO82.png"/>
                        <CardLocked alamat="https://wa.me/6281285604102" heading="Closing Ceremony" place="GEDUNG G" url="https://images.unsplash.com/photo-1576328077645-2dd68934d2b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80"/>
                    </div>
                </section>
            </>
        )
    )
}