

export default function Extension({logo, title, summary, onRemove, onToggle, isDarkMode, isActive}){
    
   

    return (
        <div className="p-2 flex flex-col h-full w-full justify-between gap-8 p-3">
            <div className="flex  gap-2 gap-4"> 
                <img className="w-12 h-14" src={logo} alt="logo" />
                <div className="">
                    <h2 className={`${isDarkMode ? "text-white" : "text-Neutral900"} text-lg mb-1 font-semibold`}>{title}</h2>
                    <p className={`${isDarkMode ? "text-white" : "text-Neutral900"}`}>{summary}</p>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <button onClick={() => onRemove(title)} className={`${isDarkMode ? "text-white" : "text-Neutral900"} font-semibold cursor-pointer border-1 px-4 py-2 rounded-3xl border-slate-400 hover:bg-CustomScarlet hover:border-Neutral900 hover:text-Neutral900 hover:font-semibold`}>Remove</button>
                <input 
                name={title} 
                onChange={onToggle} 
                checked={isActive} 
                type="checkbox"  
                className={`toggle ${isDarkMode ? "bg-inherit text-inherit border-inherit" : "bg-gray-400 text-white"} checked:bg-orange-400 checked:text-white checked:border-orange-500`} />
            </div>
        </div>
    )
}