import Link from "next/link"
export default function Tautan(props:any){
    return(
            <Link href={`${props.url}`} rel="noopener noreferrer" className="cursor-pointer hover:underline text-blue-500 w-full p-2"><p>{props.text} &gt;</p></Link>
    )
}