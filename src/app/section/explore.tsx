// components
import CardLocked from "../components/cardlocked"
import Link from "next/link"

export default function Explore() {
    return(
        <section className="my-16">
            <h2 className="text-5xl sm:text-7xl font-semibold pt-10" style={{fontFamily:"Crima"}}>Explore the World</h2>
            <p className="py-8 mx-8">
                We seek to provide the most authentic content from athletes, adventurers, explorers and travellers around the world. Our long-term mission is to educate, inspire, and enable all peoples to experience & protect wilderness.
            </p>

            <div className="flex flex-col sm:flex-row my-10 sm:justify-evenly justify-center items-center">
                <CardLocked heading="Special Event" place="GEDUNG G" url="https://images.unsplash.com/photo-1603910234616-3b5f4a6be2b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"/>
                <CardLocked heading="Talkshow" place="GEDUNG G" url="https://plus.unsplash.com/premium_photo-1679079456783-5d862f755557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"/>
                <CardLocked heading="Acara Puncak" place="GEDUNG G" url="https://images.unsplash.com/photo-1573055592760-a1427683e07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80"/>
            </div>
            
            <div className="flex items-center justify-center">
                <Link href={"/events"} className="hover:underline text-blue-500 w-fit">ALL EVENTS &gt;</Link>
            </div>
        </section>
    )
}