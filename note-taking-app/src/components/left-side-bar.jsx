import { IoHomeOutline, IoDownloadOutline  } from "react-icons/io5";
import TagComponent from "./TagComponent";

export default function LeftSideBar(){
    return(
        <div className="shadow-xs shadow-[#0B1215]  row-span-10 py-4">
            <h1 className="text-2xl px-4 cursor-pointer" style={{fontFamily:"Lily Script One, system-ui" }}>Notes</h1>
            <div className=" py-4 shadow-sm">
                <div className="px-4 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <IoHomeOutline />
                        <p className="text-sm">All Notes</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <IoDownloadOutline />
                        <p className="text-sm">Archived Notes</p>
                    </div>
                    
                </div>
                
            </div>

            <div className="px-4 flex flex-col gap-4 py-2 ">
                <p className="text-sm text-gray-600">Tags</p>
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