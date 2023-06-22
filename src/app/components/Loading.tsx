import React from "react"
import '../globals.css'
import Image from "next/image"
export default function Loading() {
    return(
        <React.Fragment>
            <div className="bg-inherit w-screen h-screen z-50">
                <Image src={"/loading.webp"} priority alt="loading" width={30} height={30} className="animate-spin  top-1/2 left-1/2 absolute"/>
            </div>
        </React.Fragment>
    )
}