import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-sky-500 via-cyan-400 to-violet-500" />
            <span className="font-semibold tracking-tight text-slate-900 text-lg">Nextify Globaltech</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#services" className="hover:text-slate-900 transition">Services</a>
            <a href="#about" className="hover:text-slate-900 transition">About</a>
            <a href="#contact" className="hover:text-slate-900 transition">Contact</a>
          </nav>

          <div className="hidden md:block">
            <a href="#contact" className="inline-flex items-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800 transition">Get Started</a>
          </div>

          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 text-sm text-slate-700">
              <a onClick={() => setOpen(false)} href="#services" className="px-2 py-2 rounded hover:bg-slate-100">Services</a>
              <a onClick={() => setOpen(false)} href="#about" className="px-2 py-2 rounded hover:bg-slate-100">About</a>
              <a onClick={() => setOpen(false)} href="#contact" className="px-2 py-2 rounded hover:bg-slate-100">Contact</a>
              <a onClick={() => setOpen(false)} href="#contact" className="mt-2 inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800 transition">Get Started</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
