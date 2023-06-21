import Link from "next/link"
import '../../app/globals.css'

export default function Footer(){
    return(
        <footer className="bg-inherit w-screen flex sm:items-center justify-center py-4 flex-col sm:flex-row">
            <p className="px-4">© 2023 Dies Natalis 8 PKN STAN. All rights reserved &nbsp;|</p>
            <div className="">
                <div className="px-4 flex flex-col sm:flex-row">
                    <Link href="#" className="sm:pl-4 py-4">
                        ABOUT
                    </Link>

                    <Link href="#" className="sm:pl-4 py-4">
                        EVENTS
                    </Link>

                    <Link href="#" className="sm:pl-4 py-4">
                        COMPETITION
                    </Link>

                    <Link href="#" className="sm:pl-4 py-4">
                        HANDBOOK
                    </Link>

                    <Link href="#" className="sm:pl-4 py-4">
                        CONTACT
                    </Link>
                </div>
            </div>
        </footer>
    )
}