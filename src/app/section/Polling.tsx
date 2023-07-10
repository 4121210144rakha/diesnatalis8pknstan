import Link from "next/link";
const Polling = () => {
    return(
        <section id="Pooling" className="py-8">
            <h2 className="text-5xl sm:text-7xl font-semibold pt-10" style={{fontFamily:"Crima"}}><strong>Awarding</strong></h2>
            <p className="py-8">
                The Awarding Night is a momentous event to celebrate the exemplary performance of our peers. You are most welcome to attend.
            </p>

            <Link href={`/awarding`} rel="noopener noreferrer" className="-translate-y-0 hover:-translate-y-0 hover:scale-105 transition duration-500 ease-in-out cursor-pointer hover:underline text-blue-500 w-full p-2"><p>VOTE NOW! &gt;</p></Link>
        </section>
    );
}

export default Polling;