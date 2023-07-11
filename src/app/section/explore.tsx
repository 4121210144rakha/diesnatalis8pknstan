// components
import CardLocked from "../components/cardlocked"
import Link from "next/link"
import Card from "../components/card"

const Explore = () => {
    
    return(
        <section id="Events" className="my-16">
            <h2 className="text-5xl sm:text-7xl font-semibold pt-10" style={{fontFamily:"Crima"}}>Uncover the Spectacle</h2>
            <p className="py-8 mx-8">
                Immerse yourself in a myriad of captivating events that promise to astound and delight at every turn.
            </p>

            <div className="flex flex-col md:flex-row my-10 sm:justify-evenly justify-center items-center">
                <Card alamat="https://www.eventbrite.com/e/malam-mahakarya-dies-natalis-8-tickets-663358752887" wa="https://wa.me/6281285604102" heading="Malam Mahakarya" caption="GEDUNG G" image="https://images.unsplash.com/photo-1560195183-570e72bb6fd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80" text="Join Now!" panduan="#" check="#"/>
                <CardLocked alamat="https://wa.me/6282276264815" heading="Sidang Senat" place="GEDUNG G" url="https://s6.imgcdn.dev/vlRrH.png"/>
                <CardLocked alamat="https://wa.me/6281391640148" heading="Acara Puncak" place="GEDUNG G" url="https://s6.imgcdn.dev/vlO82.png"/>
            </div>

            <div className="group">
                <div className="-translate-y-0 group-hover:-translate-y-0 ">
                    <Link href={`/events`} rel="noopener noreferrer" className="transition duration-500 ease-in-out cursor-pointer hover:underline text-blue-500 w-full p-2"><p>ALL EVENTS &gt;</p></Link>
                </div>
            </div>
        </section>
    )
}

export default Explore;