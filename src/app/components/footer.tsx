import Link from "next/link"

export default function footer(){
    return(
        <footer className="h-screen items-end flex mask-image-to-top bg-cover w-screen bg-center"  style={{backgroundImage:`url("/image/footer.png")`}}>
            <div className="bg-black w-screen flex items-end sm:items-center justify-center py-4 flex-col sm:flex-row mask-image-to-top">
                <p className="pr-4">© 2017 THE GREAT OUTDOORS. All rights reserved &nbsp;|</p>
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