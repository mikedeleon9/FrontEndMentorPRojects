
import { useState } from "react";
import { TiTag } from "react-icons/ti";
import Modal from "./Modal";

export default function NoteBody({selectedNote}){
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedTags, setSelectedTags] = useState([]);

    return(
        <div className="col-span-5 p-6  w-full">
      {selectedNote ? (
        <div className="flex flex-col gap-8 ">
            <p className="text-2xl font-bold">Note {selectedNote} Content</p>
            <div  className="flex items-center gap-2 cursor-pointer gap-8">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => setIsModalOpen(true)}>
                <TiTag></TiTag>
                <button  className="text-sm cursor-pointer">Tags</button>
                </div>
                <p>Selected Tags go here</p>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
            <textarea className="border p-4"  rows="15" cols="55" placeholder="Let your thoughts roam..."></textarea>
            <div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-sm rounded-md cursor-pointer">Save Note</button>
            </div>
        </div>
      ) : (
        <p className="">Select a note to view details</p>
      )}
    </div>
    )
}