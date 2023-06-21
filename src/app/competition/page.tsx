// components
import Lombacard from '@/app/components/lombacard'

export default function Competition() {
    return(
        <>
            <section className="my-20 text-center">
                <h2 className="text-5xl sm:text-7xl font-semibold" style={{fontFamily:"Crima"}}>Competition Board</h2>
                <p className="py-8 mx-8">Dive into a diverse array of captivating competitions and seize the chance to claim exhilarating victories and amazing prizes!</p>
                <h3 className="text-3xl my-4 font-semibold">Sport</h3>
                <div className="flex sm:flex-row flex-col sm:justify-evenly justify-center items-center mb-10">
                    <Lombacard alamat="https://docs.google.com/forms/d/e/1FAIpQLSdmFeDcHHTjnIHGicA1OSyNeJ60ut8N3HcGzTtCTGL-kIn3SA/viewform" image="https://images.unsplash.com/photo-1639656333164-d67ca531e632?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" heading="Mobile Legends" caption="Unleash your legend! Join the battle." wa="http://wa.me/6282120421260" check="#"/>
                    <Lombacard alamat="https://docs.google.com/forms/d/e/1FAIpQLSeunzKs_5vKcw_SOhBZSOc5YReH781neMmVe39m4qExGSJXRw/viewform" image="https://images.unsplash.com/photo-1626225015999-2e53f6aaa008?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" heading="Badminton" caption="Smash your way to victory!" wa="http://wa.me/6282120421260" check="#"/>
                </div>
                <h3 className="text-3xl my-4 font-semibold">Academic</h3>
                <div className="flex sm:flex-row flex-col sm:justify-evenly justify-center items-center mb-10">
                    <Lombacard alamat="https://docs.google.com/forms/d/e/1FAIpQLSes435dEVii_SVz2TuoddeF5shcAmAcYUlp1x58egcSc5FDLg/viewform" image="https://images.unsplash.com/photo-1623278589094-6741f418d3bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=709&q=80" heading="STAN MUN" caption="Speak up. Make a difference." wa="http://wa.me/6282335195569" check="#"/>
                    <Lombacard alamat="https://docs.google.com/forms/d/e/1FAIpQLSe9QMaB58hL844a6_l_oCgOIrQdKoKUQsHggwqzqYGsOph7Pw/viewform" image="https://images.unsplash.com/photo-1598802214267-6a4fdbeaaaee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" heading="Try to Survive" caption="Test your knowledge" wa="http://wa.me/6282335195569" check="#"/>
                    <Lombacard alamat ="https://docs.google.com/forms/d/e/1FAIpQLSdVZ9j76GM88gKbWf1fzqytoe1tPGRZqMohMtEYdi7GF4xuhw/viewform" image="https://images.unsplash.com/photo-1540634759006-203f597e1a34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=791&q=80" heading="Show Your Abilities (FGDxEssay)" caption="Show your idea." wa="http://wa.me/6282335195569" check="#"/>
                </div>
                <h3 className="text-3xl my-4 font-semibold">Art</h3>
                <div className="flex sm:flex-row flex-col sm:justify-evenly justify-center items-center mb-10">
                    <Lombacard alamat="https://docs.google.com/forms/d/e/1FAIpQLSc3b2mTNywf_v7q9azR68J89RBbmiKImeUX4FzX6VqdWYWQ1A/viewform" image="https://images.unsplash.com/photo-1581349485608-9469926a8e5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" heading="STAN Chef" caption="Ready, set, cook!" wa="http://wa.me/6281235535951" check="#"/>
                    <Lombacard alamat="https://docs.google.com/forms/d/e/1FAIpQLSe_OmmvWzX3EGIDfZKG929M83lG6rwVsKJKH9LHvI8t6h4yMQ/viewform" image="https://plus.unsplash.com/premium_photo-1681503973682-29cec46571b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" heading="STAN Band" caption="Rock the stage!" wa="http://wa.me/6281235535951" check="#"/>
                    <Lombacard alamat="https://docs.google.com/forms/d/e/1FAIpQLSe6uYqw9Hy3HuDKMc24tyZ7cDhe37YCkF5W3_r5jfWy42wKPQ/viewform" image="https://images.unsplash.com/photo-1584661156681-540e80a161d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" heading="PoP (Painting on Polywood)" caption="Express your creativity!" wa="http://wa.me/6281235535951" check="#"/>
                </div>
            </section>
        </>
    )
    
}