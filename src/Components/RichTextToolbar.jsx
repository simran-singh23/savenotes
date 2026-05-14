const RichTextToolbar = ({ darkMode, onFormat }) => {
  const applyStyle = (style) => {
    if (onFormat) {
      onFormat(style);
      return;
    }

    document.execCommand(style, false, null);
  };
  return (
    <div
      className={`mt-8 max-w-2xl mx-auto flex flex-wrap items-center gap-2
         rounded-2xl border p-3 shadow-md ${
        darkMode
          ? "bg-zinc-900 border-pink-800"

          : "bg-white border-zinc-200"
      }`}
    >
      <button type="button" onClick={() => applyStyle("bold")}
        className="h-10 min-w-10 rounded-xl bg-zinc-100 px-3 font-bold

         text-black hover:bg-yellow-300 transition-colors"
      >
        B
      </button>
      <button type="button" onClick={() => applyStyle("italic")} className="h-10 min-w-10 rounded-xl
       bg-zinc-100 px-3 italic text-black
         hover:bg-yellow-300 transition-colors"
      >
        I
      </button>

      <button type="button" onClick={() => applyStyle("underline")}
      
        className="h-10 min-w-10 rounded-xl bg-zinc-100 px-3 underline text-black
         hover:bg-yellow-300 transition-colors"
      >
        U
      </button>

 <button type="button"onClick={() => applyStyle("insertUnorderedList")}
        className="h-10 rounded-xl bg-zinc-100 px-4 text-sm font-semibold
         text-black hover:bg-yellow-300 transition-colors"
      >
        • List
      </button>

      <button type="button" onClick={() => applyStyle("insertOrderedList")}
       className="h-10 rounded-xl bg-zinc-100 px-4 text-sm font-semibold
        text-black hover:bg-yellow-300 transition-colors"
      >
        1. List
      </button>
    </div>
  );
};

export default RichTextToolbar;
