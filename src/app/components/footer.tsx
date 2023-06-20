import Link from "next/link"
import '../../app/globals.css'

export default function Footer(){
    return(
        <footer className="bg-inherit w-screen static flex items-end sm:items-center justify-center py-4 flex-col sm:flex-row mask-image-to-top">
            <p className="px-4">© 2023 Dies Natalis 8 PKN STAN. All rights reserved &nbsp;|</p>
            <div className="hidden sm:block ">
                <div className="flex flex-col sm:flex-row">
                    <Link href="#" className="sm:pl-4 py-4">
                        ABOUT
                    </Link>

                    <Link href="#" className="sm:pl-4 py-4">
                        EXPLORE
                    </Link>

                    <Link href="#" className="sm:pl-4 py-4">
                        JOURNAL
                    </Link>

                    <Link href="#" className="sm:pl-4 py-4">
                        PANDUAN
                    </Link>
                </div>
            </div>
        </footer>
    )
}