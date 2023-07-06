'use client'
import Link from "next/link"
export default function Tautan(props:any){
    return(
        <div className="flex items-center justify-center mt-6">
            <Link href={`${props.url}`}
                    target="_blank" rel="noopener noreferrer"
                    className="flex w-fit h-fit text-blue-500 hover:underline transition ease-in-out duration-150"
                >
                    Panduan
                </Link>
        </div>
    )
}