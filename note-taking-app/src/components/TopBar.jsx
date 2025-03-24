import { CiSettings } from "react-icons/ci";

export default function TopBar(){
    return(
        <div className="shadow-sm col-span-5 flex justify-between items-center px-8 ">
        <h2 className="text-2xl font-bold">All Notes</h2>
        <div className="flex items-center gap-6">
            <input className="border-1 border-gray-300 rounded-md p-2 text-xs" placeholder="Search by title, content or tags..."></input>
            <CiSettings className="hover:rotate-45 cursor-pointer" size={25} color="gray" />
        </div>
        </div>
    )
}