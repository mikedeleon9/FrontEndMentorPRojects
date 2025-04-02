import Button from "./Button";
import BookmarkIcon from "../images/icon-bookmark.svg";
import masterLogo from "../images/logo-mastercraft.svg"
import { useState } from "react";

export default function BambooComponent({openModal}){
    const [bookmarked, setBookmarked] = useState(false);

    function handleBookmark(){
        bookmarked ? setBookmarked(false) : setBookmarked(true);
    }
    return(
        <div className="rounded-lg p-12 h-full relative bg-white flex flex-col gap-8 shadow-lg">
            <div className="flex flex-col items-center gap-4">
                <h2 className="font-bold text-2xl">Mastercraft Bamboo Monitor Riser</h2>
                <p className="text-DarkGray">A beautiful & handcrafted monitor stand to reduce neck & eye strain.</p>
            </div>
            <div className="flex justify-between">
                <Button onClick={openModal} content={"Back this project"}/>
                    
                        <button onClick={handleBookmark} className={`relative bg-gray-100 cursor-pointer hover:opacity-85 rounded-full  pl-20 pr-5 py-4 ${bookmarked ? "text-ModerateCyan" : "text-DarkGray" } font-medium `}><span className="">{bookmarked ? "Bookmarked" : "Bookmark"}</span>
                           
                            <svg className="absolute left-0 top-0 " width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill={bookmarked ? "#3cb4ac" : "#2F2F2F"} cx="28" cy="28" r="28"/><path fill="#eee" d="M23 19v18l5-5.058L33 37V19z"/></g></svg>
                        </button>
                        
                   
            </div>
            <img className="mainLogo absolute top-[-10%] inset-x-0 mx-auto " src={masterLogo} alt="master-logo" />
        </div>
    )
}