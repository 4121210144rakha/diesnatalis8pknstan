import Link from "next/link"

export default function card(props: any){
    return(
        <Link href={{
                pathname:"[id]",
                query: {
                    id: props.alamat
                }
            }} 
            as={`${props.alamat}`}
            className="my-8 hover:scale-105 mx-4 w-72 justify-center text-center bg-cover bg-center rounded-sm hover:border hover:border-white  transition-all duration-300 ease-in-out"  style={{backgroundImage:`url("`+props.src+`")`, height:"28rem"}}>
            <div className="group bottom-0 pb-10 hover:backdrop-blur-sm items-center flex hover:justify-center justify-end flex-col h-full transition duration-300 ease-in-out" >
                <h3 className="text-lg"><b>{props.heading}</b></h3>
                <p>{props.paragraph}</p>
            </div>
        </Link>
    )
}
