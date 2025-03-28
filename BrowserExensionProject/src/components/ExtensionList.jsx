export default function ExtensionList({handleFilterClick, handleAllClick}){
    return(
        <div className="flex items-center justify-between mt-4">
            <h1 className="text-3xl font-bold">Extension List</h1>
            <div className="flex gap-3">
                <button onClick={handleAllClick} className="cursor-pointer bg-Neutral-800 rounded-3xl px-4 py-2 text-sm">All</button>
                <button onClick={handleFilterClick} className="cursor-pointer bg-Neutral-800 rounded-3xl px-4 py-2 text-sm">Active</button>
                <button className="bg-Neutral-800 rounded-3xl px-4 py-2 text-sm">Inactive</button>
            </div>
        </div>
    )
}