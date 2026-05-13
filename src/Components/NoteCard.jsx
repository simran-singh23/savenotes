export default function NoteCard({ note, darkMode, onDelete }) {

  return (
    <div
      className={`p-5 rounded-2xl shadow-md border ${
        darkMode
          ? "bg-zinc-900 border-zinc-800 text-white"

          : "bg-white border-pink-200 text-black"
      }`}
    >

      <div className="flex items-start justify-between gap-3 mb-2">
        <h2 className="text-xl font-bold">
          {note.title}
        </h2>

        <button
          type="button"
          onClick={() => onDelete(note.id)}
          className="shrink-0 rounded-lg bg-red-500 px-3 py-1 text-sm font-semibold text-white hover:bg-red-600 transition-colors"
        >
          Delete
        </button>
      </div>

      <div
        className={`[&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 ${
          darkMode ? "text-zinc-300" : "text-zinc-600"
        }`}
        dangerouslySetInnerHTML={{ __html: note.desc }}
      />

    </div>
  );
}
