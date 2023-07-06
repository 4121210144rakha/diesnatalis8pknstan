import React from "react"
import '../globals.css'
import Image from "next/image"
export default function Loading() {
    return(
        <React.Fragment>
            <div className="bg-inherit flex items-center justify-center w-screen h-screen z-50">
                <Image src={"/loading.webp"} priority alt="loading" width={30} height={30} className="animate-spin"/>
            </div>
        </React.Fragment>
    )
}