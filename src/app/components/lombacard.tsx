import '../globals.css'
import Link from "next/link"
export default function lombacard(props:any) {
    return(
        <div className="relative w-60 h-96 mx-4 rounded-sm group bg-cover bg-center group hover:scale-105 transition duration-300 ease-in-out" style={{backgroundImage:`url("https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80")`}}>
            <div className="absolute flex flex-col bottom-0 w-full">
                <div className="py-2">
                    <h4 className="text-center text-lg font-semibold">{props.heading}</h4>
                    <p className=" text-center">{props.description}</p>
                </div>
                <div className="hidden group-hover:block">
                    <div className="flex flex-col pt-16 group-hover:bg-black group-hover:bg-opacity-50 mask-image-to-top pl-2">
                        <Link href={{
                            pathname:"[id]",
                            query: {
                                id: props.alamat,
                            }
                        }}
                        as={`${props.alamat}`}
                        className="bg-white text-black px-2 py-1 rounded-sm hover:scale-105 w-fit h-fit bottom-0 transition duration-150 ease-linear"
                        >
                            <b>Daftar</b>
                        </Link>
                        <Link href="https://google.com" className="hover:scale-105 text-blue-500 hover:underline transition ease-in-out duration-150 start-0 w-fit">Panduan</Link>
                        <Link href="https://google.com" className="hover:scale-105 text-blue-500 hover:underline transition ease-in-out duration-150 start-0 w-fit">Sudah mendaftar?</Link>
                        <Link href="https://google.com" className="hover:scale-105 text-blue-500 hover:underline transition ease-in-out duration-150 start-0 w-fit">Butuh pertanyaan?</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}