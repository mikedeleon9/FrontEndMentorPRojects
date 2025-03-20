import { IoHomeOutline, IoDownloadOutline  } from "react-icons/io5";

export default function LeftSideBar(){
    return(
        <div className="">
            <h1 className="text-4xl">Notes</h1>
            <div className="">
                <div>
                    <div className="flex items-center gap-2">
                        <IoHomeOutline />
                        <p>All Notes</p>
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <IoDownloadOutline />
                        <p>Archived Notes</p>
                    </div>
                </div>
            </div>
        </div>
    )
}