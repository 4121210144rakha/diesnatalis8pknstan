import Link from "next/link"
export default function Tautan(props:any){
    return(
        <div className="flex items-center justify-center mt-6">
            <Link href={`${props.url}`} target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-500 w-full p-2">{props.text} &gt;</Link>
        </div>
    )
}