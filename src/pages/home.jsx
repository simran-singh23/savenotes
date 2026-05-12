import { useState } from "react";
import Navbar from "../Components/Navbar";
import NoteForm from "../Components/NoteForm";
import NoteCard from "../Components/NoteCard";

export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  return (
    <div
      className={
        darkMode
          ? "bg-green-950 min-h-screen text-white"
          : "bg-gray-100 min-h-screen text-black"
      }
    >
      
      <Navbar
        darkMode={darkMode} setDarkMode={setDarkMode} notesCount={notes.length}
      />

      <div className="p-6">
        
        <h1 className="text-3xl font-bold">
          Notes App
        </h1>

        <p className="mt-2 text-zinc-500">
          Start adding your notes ✍️
        </p>

        
        <NoteForm addNote={addNote} darkMode={darkMode} />

        {notes.length === 0 ? (
          <p className="mt-10 text-center text-zinc-500">
            No notes yet. please add your notes 
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">

            {notes.map((note) => (
              <NoteCard key={note.id} note={note} darkMode={darkMode} />
            ))}


          </div>
        )}
      </div>

    </div>
  );
}
