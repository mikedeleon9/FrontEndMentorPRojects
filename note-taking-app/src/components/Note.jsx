function Note({ id, onSelect, selectedNote}) {
    return (
      <div 
        className={`p-4 border rounded shadow cursor-pointer w-full ${selectedNote === id ? "border-2 border-black" : "border-2 border-gray-200"}`} 
        onClick={() => onSelect(id)} // When clicked, call onSelect function
      >
        <h2>Note {id}</h2>
        <p>This is a new note.</p>
      </div>
    );
  }
  
  export default Note;