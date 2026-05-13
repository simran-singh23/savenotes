import { useRef, useState } from "react";
import RichTextToolbar from "./RichTextToolbar";

export default function NoteForm({ addNote, darkMode }) {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const editorRef = useRef(null);

  const handleFormat = (command) => {
    editorRef.current?.focus();
    document.execCommand(command, false, null);

    setDesc(editorRef.current?.innerHTML || "");
  };

  const handleSubmit = (e) => {
  
    e.preventDefault();

    const plainText = editorRef.current?.innerText.trim() || "";

    if (!title || !plainText) return;

    const newNote = {
      id: Date.now(),
      title,
      desc,
    };

    addNote(newNote);setTitle("");
    setDesc("");
    if (editorRef.current) 
      
      editorRef.current.innerHTML = "";
  };

  return (
    <form onSubmit={handleSubmit} className={`shadow-lg rounded-3xl p-6 mt-8 max-w-2xl mx-auto ${
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

      <RichTextToolbar darkMode={darkMode} onFormat={handleFormat} />

      <div ref={editorRef} contentEditable suppressContentEditableWarning
        onInput={(e) => setDesc(e.currentTarget.innerHTML)}
        className="w-full min-h-32 border border-zinc-300 p-4 rounded-xl outline-none text-black bg-white [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6"
      >
      </div>

      <button type="submit"
        className="mt-5 bg-black text-white px-6 py-3 rounded-xl hover:scale-105 transition-all"
      >
        Add Note
      </button>

    </form>
  );
}
