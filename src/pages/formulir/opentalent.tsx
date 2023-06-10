import '../../app/globals.css'
import Image from 'next/image'
import Navbar from '@/app/components/navbar'
import Link from 'next/link'
export default function opentalent() {
    return(
        <section className="flex flex-row h-screen w-screen bg-cover justify-center items-center bg-center" style={{backgroundImage:`url('https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')`}}>
            <Navbar/>
            <div className="backdrop-blur-md flex flex-row w-screen justify-center sm:w-fit">
                <Image
                    src={"https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"}
                    // placeholder="blur"
                    width={600}
                    height={800}
                    alt="gambar"
                    className="object-cover hidden lg:block"
                />
                <form action="https://script.google.com/macros/s/AKfycbyTsQ6xeWGvjZtMMtn4LM0RLPVJn-eEeCYORLqZSbrKOklcVKc0-pqhxQ8EeRPNQ4Ju/exec" method="POST" className="justify-start items-center sm:mx-4">
                    <h1 className="text-center text-3xl my-10"><strong>OPEN TALENT</strong></h1>
                    <div id="page1" className="">
                        <p className="my-4">Kategori peserta</p>
                        <div className="flex sm:flex-row flex-col w-full bg-black bg-opacity-30">
                            <div>
                                <input id="pesertaMahasiswa" name="peserta" required type="radio" value="Mahasiswa" className="peer hidden"/>
                                <label htmlFor="pesertaMahasiswa" className="block cursor-pointer select-none rounded-sm p-2 text-center hover:scale-105 hover:font-semibold hover:bg-black hover:rounded-sm hover:z-10 peer-checked:bg-black peer-checked:scale-105 peer-checked:text-white peer-checked:font-semibold peer-checked:border-white peer-checked:border transition-all duration-300 ease-in-out">Mahasiswa</label>
                            </div>
                            <div>
                                <input id="pesertaCivitasNonMahasiswa" name="peserta" required type="radio" value="Civitas Akademika non Mahasiswa" className="peer hidden"/>
                                <label htmlFor="pesertaCivitasNonMahasiswa" className="block cursor-pointer select-none rounded-sm p-2 text-center hover:scale-105 hover:font-semibold hover:bg-black hover:rounded-sm hover:z-10 peer-checked:bg-black peer-checked:scale-105 peer-checked:text-white peer-checked:font-semibold peer-checked:border-white peer-checked:border transition-all duration-300 ease-in-out">Civitas Akademika non Mahasiswa</label>
                            </div>
                            <div >
                                <input id="pesertaAlumni" name="peserta" required type="radio" value="Alumni" className="peer hidden"/>
                                <label htmlFor="pesertaAlumni" className="block cursor-pointer select-none rounded-sm p-2 text-center hover:scale-105 hover:font-semibold hover:bg-black hover:rounded-sm hover:z-10 peer-checked:bg-black peer-checked:scale-105 peer-checked:text-white peer-checked:font-semibold peer-checked:border-white peer-checked:border transition-all duration-300 ease-in-out">Alumni</label>
                            </div>
                        </div>
                    </div>
                    
                    <div id="page2" className="">
                        <div className="w-full my-8 relative group">
                            <input type="email" id="email" name="email" required className="w-full bg-transparent px-4 pb-2 border-b text-sm peer border-zinc-400 focus:border-white disabled:bg-transparent outline-none"/>
                            <label htmlFor="email" className="-z-50 transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Email</label>
                        </div>
                        <div className="w-full my-8 relative group">
                            <input type="text" id="name" name="name" required className="w-full bg-transparent px-4 pb-2 border-b text-sm peer border-zinc-400 focus:border-white outline-none"/>
                            <label htmlFor="name" className="-z-50 transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Nama Lengkap</label>
                        </div>
                        
                        <div className="w-full my-8 flex-row flex relative group">
                            <p className="basis-1 mr-1">wa.me/</p>
                            <div className="basis-full">
                                <input type="tel" id="tel" name="tel" required className=" w-full bg-transparent px-4 pb-2 border-b text-sm peer border-zinc-400 focus:border-white outline-none"/>
                                <label htmlFor="tel" className="-z-50 transform transition-all absolute top-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Nomor WhatsApp</label>    
                            </div>
                        </div>
                    </div>
                    <button type="submit" value={"submit"} onClick={() => confirm("Apakah Anda yakin ingin mengumpulkan formulir ini?\nMohon periksa kembali formulir sebelum Anda kumpulkan. Pastikan data yang diisi sesuai dan benar.")} className="text-black rounded-sm bg-white hover:scale-110 transition-all duration-300 ease-in-out px-4 py-2"><b>Kirim</b></button>
                    <br></br>
                    <div className="grid grid-cols-2 w-full my-4">
                        <Link href={"#"} className="hover:underline italic text-blue-400 start-0">Handbook</Link>
                        <Link href={"https://wa.me/6281364451866"} className="hover:underline text-blue-400 justify-end">Butuh pertanyaan?</Link>
                    </div>
                </form>
            </div>
        </section>
    )
}