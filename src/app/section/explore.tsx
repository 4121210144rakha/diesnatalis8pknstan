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
                <Lombacard alamat="https://www.eventbrite.com/e/opening-ceremony-dies-natalis-8-pkn-stan-tickets-662254951387" wa="https://wa.me/6282181771647" heading="Opening Ceremony" caption="GEDUNG G" image="https://s6.imgcdn.dev/vl9ki.png" text="Join Now!" panduan="#" check="https://docs.google.com/spreadsheets/d/1liuYoqIPSLRBn2rqk8PWspiyPPPP-WXi3-9VZTdpThA/edit#gid=0"/>
                <Lombacard alamat="https://www.eventbrite.com/e/the-effect-of-climate-change-on-property-value-fact-or-fiction-tickets-665040111877" wa="http://wa.me/6282131002008" image="https://images.unsplash.com/photo-1569038786784-24a715a36507?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" heading="International Seminar: Property Value" caption="GEDUNG N" text="Join Now!" panduan="https://drive.google.com/drive/u/0/folders/1M9Ue_7h7lplCUBv5VM3odnDzFuzNQ9ln" check="/events/seminarclimatechange"/>
                <Lombacard alamat="https://docs.google.com/forms/d/e/1FAIpQLSeyeYXKGtuZzm4lnoTxATGTotT4iBq5oehLhcBSJKIUVfrHWA/closedform" wa="https://wa.me/6281375085265" image="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=685&q=80" heading="Bakti Kampus" caption="PKN STAN" text="Join Now!" panduan="#" check="https://docs.google.com/spreadsheets/d/1Y3E2HbCN2N_DTUPJtzP2T50fy3P5dU3pi-mNOrAUpNI/edit#gid=0"/>
            </div>
            
            <div className="flex items-center justify-center">
                <Link href={"/events"} className="hover:underline text-blue-500 w-fit">ALL EVENTS &gt;</Link>
            </div>
        </section>
    )
}