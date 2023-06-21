import '../globals.css'
import Link from "next/link"
import Image from 'next/image'
export default function lombacard(props:any) {
    return(
        <div className="group my-4 items-center justify-center flex-col overflow-hidden rounded-lg hover:scale-105 hover:border hover:border-gray-500 transition duration-200 ease-in-out mx-4" style={{height:"28rem", width:"20rem"}}>
            <Image src={props.image} alt="Gambar" width={150} height={200} loading='lazy' className='rounded-lg flex object-cover w-full h-full' style={{height:"28rem"}}/>
            <div id="down" className="-translate-y-28 group-hover:-translate-y-56 transition duration-500 ease-in-out px-2 mask-image-to-top bg-black bg-opacity-80">
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
                    Play Now!
                </Link>
                <Link href={{
                        pathname:"[id]",
                        query: {
                            id: props.panduan
                        }
                    }} 
                    as={`${props.panduan}`}    
                    className="flex w-fit h-fit text-blue-500 hover:underline transition ease-in-out duration-150">Panduan</Link>
                <div className="flex flex-row justify-between pb-4">
                    <Link href={{
                            pathname:"[id]",
                            query: {
                                id: props.wa
                            }
                        }} 
                        as={`${props.wa}`} 
                        className="flex w-fit h-fit text-blue-500 hover:underline transition ease-in-out duration-150">Ada pertanyaan?</Link>
                    <Link href={{
                            pathname:"[id]",
                            query: {
                                id: props.check
                            }
                        }} 
                        as={`${props.check}`}
                        className="flex w-fit h-fit text-blue-500 hover:underline transition ease-in-out duration-150">Sudah mendaftar?</Link>
                </div>
            </div>
        </div>
    )
}