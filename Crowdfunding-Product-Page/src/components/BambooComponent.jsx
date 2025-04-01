import Button from "./Button";
import BookmarkIcon from "../images/icon-bookmark.svg";
import masterLogo from "../images/logo-mastercraft.svg"

export default function BambooComponent(){
    return(
        <div className="rounded-lg p-12 h-full relative bg-white flex flex-col gap-8 shadow-lg">
            <div className="flex flex-col items-center gap-4">
                <h2 className="font-bold text-2xl">Mastercraft Bamboo Monitor Riser</h2>
                <p className="text-DarkGray">A beautiful & handcrafted monitor stand to reduce neck & eye strain.</p>
            </div>
            <div className="flex justify-between">
                <Button content={"Back this project"}/>
                    
                        <button className="relative bg-gray-100  rounded-full  pl-20 pr-5 py-4 text-DarkGray font-medium "><span className="">Bookmark</span>
                            <img className="absolute left-0 top-0 " src={BookmarkIcon} alt="bookmark-icon " />
                        </button>
                        
                   
            </div>
            <img className="absolute top-[-10%] left-1/2 transform -translate-x-1/2" src={masterLogo} alt="master-logo" />
        </div>
    )
}