// components
import Navbar from "@/app/components/navbar"
import Footer from "@/app/components/footer"
import CardLocked from "@/app/components/cardlocked"
// import Card from "@/app/components/cards"

export default function Events() {
    return(
        <>
            <Navbar/>
            <section className="my-20 text-center">
                <h2 className=" text-5xl">Events</h2>
                <div className="flex sm:flex-row flex-col sm:justify-evenly justify-center items-center">
                    <CardLocked heading="Bakti Sosial" place="KAMPUS" url="https://images.unsplash.com/photo-1644726270363-e746b37b482b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80"/>
                    <CardLocked heading="Donor Darah" place="GEDUNG G" url="https://images.unsplash.com/photo-1669533035765-43cd173ca448?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"/>
                    <CardLocked heading="Bakti Kampus" place="KAMPUS" url="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=685&q=80"/>
                </div>
                <div className="flex sm:flex-row flex-col sm:justify-evenly justify-center items-center">
                    <CardLocked heading="Opening Ceremony" place="GEDUNG G" url="https://images.unsplash.com/photo-1565035010268-a3816f98589a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"/>
                    <CardLocked heading="Workshop ESG" place="GEDUNG G" url="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"/>
                    <CardLocked heading="Seminar Internasional" place="ZOOM" url="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"/>
                </div>
                <div className="flex sm:flex-row flex-col sm:justify-evenly justify-center items-center">
                    <CardLocked heading="Special Event" place="GEDUNG G" url="https://images.unsplash.com/photo-1603910234616-3b5f4a6be2b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"/>
                    <CardLocked heading="Talkshow" place="GEDUNG G" url="https://plus.unsplash.com/premium_photo-1679079456783-5d862f755557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"/>
                    <CardLocked heading="Sidang Senat" place="GEDUNG G" url="https://plus.unsplash.com/premium_photo-1661856221850-8d6cc299049c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"/>
                </div>
                <div className="flex sm:flex-row flex-col sm:justify-evenly justify-center items-center">
                    <CardLocked heading="Acara Puncak" place="GEDUNG G" url="https://images.unsplash.com/photo-1573055592760-a1427683e07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80"/>
                    <CardLocked heading="Closing Ceremony" place="GEDUNG G" url="https://images.unsplash.com/photo-1576328077645-2dd68934d2b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80"/>
                </div>
            </section>
            <Footer/>
        </>
    )
}