// CSS
import '@/app/globals.css'

// components
import Navbar from '@/app/components/navbar'
import Footer from '@/app/components/footer'
import Lombacard from '@/app/components/lombacard'

export default function Competition() {
    return(
        <>
            <Navbar/>
            <section className="my-20 text-center">
                <h2 className="text-5xl sm:text-7xl font-semibold">Competition Board</h2>
                <p></p>
                <div>
                    <Lombacard alamat="https://docs.google.com/forms/d/e/1FAIpQLSdvRlMEiJT-gmjHSJMKWdttdGJ5a5vTKwlGBxX74cPNTH8b0Q/viewform?pli=1" image="https://images.unsplash.com/photo-1639656333164-d67ca531e632?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" heading="Mobile Legends" caption="Ready for some action? Join us in Mobile Legends now!" url="https://google,com"/>
                    <Lombacard image="https://images.unsplash.com/photo-1598802214267-6a4fdbeaaaee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" heading="Volleyball" caption="Let’s play volleyball! It’s fun and exciting. Join us!" url="https://google,com"/>
                    <Lombacard image="https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" heading="Basketball" caption="Don’t miss this chance. Come and play basketball with us!" url="https://google,com"/>
                </div>
            </section>
            <Footer/>
        </>
    )
    
}