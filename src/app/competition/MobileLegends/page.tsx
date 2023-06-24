import Link from "next/link"
export default function MobileLegends() {
    return(
        <div className="flex items-center justify-center h-screen flex-col">
            <Link href={"https://docs.google.com/spreadsheets/d/1IRHD3v6IhZy6cJjonA_kY5mSzUPcTzDC-HsL1zaEpF8/edit"} target="_blank" rel="noopener noreferrer" className="flex bg-white text-black font-semibold hover:scale-105 duration-150 ease-in-out transition rounded-lg m-4 p-2">Internal PKN STAN</Link>
            <Link href={"https://docs.google.com/spreadsheets/d/1pyinlXSI0Fl6h_a8mdtEFznr7NV61kkmMlkB-G4kbPM/edit#gid=0"} target="_blank" rel="noopener noreferrer" className="flex bg-white text-black font-semibold hover:scale-105 duration-150 ease-in-out transition rounded-lg m-4 p-2">Eksternal (Umum)</Link>
        </div>
    )
}