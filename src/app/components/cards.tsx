import Link from "next/link"

export default function Card(props: any){
    return(
        <Link href={{
                pathname:"[id]",
                query: {
                    id: props.alamat
                }
            }} 
            as={`${props.alamat}`}
            className="mt-8 hover:scale-105 hover:border hover:border-gray-300 transition-all duration-300 ease-in-out md:mx-2 w-72 justify-center text-center bg-cover bg-center rounded-xl"  style={{backgroundImage:`url("`+props.url+`")`, height:"28rem"}}>
            <div className="group bottom-0 pb-10 hover:backdrop-blur-sm items-center flex hover:justify-center justify-end flex-col h-full transition duration-300 ease-in-out" >
                <h3 className="text-lg"><b>{props.heading}</b></h3>
                <p>{props.place}</p>
            </div>
        </Link>
    )
}
