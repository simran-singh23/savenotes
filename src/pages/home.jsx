import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import NoteForm from "../Components/NoteForm";
import NoteCard from "../Components/NoteCard";

const NOTES_STORAGE_KEY = "notes-app-notes";

export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem(NOTES_STORAGE_KEY);

    if (!savedNotes) return [];

    try {
      return JSON.parse(savedNotes);
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  const addNote = (newNote) => {
    setNotes((currentNotes) => [...currentNotes, newNote]);
  
  };

  const deleteNote = (noteId) => {
    setNotes((currentNotes) =>
      currentNotes.filter((note) => note.id !== noteId)
    );
  };

  return (
    <div
      className={
        darkMode
          ? "bg-green-950 min-h-screen text-white"

          : "bg-gray-100 min-h-screen text-black"
      }
    >
      
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} notesCount={notes.length}
      />

      <div className="p-6">
        
        <h1 className="text-3xl font-bold">
          Notes App
        </h1>

        <p className="mt-2 text-zinc-500">

  Start adding your notes  with simran✍️
        </p>

        
        <NoteForm addNote={addNote} darkMode={darkMode} />

        {notes.length === 0 ? (
          
          <p className="mt-10 text-center text-zinc-500">
            No notes yet. please add your notes
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2
           lg:grid-cols-3 gap-5 mt-10">
            {notes.map((note) => (
       <NoteCard key={note.id} note={note} darkMode={darkMode}
                onDelete={deleteNote}
              />
            ))}


          </div>
        )}
      </div>

    </div>
  );
}
