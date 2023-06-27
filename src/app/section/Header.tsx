import '@/app/globals.css'
import Image from 'next/image';
import Diesnat from '../../../public/image/Tipografi-DN8.webp'
export default function Header() {
    return(
        <section className="h-screen mask-image-to-bottom">
            <Image className="mask-image-to-bottom object-cover fixed h-screen w-screen -z-50 top-0 left-0 right-0 bottom-0" src={"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"} alt='background' height={1000} width={1000}/>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Image src={Diesnat} priority width={500} height={500} alt='Logo Diesnat 8' className='flex w-full xl:px-96'/>
            </div>  
        </section>
    )
}