import Image from 'next/image'
import Link from 'next/link'

// svg
import Lock from '../../../public/locked.svg'

export default function CardLocked(props:any) {
    return(
        <div className="mt-8 hover:scale-105 hover:border hover:border-gray-300 transition-all duration-300 ease-in-out md:mx-2 w-72 justify-center text-center bg-cover bg-center rounded-xl"  style={{backgroundImage:`url(`+props.url+`)`, height:"28rem"}}>
            <div className="group bottom-0 pb-6 hover:backdrop-blur-sm items-center flex hover:justify-center justify-end flex-col h-full transition duration-200 ease-in-out rounded-xl">
                <h3 className="text-lg group-hover:hidden"><b>{props.heading}</b></h3>
                <p className="group-hover:hidden">{props.place}</p>
                <Image className="hidden group-hover:block" src={Lock} width={30} height={30} alt='Lock' loading="lazy"/>
                <Link href={{
                    pathname:"[id]",
                    query: {
                        id: props.alamat
                    }
                }} 
                as={`${props.alamat}`}
                className="text-blue-500 hover:underline">Ada pertanyaan?</Link>
            </div>
        </div>
    )
}