import Link from 'next/link'

// components
import Lombacard from '../components/lombacard'

export default function Competition() {
    return(
        <section className="my-16">
            <h2 className="text-5xl sm:text-7xl" style={{fontFamily:"Crima"}}><strong>Competition Board</strong></h2>
            <p className="py-8 mx-8">Are you looking for a way to challenge yourself and showcase your skills? Do you want to win amazing prizes and recognition from your peers? If yes, then you should join our Competition Board!</p>
            <div className="flex flex-col sm:flex-row justify-center sm:justify-evenly items-center">
                <Lombacard alamat="https://docs.google.com/forms/d/e/1FAIpQLSdvRlMEiJT-gmjHSJMKWdttdGJ5a5vTKwlGBxX74cPNTH8b0Q/viewform?pli=1" image="https://images.unsplash.com/photo-1639656333164-d67ca531e632?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" heading="Mobile Legends 5v5" caption="Ready for some action? Join us in Mobile Legends now!" url="https://google,com"/>
                <Lombacard alamat="https://docs.google.com/forms/d/e/1FAIpQLSfVIYJNVv7HwVXlD06HHP5D9tmed0VH7u9972K1cDeCMZmF4Q/viewform" image="https://images.unsplash.com/photo-1598802214267-6a4fdbeaaaee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" heading="Volleyball" caption="Let’s play volleyball! It’s fun and exciting. Join us!" url="https://google,com"/>
                <Lombacard alamat="https://docs.google.com/forms/d/e/1FAIpQLSdOF_flAVH01_OSVCTXf61EykyhtGxYS5unp7VXIGuj3ugLMA/viewform" image="https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" heading="Basketball 3v3" caption="Don’t miss this chance. Come and play basketball with us!" url="https://google,com"/>
            </div>
            <div className="flex items-center justify-center mt-6">
                <Link href={"/competition"} className="hover:underline text-blue-500 hover:scale-105 transition duration-150 ease-in-out w-fit">MORE COMPETITION &gt;</Link>
            </div>
        </section>
    )
}