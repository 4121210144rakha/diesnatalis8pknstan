// components
import CardLocked from "@/app/components/cardlocked"
import Lombacard from "../components/lombacard"
import Link from "next/link"

export default function Explore() {
    
    return(
        <section id="Events" className="my-16">
            <h2 className="text-5xl sm:text-7xl font-semibold pt-10" style={{fontFamily:"Crima"}}>Uncover the Spectacle</h2>
            <p className="py-8 mx-8">
                Immerse yourself in a myriad of captivating events that promise to astound and delight at every turn.
            </p>

            <div className="flex flex-col md:flex-row my-10 sm:justify-evenly justify-center items-center">
                <Lombacard alamat="https://www.eventbrite.com/e/opening-ceremony-dies-natalis-8-pkn-stan-tickets-662254951387" wa="https://wa.me/6282181771647" heading="Opening Ceremony" caption="GEDUNG G" image="/image/OpeningCeremony.png" text="Join Now!" panduan="#" check="https://docs.google.com/spreadsheets/d/1liuYoqIPSLRBn2rqk8PWspiyPPPP-WXi3-9VZTdpThA/edit#gid=0"/>
                <CardLocked alamat="https://wa.me/6281375085265" url="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=685&q=80" heading="Bakti Kampus" place="PKN STAN"/>
                <CardLocked alamat="https://wa.me/6281375085265" url="https://images.unsplash.com/photo-1669533035765-43cd173ca448?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" heading="Donor Darah" place="GEDUNG N"/>
            </div>
            
            <div className="flex items-center justify-center">
                <Link href={"/events"} className="hover:underline text-blue-500 w-fit">ALL EVENTS &gt;</Link>
            </div>
        </section>
    )
}