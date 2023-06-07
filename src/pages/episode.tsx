import '../app/globals.css'
import episodecard from '@/app/components/episodecard'
import Navbar from '@/app/components/navbar'

export default function episode() {
    return(
        <div className="text-center">
            <Navbar/>
            <h1 className="text-2xl"><strong>The Journals</strong></h1>
        </div>
    )
}