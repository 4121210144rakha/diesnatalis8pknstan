// components
import CardLocked from "../components/cardlocked"
import Link from "next/link"

const Explore:React.FC = () => {
    
    return(
        <section id="Events" className="my-16">
            <h2 className="text-5xl sm:text-7xl font-semibold pt-10" style={{fontFamily:"Crima"}}>Uncover the Spectacle</h2>
            <p className="py-8 mx-8">
                Immerse yourself in a myriad of captivating events that promise to astound and delight at every turn.
            </p>

            <div className="flex flex-col md:flex-row my-10 sm:justify-evenly justify-center items-center">
                <CardLocked alamat="https://wa.me/6282276264815" heading="Sidang Senat" place="GEDUNG G" url="https://s6.imgcdn.dev/vlRrH.png"/>
                <CardLocked alamat="https://wa.me/6281391640148" heading="Acara Puncak" place="GEDUNG G" url="https://s6.imgcdn.dev/vlO82.png"/>
                <CardLocked alamat="https://wa.me/6281285604102" heading="Closing Ceremony" place="GEDUNG G" url="https://images.unsplash.com/photo-1576328077645-2dd68934d2b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80"/>
            </div>


            <div className="cursor-pointer group" onClick={()=>{}} style={{ cursor: 'pointer' }}>
                <Link href={`/events`} rel="noopener noreferrer" className="-translate-y-28 group-hover:-translate-y-56 transition duration-500 ease-in-out cursor-pointer hover:underline text-blue-500 w-full p-2"><p>ALL EVENTS &gt;</p></Link>
            </div>
        </section>
    )
}

export default Explore;