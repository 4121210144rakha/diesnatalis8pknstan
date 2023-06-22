"use client"
export default function Handbook(props:any) {
    return(
        <dialog id={props.type} className="absolute top-0 left-0 mt-28 bg-inherit p-0 z-50" open>
            <div className="flex flex-col ">
                <button onClick={()=>{
                    document.getElementById(props.type)?.classList.add("hidden");
                }}
                className="flex bg-blue-500">
                    Close
                </button>
                <iframe src={props.alamat} allow="autoplay" className=" w-screen h-screen"></iframe>
            </div>
        </dialog>
    )
}