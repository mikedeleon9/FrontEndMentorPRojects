import Button from "./Button";

function ModalPledgeComponent({labelTitle, description, selectedOption, setSelectedOption}) {
  

  const handleChange = (e) => {
    setSelectedOption(labelTitle);
  }

  return (
    <div className={`${selectedOption === labelTitle ? "border-ModerateCyan" : "border-gray-200"} border-1 py-9 px-6 rounded-lg flex flex-col gap-4`}>
        <div className='flex items-center gap-2 hover:text-ModerateCyan'>
          <input  className="w-5 h-5 text-ModerateCyan cursor-pointer accent-ModerateCyan" id={labelTitle} checked={selectedOption === labelTitle} onChange={handleChange} type="radio" name="option" />
          <label className={`${selectedOption === labelTitle ? "text-ModerateCyan" : "text-black"} font-bold cursor-pointer hover:text-ModerateCyan `} htmlFor={labelTitle}>{labelTitle}</label>
        </div>
      <p className='text-DarkGray text-base/7'>{description}</p>
    
        <div className={`${selectedOption === labelTitle ? "opacity-100 max-h-40 py-4" : "opacity-0 max-h-0"}  transition-all duration-400 overflow-hidden flex justify-between items-center`}>
        
          <p className="text-DarkGray">Enter your pledge</p>
          <div className="flex items-center gap-2">
            <input className="border border-DarkGray rounded-full p-4" type="text" placeholder="0.00" />
            <Button content="Continue" />
          </div>
        </div>
      
    </div>
  )
}

export default ModalPledgeComponent
