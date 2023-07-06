import Link from "next/link"
import '../../app/globals.css'

export default function Footer(){
    return(
        <footer id="Footer" className="bg-inherit w-screen flex sm:items-center justify-center py-4 flex-col">
            <div className="px-4 flex flex-col justify-center items-center lg:flex-row-reverse">
                <Link href="#" className="sm:pl-4 py-4 flex w-fit">
                    CONTACT
                </Link>

                <Link href="https://drive.google.com/drive/folders/1-N8lwzgmMlSbOiUeiJZvWtbofr_6U_lH" className="sm:pl-4 py-4 flex w-fit">
                    HANDBOOK
                </Link>
                <Link href="/#Competition" className="sm:pl-4 py-4 flex w-fit">
                    COMPETITION
                </Link>
                <Link href="/#Events" className="sm:pl-4 py-4 flex w-fit">
                    EVENTS
                </Link>
                <Link href="#" className="sm:pl-4 py-4 flex w-fit">
                    ABOUT
                </Link>
                <p className="px-4 text-center">© 2023 Dies Natalis 8 PKN STAN. All rights reserved &nbsp;|</p> 
            </div>
        </footer>
    )
}