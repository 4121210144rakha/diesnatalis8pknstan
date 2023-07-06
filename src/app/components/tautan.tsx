import Link from "next/link"
export default function Tautan(props:any){
    return(
        <div className="group mt-6">
            <Link href={`${props.url}`} rel="noopener noreferrer" className="group-hover:underline text-blue-500 w-full p-2">{props.text} &gt;</Link>
        </div>
    )
}