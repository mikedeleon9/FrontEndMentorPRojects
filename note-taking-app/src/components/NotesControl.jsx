import { RiDeleteBin5Line } from "react-icons/ri";


export default function NotesControl({id, deleteNote, selectedNote}){
    return (
        <div className="w-1/3 shadow-md py-4 px-6">
            {selectedNote ? (
 <button className="cursor-pointer border-1 px-6 py-1 w-full rounded-lg text-sm flex items-center gap-2 " onClick={()=> {deleteNote(selectedNote)}}> <RiDeleteBin5Line /> Delete Note</button>
            ) : (
                <p></p>
            )
        }
           
            
        </div>
    )
}
