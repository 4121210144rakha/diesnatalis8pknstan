import Link from "next/link";

const Talkshow = () => {
    return(
        <div className="flex items-center justify-center h-screen flex-col">
            <Link href={"https://docs.google.com/spreadsheets/d/1StZ-xF16g-yV1TGw1gQZWv58Rw9SA-k0RpJLTMWeCxA/edit#gid=0"} target="_blank" rel="noopener noreferrer" className="flex bg-white text-black font-semibold hover:scale-105 duration-150 ease-in-out transition rounded-lg m-4 p-2">Internal PKN STAN</Link>
            <Link href={"https://docs.google.com/spreadsheets/d/1CF2_Xr8GQ0cMZOPPefGD8tl5QPWCXjiZMx6gmnhVEpg/edit#gid=0"} target="_blank" rel="noopener noreferrer" className="flex bg-white text-black font-semibold hover:scale-105 duration-150 ease-in-out transition rounded-lg m-4 p-2">Eksternal (Umum)</Link>
        </div>
    );
}

export default Talkshow;