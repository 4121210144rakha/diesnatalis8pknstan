import Link from 'next/link'
// Components
import EpisodeCard from '../components/episodecard'
const Movie = () => {
    return(
        <section id="Crack the Code" className="py-8">
            <h2 className="text-5xl" style={{fontFamily:"Crima"}}><strong>Crack the Code</strong></h2>
            <p className="py-8">
                Get ready for an upcoming video puzzle experience that will leave you on the edge of your seat!
            </p>
                
            <div className="flex my-10 sm:justify-around items-start flex-col sm:flex-row">
                <EpisodeCard/>
            </div>

            <div className="flex items-center justify-center">
                <Link href={"#"} className="-translate-y-0 hover:-translate-y-0 hover:underline text-blue-500 transition duration-150 ease-in-out w-fit">ALL EPISODES &gt;</Link>
            </div>
        </section>
        
    )
}

export default Movie;