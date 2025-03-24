function Note({ id, onSelect }) {
    return (
      <div 
        className="p-4 border rounded shadow cursor-pointer w-full" 
        onClick={() => onSelect(id)} // When clicked, call onSelect function
      >
        <h2>Note {id}</h2>
        <p>This is a new note.</p>
      </div>
    );
  }
  
  export default Note;