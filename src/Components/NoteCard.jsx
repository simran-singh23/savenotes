export default function NoteCard({ note, darkMode }) {

  return (
    <div
      className={`p-5 rounded-2xl shadow-md border ${
        darkMode
          ? "bg-zinc-900 border-zinc-800 text-white"

          : "bg-white border-pink-200 text-black"
      }`}
    >

      <h2 className="text-xl font-bold mb-2">
        {note.title}
      </h2>

      <p className={darkMode ? "text-zinc-300" : "text-zinc-600"}>
        {note.desc}
      </p>

    </div>
  );
}
