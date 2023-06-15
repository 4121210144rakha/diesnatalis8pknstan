import Image from "next/image"
import Link from "next/link"

export default function episodecard(props: any) {
    return(
        <Link href={{
            pathname:"episodes/[id]",
            query: {
                id: props.alamat,
                title: props.title
            }
        }} 
        as={`episodes/${props.alamat}`}
        className="hover:scale-105 sm:w-96 pb-10 my-8 col-auto rounded-sm ring-transparent transition ring-1 duration-300 ease-in-out hover:ring-gray-400">
            <Image
                src={props.src}
                // placeholder="blur"
                width={1000}
                height={1000}
                alt="gambar"
                loading="lazy"
            />
            <p className="pt-8"><small>{props.date}</small></p>
            <h3 className="text-2xl pt-4 pb-10"><strong>{props.heading}</strong></h3>
            <p className="px-4">{props.caption}</p>
        </Link>
    )
}