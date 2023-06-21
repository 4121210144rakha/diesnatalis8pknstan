import Link from 'next/link'

// components
import Lombacard from '../components/lombacard'

export default function Competition() {
    return(
        <section id='#Competition' className="my-16">
            <h2 className="text-5xl sm:text-7xl" style={{fontFamily:"Crima"}}><strong>Competition Board</strong></h2>
            <p className="py-8 mx-8"> Dive into a diverse array of captivating competitions and seize the chance to claim exhilarating victories and amazing prizes!</p>
            <div className="flex flex-col lg:flex-row justify-center sm:justify-evenly items-center">
                <Lombacard alamat="https://docs.google.com/forms/d/e/1FAIpQLSdmFeDcHHTjnIHGicA1OSyNeJ60ut8N3HcGzTtCTGL-kIn3SA/viewform" image="https://images.unsplash.com/photo-1639656333164-d67ca531e632?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" heading="Mobile Legends" caption="Unleash your legend! Join the battle." wa="http://wa.me/6282120421260" check="#"/>
                <Lombacard alamat="https://docs.google.com/forms/d/e/1FAIpQLSes435dEVii_SVz2TuoddeF5shcAmAcYUlp1x58egcSc5FDLg/viewform" image="https://images.unsplash.com/photo-1623278589094-6741f418d3bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=709&q=80" heading="STAN MUN" caption="Speak up. Make a difference." wa="http://wa.me/6282335195569" check="#"/>
                <Lombacard alamat="https://docs.google.com/forms/d/e/1FAIpQLSe6uYqw9Hy3HuDKMc24tyZ7cDhe37YCkF5W3_r5jfWy42wKPQ/viewform" image="https://images.unsplash.com/photo-1584661156681-540e80a161d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" heading="PoP (Painting on Polywood)" caption="Express your creativity!" wa="http://wa.me/6281235535951" check="#"/>
            </div>
            <div className="flex items-center justify-center mt-6">
                <Link href={"/competition"} className="hover:underline text-blue-500 w-fit">MORE COMPETITION &gt;</Link>
            </div>
        </section>
    )
}