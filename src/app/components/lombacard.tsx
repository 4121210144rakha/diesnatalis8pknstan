import Image from "next/image"
import Link from "next/link"
export default function lombacard(props:any) {
    return(
        <div className="flex flex-row ">
            <Image src={props.sauce} width={300} height={400} alt={props.alternatif} className="peer hover:scale-110"/>
            <div className="hidden peer-hover:block transition-all duration-300 ease-in-out">
                <h4>{props.heading}</h4>
                <p>{props.description}</p>
                <Link href={{
                    pathname:"[id]",
                    query: {
                        id: props.alamat,
                    }
                }}
                as={`${props.alamat}`}
                className="text-black rounded-sm bg-white hover:scale-110 transition-all duration-300 ease-in-out px-4 py-2"><b>Daftar</b></Link>
            </div>
        </div>
    )
}