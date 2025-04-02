
export default function Button({content, onClick}){
    return(
        <button onClick={onClick} className="bg-ModerateCyan hover:bg-DarkCyan py-4 px-6 rounded-full text-white font-semibold">
            {content}
        </button>
    )
}