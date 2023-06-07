import Link from "next/link"

export default function footer(){
    return(
        <footer className="flex sm:flex-row flex-col sm:justify-center items-center py-4">
            <p className="pr-4">© 2017 THE GREAT OUTDOORS. All rights reserved &nbsp;|</p>
            <div className="grid sm:grid-cols-4">
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
        </footer>
    )
}