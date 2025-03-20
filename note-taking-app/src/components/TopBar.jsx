import { CiSettings } from "react-icons/ci";

export default function TopBar(){
    return(
        <div className="border-2 col-span-5">
        <h2>All Notes</h2>
        <div>
            <input placeholder="Search by title, content or tags..."></input>
            <CiSettings />
        </div>
        </div>
    )
}