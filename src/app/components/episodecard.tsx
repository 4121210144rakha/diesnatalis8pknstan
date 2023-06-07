import Image from "next/image"

export default function episodecard(props: any) {
    return(
        <div className="hover:scale-105 sm:w-3/12 pb-10 my-8 col-auto rounded-sm ring-transparent transition ring-1 duration-300 ease-in-out hover:ring-gray-400">
            <Image
                src={props.src}
                // placeholder="blur"
                width={1000}
                height={1000}
                alt="gambar"
            />
            <p className="pt-8"><small>{props.date}</small></p>
            <h3 className="text-2xl pt-4 pb-10"><strong>{props.title}</strong></h3>
            <p>{props.caption}</p>
        </div>
    )
}