import { useState } from "react"
import data from "./data"
import React from "react";

export default function Grid(){

    const [shuffleData, setShuffleData] = useState(data);
    const [clickedBoxes, setClickedBoxes] = useState([]);
    const [correctGuess, setCorrectGuess] = useState(false);


    function shuffleCards(){

        const shuffled =  [...data].sort(() => Math.random() - 0.5);
        setShuffleData(shuffled);

    }

  

    function clickedCard(item){
        setClickedBoxes(prev => {

            const alreadyClicked = prev.find(box => box.name !== item.name);

            if(prev.includes(item)){
                return prev.filter(n => n !== item);
            }
            if (prev.length >= 4) {
                return prev;
            }
            else {
                return [...prev, name]
            }
        });
        
    
    }

    return (
        <div className="flex flex-col items-center gap-4">
        <div className="grid grid-cols-4 grid-rows-4 gap-2">
            {shuffleData.map((item, index) => {
                const isClicked = clickedBoxes.includes(item.name);
                return(
                    <div onClick={() => clickedCard(item.name)} className={`${isClicked ? 'bg-gray-500 text-white' : 'bg-white'} border-2 p-2 flex items-center justify-center`}>
                        <p>{item.name}</p>
                        
                    </div>
                )
            })}

            
        </div>
        <button onClick={shuffleCards} className=" px-4 py-2 rounded-lg cursor-pointer bg-blue-300 text-white">Shuffle</button>
        </div>
    )
}