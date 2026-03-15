"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] flex flex-col items-center justify-center text-white font-sans selection:bg-gold selection:text-onyx-black">
      <div className="text-center">
        <h1 className="text-6xl font-bold tracking-tighter mb-4 text-white/90">
          404
        </h1>
        <p className="text-[#C4C8C9] text-sm uppercase tracking-[0.2em] mb-12">
          Sorry, seems you are lost
        </p>

        <Link
          href="/"
          className="px-10 py-4 border border-white/20 hover:border-gold hover:text-gold transition-colors text-[11px] uppercase tracking-[0.3em] font-medium"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
