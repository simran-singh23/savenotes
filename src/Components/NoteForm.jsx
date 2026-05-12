import { useState } from "react";

export default function NoteForm({ addNote, darkMode }) {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !desc) return;

    const newNote = {
      id: Date.now(),
      title,
      desc,
    };

    addNote(newNote);

    setTitle("");
    setDesc("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`shadow-lg rounded-3xl p-6 mt-8 max-w-2xl mx-auto ${
        darkMode ? "bg-zinc-900 border border-zinc-800" : "bg-white"
      }`}
    >
      
      <h2 className="text-2xl font-bold mb-5">
        Add New Note ✍️
      </h2>

     
      <input type="text"placeholder="Enter note title..."value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border border-zinc-300 p-4 rounded-xl outline-none mb-4 text-black"
      />

   
      <textarea
        placeholder="Write your note..."

        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className="w-full border border-zinc-300 p-4 rounded-xl outline-none h-32 resize-none text-black"
      />

      <button
        type="submit"
        className="mt-5 bg-black text-white px-6 py-3 rounded-xl hover:scale-105 transition-all"
      >
        Add Note
      </button>

    </form>
  );
}
