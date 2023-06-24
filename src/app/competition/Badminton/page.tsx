import Link from "next/link";

export default function Badminton() {
    return(
        <div className="flex items-center justify-center h-screen flex-col">
            <Link href={"https://docs.google.com/spreadsheets/d/14CgFqNuXxJPWeSLLOio1aGMxDXp9yIri4rXHY2Tku_I/edit#gid=0"} target="_blank" rel="noopener noreferrer" className="flex bg-white text-black font-semibold hover:scale-105 duration-150 ease-in-out transition rounded-lg m-4 p-2">Internal PKN STAN</Link>
            <Link href={"https://docs.google.com/spreadsheets/d/1KZW3gBCt5E-28N7dB0iK5DL_RrLtLUYBZBOXN8AZu0Y/edit#gid=0"} target="_blank" rel="noopener noreferrer" className="flex bg-white text-black font-semibold hover:scale-105 duration-150 ease-in-out transition rounded-lg m-4 p-2">Eksternal (Umum)</Link>
        </div>
    )
}