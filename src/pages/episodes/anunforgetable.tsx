import '../../app/globals.css'
import Navbar from '@/app/components/navbar'
import Footer from '@/app/components/footer'

export default function anunforgetable() {
    function test() {
        var video1 = document.getElementById('video1');
        var video2 = document.getElementById('video2');
        video1?.addEventListener("timeupdate", MyFunction);
        function MyFunction() {
            if(video1 instanceof HTMLVideoElement) {
                if(video1.currentTime == 5){
                    console.log('Hello');
                }
            }
        }
    }

    function opsiB() {
        var video1 = document.getElementById('video1');
        var video2 = document.getElementById('video2');
        video1?.classList.add("-z-50");
        video2?.classList.remove("-z-50");
        if(video2 instanceof HTMLVideoElement) {
            video2.play();    
        }
        document.getElementById("opsi")?.classList.add("hidden");
    }
    
    return(
        <section>
            <Navbar/>
            <video autoPlay controls id="video1" className='top-0 left-0 absolute w-screen h-screen'>
                <source src='/videos/beach.mp4' type='video/mp4'/>
            </video>
            <video className="-z-50 top-0 left-0 absolute w-screen h-screen" id="video2" >
                <source src='/videos/header.mp4' type='video/mp4'/>
            </video>
            <div id="opsi" className="p-4 backdrop-blur-sm absolute right-10 bottom-10 rounded-sm">
                <p>Lorem ipsum dolor sit amet</p>
                <button className="hover:scale-110 hover:border-white hover:border p-1 transition-all duration-300 ease-in-out rounded-sm">Opsi A</button><br></br>
                <button onClick={opsiB} className="hover:scale-110 hover:border-white hover:border p-1 transition-all duration-300 ease-in-out rounded-sm">Opsi B</button>
            </div>
            <Footer/>
        </section>
    )
}