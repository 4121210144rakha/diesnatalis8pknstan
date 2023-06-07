import Link from "next/link"

export default function card(props: any){
    return(
        <Link href={{
                pathname:"formulir/[id]",
                query: {
                    id: props.alamat,
                    title: props.title
                }
            }} 
            as={`formulir/${props.alamat}`}
            className="my-8 hover:scale-105 transition-all duration-300 ease-in-out mx-4 sm:w-80 justify-center text-center bg-cover"  style={{backgroundImage:`url("`+props.src+`")`, height:"28rem"}}>
            <div className="bottom-0 pb-10 hover:backdrop-blur-sm items-center flex hover:justify-center justify-end flex-col h-full transition duration-300 ease-in-out" >
                <h3 className="text-lg"><b>{props.heading}</b></h3>
                <p>{props.paragraph}</p>
            </div>
        </Link>
    )
}
