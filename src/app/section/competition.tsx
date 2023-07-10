// components
import Lombacard from '../components/card'
import Tautan from '../components/tautan'

export default function Competition() {
    return(
        <section id='Competition' className="my-16">
            <h2 className="text-5xl sm:text-7xl" style={{fontFamily:"Crima"}}><strong>Competition Board</strong></h2>
            <p className="py-8 mx-8"> Dive into a diverse array of captivating competitions and seize the chance to claim exhilarating victories and amazing prizes!</p>
            <div className="flex flex-col lg:flex-row justify-center sm:justify-evenly items-center">
                <Lombacard alamat="https://docs.google.com/forms/d/e/1FAIpQLSdcSt5GPdeLL5T8lAn8fjyHEz9VeAzniAl4iLL4KiK22ttVZg/viewform" image="https://images.unsplash.com/photo-1639656333164-d67ca531e632?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" heading="Mobile Legends" caption="Unleash your legend! Join the battle." wa="http://wa.me/6282120421260" check="/competition/MobileLegends" panduan="https://drive.google.com/file/d/1B0Fqz6VrozenYYMkzbXxP71BS89U4hjZ/view" text="Play Now!"/>
                <Lombacard alamat="https://docs.google.com/forms/d/e/1FAIpQLSe9QMaB58hL844a6_l_oCgOIrQdKoKUQsHggwqzqYGsOph7Pw/viewform" image="https://images.unsplash.com/photo-1613951085587-cfe5d0a6cffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=634&q=80" heading="Try to Survive" caption="No escape. Only survival." wa="http://wa.me/6282335195569" check="https://docs.google.com/spreadsheets/d/1UktQI3I1nC4M9LERLGFXi6kRK6tyVa-Mqd2bULx4Vdc/edit#gid=0" panduan="https://drive.google.com/file/d/1aa2aJOYaWd3_jzG9ntTX3bCAQs2sDqKe/preview" text="Play Now!"/>
                <Lombacard alamat="https://docs.google.com/forms/d/e/1FAIpQLSe6uYqw9Hy3HuDKMc24tyZ7cDhe37YCkF5W3_r5jfWy42wKPQ/viewform" image="https://images.unsplash.com/photo-1584661156681-540e80a161d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" heading="PoP (Painting on Polywood)" caption="Express your creativity!" wa="http://wa.me/6281235535951" check="https://docs.google.com/spreadsheets/d/1HfgXshLuw2oMlmmpMvsfmqPsQU0cqE_sGeVqoLtEN0s/edit?usp=sharing" panduan="https://drive.google.com/file/d/1bcZkHNbn9gBtx1UeV56NZSkzY4KkqkMI/preview" text="Play Now!"/>
            </div>
            <Tautan alamat="https://diesnatpknstan.id/competition" text="MORE COMPETITION"/>
        </section>
    )
}