export default function ExtensionList({handleFilterClick, handleAllClick, handleInactive, showOnlyActive, showOnlyInactive, isDarkMode}){
    return(
        <div className="flex items-center justify-between mt-4">
            <h1 className={`${isDarkMode ? "text-current" : "text-Neutral900"} text-3xl font-bold`}>Extension List</h1>
            <div className="flex gap-3">
                <button onClick={handleAllClick} className={`${!showOnlyActive && !showOnlyInactive ? "bg-red-400  font-semibold hover:bg-red-400" : "bg-none"} ${isDarkMode ? "bg-Neutral-800 hover:bg-gray-600" : "bg-Neutral-100 hover:bg:Neutral-300 text-Neutral900"} cursor-pointer  rounded-3xl px-4 py-2 `}>All</button>
                <button onClick={handleFilterClick} className={`${showOnlyActive ? "bg-red-400 text-Neutral900 font-semibold hover:bg-red-400" : "bg-none"} ${isDarkMode ? "bg-Neutral-800 hover:bg-gray-600" : "bg-Neutral-100 hover:bg:Neutral-300 text-Neutral900"} cursor-pointer  rounded-3xl px-4 py-2 0`}>Active</button>
                <button onClick={handleInactive} className={`${showOnlyInactive ? "bg-red-400 text-Neutral900 font-semibold hover:bg-red-400" : "bg-none"} cursor-pointer bg-Neutral-800 rounded-3xl px-4 py-2 hover:bg-gray-600`}>Inactive</button>
            </div>
        </div>
    )
}