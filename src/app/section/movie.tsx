import Link from 'next/link'
// Components
import EpisodeCard from '../components/episodecard'
export default function Movie() {
    return(
        <section id="Crack the Code" className="py-8">
            <h2 className="text-5xl" style={{fontFamily:"Crima"}}><strong>Crack the Code</strong></h2>
            <p className="py-8">
                Get ready for an upcoming video puzzle experience that will leave you on the edge of your seat!
            </p>
                
            <div className="flex my-10 sm:justify-around items-start flex-col sm:flex-row">
                <EpisodeCard alamat="#" src={"https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"} date="" heading="Coming soon ..." caption=""/>
            </div>

            <div className="flex items-center justify-center">
                <Link href={"#"} className="hover:underline text-blue-500 transition duration-150 ease-in-out w-fit">ALL EPISODES &gt;</Link>
            </div>
        </section>
        
    )
}