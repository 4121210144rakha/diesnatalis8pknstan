// components
import Lombacard from "../components/lombacard"

export default function Explore() {
    
    return(
        <section id="Events" className="my-16">
            <h2 className="text-5xl sm:text-7xl font-semibold pt-10" style={{fontFamily:"Crima"}}>Uncover the Spectacle</h2>
            <p className="py-8 mx-8">
                Immerse yourself in a myriad of captivating events that promise to astound and delight at every turn.
            </p>

            <div className="flex flex-col md:flex-row my-10 sm:justify-evenly justify-center items-center">
                <Lombacard alamat="https://www.eventbrite.com/e/opening-ceremony-dies-natalis-8-pkn-stan-tickets-662254951387" wa="https://wa.me/6282181771647" heading="Opening Ceremony" caption="GEDUNG G" image="https://s6.imgcdn.dev/vl9ki.png" text="Join Now!" panduan="#" check="https://docs.google.com/spreadsheets/d/1liuYoqIPSLRBn2rqk8PWspiyPPPP-WXi3-9VZTdpThA/edit#gid=0"/>
                <Lombacard alamat="https://www.eventbrite.com/e/art-gallery-dies-natalis-8-pkn-stan-tickets-669264376767" wa="https://wa.me/6282235409602" heading="Art Gallery" caption="GEDUNG N" image="https://images.unsplash.com/photo-1594794312433-05a69a98b7a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" text="Join Now!" panduan="#" check="/events/artgallery"/>
                <Lombacard alamat="https://docs.google.com/forms/d/e/1FAIpQLScwoPl15B3I00lRkt9JCjT3DAMBivG7ki12peTvEbHMCGW1QA/closedform" wa="https://wa.me/6281375085265" image="https://images.unsplash.com/photo-1669533035765-43cd173ca448?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" heading="Donor Darah" caption="GEDUNG N" text="Join Now!" panduan="#" check="https://docs.google.com/spreadsheets/d/1IkLm7vK3KTris-6RJ6rt7UMTs3YMpgUT_QRP7csYaTk/edit#gid=0"/>
            </div>
            
            <div className="flex items-center justify-center">
                <a href={`${'/events'}`} target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-500 w-fit">ALL EVENTS &gt;</a>
            </div>
        </section>
    )
}