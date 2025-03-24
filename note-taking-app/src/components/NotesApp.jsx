import NotesComponent from "./NotesComponent";
import NoteBody from "./NoteBody";
import { useState } from "react";
import NotesControl from "./NotesControl";

function NotesApp(){

    const [notes, setNotes] = useState([]);
    const [selectedNote, setSelectedNote] = useState(null);

    const addNote = () => {
        const newId = notes.length + 1;
        setNotes((prevNotes) => [...prevNotes, { id: newId }]); // Adds a new note
        setSelectedNote(newId); // Automatically select the new note
      };
    
      const deleteNote = (id) => {
        setNotes((prevNotes) => prevNotes.filter(note => note.id !== id));
    
        // If the deleted note was selected, clear NoteBody
        if (selectedNote === id) {
          setSelectedNote(null);
        }
      };
    

      return (
        <div className=" row-span-10 flex w-full col-span-5">
          <NotesComponent notes={notes} addNote={addNote} selectNote={setSelectedNote} deleteNote={deleteNote} />
          <NoteBody selectedNote={selectedNote} />
          <NotesControl selectedNote={selectedNote}  deleteNote={deleteNote} />
        </div>
      );
}

export default NotesApp;