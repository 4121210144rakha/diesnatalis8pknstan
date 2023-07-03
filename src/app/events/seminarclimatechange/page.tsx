import Link from "next/link";
export default function ClimateChange() {
    return(
        <div className="flex items-center justify-center h-screen flex-col">
            <Link href={"https://docs.google.com/spreadsheets/d/1BFSESStJiKjrjK_JxjIRAeJM_V3z8Fe-xKjojLRSTEY/edit#gid=0"} target="_blank" rel="noopener noreferrer" className="flex bg-white text-black font-semibold hover:scale-105 duration-150 ease-in-out transition rounded-lg m-4 p-2">Internal PKN STAN</Link>
            <Link href={"https://docs.google.com/spreadsheets/d/1WU5ZotmgOu2SI_MDhw_aYexIrk6uxMkdcIY1MjNnab0/edit#gid=0"} target="_blank" rel="noopener noreferrer" className="flex bg-white text-black font-semibold hover:scale-105 duration-150 ease-in-out transition rounded-lg m-4 p-2">Eksternal (Umum)</Link>
        </div>
    );
}