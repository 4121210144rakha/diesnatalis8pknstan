import Link from 'next/link'
// Components
import EpisodeCard from '../components/episodecard'
export default function Movie() {
    return(
        <section id="Journal" className="py-8">
            <div className="">
                <h2 className="text-5xl" style={{fontFamily:"Crima"}}><strong>The Journal</strong></h2>
                <p className="py-8">
                Our favorite stories about public lands and opportunities for you to get involved in protecting your outdoor experiences.
                </p>
            </div>
                
            <div className="flex my-10 sm:justify-around items-start flex-col sm:flex-row">
                <EpisodeCard alamat="anunforgetable" title="Episode 1: An Unforgetable" src={"https://images.unsplash.com/photo-1516687401797-25297ff1462c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"} date="MAY 30, 2017" heading="An Unforgettable" caption="If you only have one day to visit Yosemite National Park and you want to make the most out of it."/>
            </div>

            <div className="flex items-center justify-center">
                <Link href={"/events"} className="hover:underline text-blue-500 hover:scale-105 transition duration-150 ease-in-out w-fit">ALL EPISODES &gt;</Link>
            </div>
        </section>
        
    )
}