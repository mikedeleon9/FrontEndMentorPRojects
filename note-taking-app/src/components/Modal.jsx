

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // Don't render anything if modal is closed

    const availableTags = ["Cooking", "Dev", "Fitness", "Health", "Personal", "React", "Recipes", "Shopping", "Travel", "TypeScript"];
  
    return (
      <div className="modal-overlay border-2 fixed top-0 left-0 w-screen h-screen bg-[#00000080] flex items-center justify-center">
        <div className="modal-content bg-white w-1/2 h-1/2 shadow-lg flex flex-col items-center">
          
          <h2>Select All Applicable Tags</h2>
          <div className="grid grid-cols-3 grid-rows-3 border-2 ">
          {availableTags.map((tag) => {
            return(
                <div className="">
                <p>{tag}</p>
                </div>
            )
            
          }) }
          </div>
          <button onClick={onClose}>Save</button>
        </div>
      </div>
    );
  };

  export default Modal;