import React from "react"
import '../globals.css'
export default function Loading() {
    return(
        <React.Fragment>
            <div className="bg-black w-screen h-screen">
                <video className="sm:w-screen h-screen object-cover" autoPlay>
                    <source src={"/videos/loading.mp4"} type="video/mp4"/>
                </video>
            </div>
        </React.Fragment>
    )
}