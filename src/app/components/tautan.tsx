import Link from "next/link";

const Tautan = (props:any) => {
    return(
        <div className="cursor-pointer group" onClick={()=>{}} style={{ cursor: 'pointer' }}>
            <Link href={`${props.alamat}`} rel="noopener noreferrer" className=" group-hover:-translate-y-56 transition duration-500 ease-in-out cursor-pointer hover:underline text-blue-500 w-full p-2"><p>{props.text} &gt;</p></Link>
        </div>
    )
}

export default Tautan;