import Image from "next/image"
import Link from "next/link"
export default function lombacard(props:any) {
    return(
        <div className="">
            <Image src={props.url} width={300} height={400} alt={props.alternatif} className=""/>
            <div className="">
                <h4>{props.heading}</h4>
                <p>{props.description}</p>
                <Link href={props.url} className="text-black rounded-sm bg-white hover:scale-110 transition-all duration-300 ease-in-out px-4 py-2"><b>{props.text}</b></Link>
            </div>
        </div>
    )
}