import NotesComponent from "./NotesComponent";
import NoteBody from "./NoteBody";
import { useState } from "react";
import NotesControl from "./NotesControl";

function NotesApp(){

    const [notes, setNotes] = useState([]);
    const [selectedNote, setSelectedNote] = useState(null);
    const [nextId, setNextId] = useState(1);

    const addNote = () => {
      setNotes((prevNotes) => [...prevNotes, { id: nextId }]); // Adds a new note
      setSelectedNote(nextId); // Automatically select the new note
      setNextId(nextId + 1); // Increment next available ID
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
          <NotesComponent notes={notes} addNote={addNote} selectNote={setSelectedNote} selectedNote={selectedNote} deleteNote={deleteNote} />
          <NoteBody selectedNote={selectedNote} notes={notes} setNotes={setNotes} />
          <NotesControl selectedNote={selectedNote}  deleteNote={deleteNote} />
        </div>
      );
}

export default NotesApp;