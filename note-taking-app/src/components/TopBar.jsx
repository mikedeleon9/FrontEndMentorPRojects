import { CiSettings } from "react-icons/ci";

export default function TopBar(){
    return(
        <div className="border-b-1 col-span-6 flex justify-between items-center px-8 ">
        <h2 className="text-xl font-bold">All Notes</h2>
        <div className="flex items-center gap-6">
            <input className="border-1 rounded-md p-1" placeholder="Search by title, content or tags..."></input>
            <CiSettings />
        </div>
        </div>
    )
}