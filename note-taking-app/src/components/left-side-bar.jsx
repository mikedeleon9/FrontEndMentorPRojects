import { IoHomeOutline, IoDownloadOutline  } from "react-icons/io5";
import TagComponent from "./TagComponent";

export default function LeftSideBar(){
    return(
        <div className="border-r-1 h-screen px-4 row-span-10">
            <h1 className="text-2xl">Notes</h1>
            <div className=" py-4">
                <div className="px-4 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <IoHomeOutline />
                        <p>All Notes</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <IoDownloadOutline />
                        <p>Archived Notes</p>
                    </div>
                    
                </div>
                
            </div>

            <div className="px-4 flex flex-col gap-2 py-2">
                <p>Tags</p>
               <TagComponent title="Cooking" />
               <TagComponent title="Dev" />
               <TagComponent title="Fitness" />
               <TagComponent title="Health" />
               <TagComponent title="Personal" />
               <TagComponent title="React" />
               <TagComponent title="Recipes" />
               <TagComponent title="Shopping" />
               <TagComponent title="Travel" />
               <TagComponent title="TypeScript" />
            </div>
        </div>
    )
}