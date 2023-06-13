import Link from "next/link"
import '../../app/globals.css'

export default function footer(){
    return(
        <footer>
            <div className="bg-black w-screen flex items-end sm:items-center justify-center py-4 flex-col sm:flex-row mask-image-to-top">
                <p className="px-4">© 2023 Dies Natalis 8 PKN STAN. All rights reserved &nbsp;|</p>
                <div className="flex flex-col hidden sm:block sm:flex-row">
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
                        SEARCH
                    </Link>
                </div>
            </div>
        </footer>
    )
}