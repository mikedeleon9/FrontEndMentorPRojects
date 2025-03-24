import { TiTag } from "react-icons/ti";

const Modal = ({ isOpen, onClose, selectedTags, setSelectedTags }) => {
    if (!isOpen) return null; // Don't render anything if modal is closed

    const availableTags = ["Cooking", "Dev", "Fitness", "Health", "Personal", "React", "Recipes", "Shopping", "Travel", "TypeScript"];

    const handleTagClick = (tag) => {
        if (selectedTags.includes(tag)) {
          setSelectedTags(selectedTags.filter((t) => t !== tag)); // Remove tag
        } else {
          setSelectedTags([...selectedTags, tag]); // Add tag
        }
      };
  
    return (
      <div className="modal-overlay border-2 fixed top-0 left-0 w-screen h-screen bg-[#00000080] flex items-center justify-center" onClick={onClose}>
        <div className="modal-content bg-white max-w-2/3 max-h-2/3 shadow-lg flex flex-col items-center justify-center gap-4 p-10" onClick={(e) => e.stopPropagation()}>
          
          <h2>Select All Applicable Tags</h2>
          <div className="grid grid-cols-3 grid-rows-3  gap-4">
          {availableTags.map((tag) => {return (
           
                <div 
                key={tag} onClick={() => handleTagClick(tag)} className="p-4 cursor-pointer flex items-center gap-2">
                <TiTag></TiTag>
                <p>{tag}</p>
                </div>
            
            
         ) }) }
          </div>
          <button onClick={onClose}>Save</button>
        </div>
      </div>
    );
  };

  export default Modal;