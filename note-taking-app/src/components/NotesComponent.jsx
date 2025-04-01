import { useState } from "react"
import Note from "./Note";
import NotesControl from "./NotesControl";


export default function NotesComponent({notes, addNote, selectNote, selectedNote}){

    return (
        <div className="shadow-sm row-span-10  gap-4 w-1/2 flex flex-col px-4 py-6 ">
            <button onClick={addNote} className="bg-blue-600 hover:bg-blue-700 shadow-md text-white text-xs text-center p-3 rounded-md cursor-pointer">+ Create New Note</button>
            <div className="space-y-4">
            {notes.map((note) => (
        <div key={note.id} className="flex justify-between items-center gap-4">
        <Note  id={note.id} onSelect={selectNote} selectedNote={selectedNote} />
        
      </div>
          
        ))}
      </div>
        </div>
        
    )
}