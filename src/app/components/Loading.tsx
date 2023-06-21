import React from "react"
import '../globals.css'
import Image from "next/image"
export default function Loading() {
    return(
        <React.Fragment>
            <div className="bg-black w-screen h-screen z-50">
                <Image src={"/image/loading.png"} alt="loading" width={30} height={30} className="animate-spin  top-1/2 left-1/2 absolute"/>
            </div>
        </React.Fragment>
    )
}