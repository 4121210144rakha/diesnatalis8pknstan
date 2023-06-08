import '../../app/globals.css'
import Image from 'next/image'
import Navbar from '@/app/components/navbar'
export default function opentalent() {
    return(
        <section className="flex flex-row h-screen bg-cover justify-center items-center " style={{backgroundImage:`url('https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')`}}>
            <Navbar/>
            <div className="backdrop-blur-sm flex flex-row">
                <Image
                    src={"https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"}
                    // placeholder="blur"
                    width={600}
                    height={800}
                    alt="gambar"
                    className="object-cover hidden sm:block"
                />
                <form action={""} method="POST" className="justify-start items-center sm:ml-4">
                    <h1 className="text-center text-3xl"><strong>OPEN TALENT</strong></h1>
                    <div id="page1" className="">
                        <p>Kategori peserta</p>
                        <div className="flex flex-row justify-evenly">
                            <div className="flex flex-col">
                                <label htmlFor="pesertaMahasiswa">Mahasiswa</label>
                                <input id="pesertaMahasiswa" name="kategoriPeserta" required type="radio" value={"Mahasiswa"} className=""/>
                            </div>
                            <div className="flex flex-col">
                            <label htmlFor="pesertaNonMahasiswa">Civitas Akademika selain Mahasiswa</label>
                                <input id="pesertaNonMahasiswa" name="kategoriPeserta" required type="radio" value={"Civitas selain mahasiswa"} className=""/>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="pesertaAlumni">Alumni</label>
                                <input id="pesertaAlumni" name="kategoriPeserta" type="radio" required value={"Alumni"} className=""/>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div id="page2" className="">
                        <label htmlFor="email">Email</label><br></br>
                        <input id="email" name="email" type="email" required className=""/><br></br>
                        <label htmlFor="name">Nama lengkap</label><br></br>
                        <input id="name" name="name" type="text" className=""/><br></br>
                        
                        <label htmlFor="prodi">Program studi</label><br></br>
                        <div className="flex flex-row">
                            <input id="prodi" name="prodi" type="radio" className=""/><br></br>
                            <input id="prodi" name="prodi" type="radio" className=""/><br></br>
                            <input id="prodi" name="prodi" type="radio" className=""/><br></br>
                        </div>
                        
                        <label htmlFor="nomorWA">Nomor WhatsApp</label><br></br>
                        <input id="nomorWA" name="nomorWA" type="number" className=""/><br></br>
                    </div>

                    <div id="page3" className="">
                        <label htmlFor="prodi">Keahlian</label><br></br>
                        <div className="flex flex-row justify-evenly">
                            <div className="hover:scale-105 transition-all  ease-in-out duration-300 h-96 w-60 bg-cover" style={{backgroundImage:`url('https://plus.unsplash.com/premium_photo-1681182426623-f5f506212cb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80')`}}>
                                
                                <input id="keahlianBernyanyi" name="keahlian" type="radio" value={"bernanyi"} className=""/>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="rounded rounded-sm bg-cyan-500 hover:bg-cyan-700 transition-all duration-300 ease-in-out px-4 py-2"><b>Kirim</b></button>
                </form>
                
            </div>
        </section>
    )
}