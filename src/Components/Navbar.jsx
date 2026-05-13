import { FaMoon, FaSun, FaStickyNote } from "react-icons/fa";

export default function Navbar({ darkMode, setDarkMode, notesCount }) {
  return (
    <nav className="w-full px-6 py-4 bg-zinc-900
     text-white shadow-lg 

    border-b border-zinc-800">
      <div className="max-w-7xl mx-auto flex items-center 
      justify-between">
        
 <div className="flex items-center gap-3">

          <div className="bg-yellow-400 text-black p-3 
          rounded-2xl 

          rotate-6 shadow-md">
            <FaStickyNote size={20} />
          </div>

          <div>
            <h1 className="text-2xl font-black tracking-wide">
              Notes App
            </h1>

            <p className="text-xs text-zinc-400">
             
              Organize your ideas beautifully
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          

          <div className="hidden md:flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-full">
            <span className="text-sm text-zinc-300">
              Your Notes
            </span>

            <span className="bg-yellow-400 text-black text-xs
             font-bold px-2 py-1 rounded-full">
              {notesCount}

            </span>
          </div>

         
          <button
            onClick={() => setDarkMode(!darkMode)} className="bg-yellow-400 hover:scale-110
             transition-all 
            duration-300 text-black
             p-3 rounded-2xl shadow-md"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
}
