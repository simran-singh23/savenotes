export default function AnimatedFooter() {
  return (
    <footer className="relative overflow-hidden 
    bg-zinc-950 px-6 py-8 text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent 
      via-yellow-400 to-transparent" />

      <div className="mx-auto flex max-w-7xl flex-col
       items-center justify-between gap-4 md:flex-row">
        <div>
          <h2 className="animate-gradient-shift bg-gradient-to-r from-yellow-300 
          via-pink-400 to-cyan-300 bg-[length:200%_200%] bg-clip-text text-xl 
          font-black tracking-wide text-transparent">
            Notes with Simran 📝
          </h2>
          <p className="mt-1 text-sm text-zinc-400">
            
            Keep your ideas saved, styled, and ready.
          </p>
        </div>


        <div className="flex items-center gap-2">

          <span className="h-2 w-2 animate-pulse 
          rounded-full bg-yellow-400" />
          <span className="text-sm font-semibold text-zinc-300">
            Built for better notes
          </span>
        </div>
      </div>
    </footer>
  );
}
