import { useState } from "react";
import { TiTag } from "react-icons/ti";
import Modal from "./Modal";

export default function NoteBody({ selectedNote, notes = [], setNotes }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!selectedNote) {
        return <p className="">Select a note to view details</p>;
    }

    // Find the note, and ensure it has a valid tags array
    const note = notes.find(n => n.id === selectedNote);
    const selectedTags = note?.tags || []; // Ensure selectedTags is always an array

    const setSelectedTags = (newTags) => {
        setNotes(prevNotes =>
            prevNotes.map(n => 
                n.id === selectedNote ? { ...n, tags: newTags } : n
            )
        );
    };

    return (
        <div className="col-span-5 p-6 w-full">
            <div className="flex flex-col gap-8">
                <p className="text-2xl font-bold">Note {selectedNote} Content</p>
                <div className="flex items-center gap-2 cursor-pointer">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => setIsModalOpen(true)}>
                        <TiTag />
                        <button className="text-sm cursor-pointer">Tags</button>
                    </div>
                    {selectedTags.length > 0 ? (
                        <div className="flex items-center gap-3">
                            {selectedTags.map(tag => (
                                <span key={tag} className="px-2 py-1 bg-gray-200 rounded">{tag}</span>
                            ))}
                        </div>
                    ) : (
                        <p>Selected Tags Go here</p>
                    )}
                </div>
                <Modal 
                    isOpen={isModalOpen} 
                    onClose={() => setIsModalOpen(false)} 
                    selectedTags={selectedTags} 
                    setSelectedTags={setSelectedTags} 
                />
                <textarea className="border p-4" rows="15" cols="55" placeholder="Let your thoughts roam..."></textarea>
                <div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-sm rounded-md cursor-pointer">Save Note</button>
                </div>
            </div>
        </div>
    );
}
