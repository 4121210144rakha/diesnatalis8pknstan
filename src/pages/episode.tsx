import '../app/globals.css'
import episodecard from '@/app/components/episodecard'
import Navbar from '@/app/components/navbar'

export default function episode() {
    return(
        <div className="text-center">
            <h1 className="text-2xl"><strong>The Journals</strong></h1>
            <video className='-z-50' autoPlay autoFocus>
                <source src="/videos/Beach.mp4" type='video/mp4'/>
            </video>
            <div className='absolute bottom-48 right-24 flex flex-col items-center justify-center bg-zinc-700'>
                <h4>Siapakah yang harus A ikuti?</h4>
                <button className='hover:bg-red-600'>
                    Tokoh Z
                </button>
                <button className='hover:bg-red-600'>
                    Tokoh X
                </button>
                <button className='hover:bg-red-600'>
                    Tokoh Y
                </button>
            </div>
        </div>
    )
}