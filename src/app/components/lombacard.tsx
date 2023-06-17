import '../globals.css'
import Link from "next/link"
import Image from 'next/image'
export default function lombacard(props:any) {
    return(
        <div className="group my-4 items-center justify-center flex-col overflow-hidden rounded-lg hover:scale-105 transition duration-300 ease-in-out mx-4" style={{height:"28rem", width:"20rem"}}>
            <Image src={props.image} alt="Gambar" width={300} height={400} loading='lazy' className='rounded-lg flex object-cover w-full h-full' style={{height:"28rem"}}/>
            <div id="down" className="-translate-y-32 group-hover:-translate-y-60 transition duration-700 ease-in-out px-2 mask-image-to-top bg-black bg-opacity-80">
                <h3 className="font-semibold text-lg pt-12">{props.heading}</h3>
                <p className="">{props.caption}</p>
                <Link href={{
                    pathname:"[id]",
                    query: {
                        id: props.alamat
                    }
                }} 
                as={`${props.alamat}`}
                className="flex flex-col justify-center h-fit bg-white text-black font-semibold py-1 px-2 mt-6 mb-2 rounded-lg hover:scale-105 transition ease-in-out duration-150 text-center"
                >
                    Play now!
                </Link>
                <Link href={"#"} className="flex w-fit h-fit text-blue-500 hover:underline hover:scale-105 transition ease-in-out duration-150">Panduan</Link>
                <div className="flex flex-row justify-between pb-4">
                    <Link href={"#"} className="flex w-fit h-fit text-blue-500 hover:underline hover:scale-105 transition ease-in-out duration-150">Ada pertanyaan?</Link>
                    <Link href={"#"} className="flex w-fit h-fit text-blue-500 hover:underline hover:scale-105 transition ease-in-out duration-150">Sudah mendaftar?</Link>
                </div>
            </div>
        </div>
    )
}