import { useState } from "react"
import data from "./data"

export default function Grid(){

    const [shuffleData, setShuffleData] = useState(data);
    const [isClicked, setisClicked] = useState("");


    function shuffleCards(){

        const shuffled =  [...data].sort(() => Math.random() - 0.5);
        setShuffleData(shuffled);

    }

    function clickedCard(){
        setisClicked(prev => !prev);
      
    
    }

    return (
        <div className="flex flex-col items-center gap-4">
        <div className="grid grid-cols-4 grid-rows-4 gap-2">
            {shuffleData.map((item, index) => {
                return(
                    <div onClick={clickedCard} className={`${isClicked === item.name ? 'bg-gray-500' : 'bg-white'} border-2 p-2 flex items-center justify-center`}>
                        <p>{item.name}</p>
                        
                    </div>
                )
            })}

            
        </div>
        <button onClick={shuffleCards} className=" px-4 py-2 rounded-lg cursor-pointer bg-blue-300 text-white">Shuffle</button>
        </div>
    )
}