import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-between p-8 md:p-24 relative overflow-hidden">
      {/* Top Header */}
      <header className="flex justify-between items-center z-10">
        <span className="font-display text-xl font-bold tracking-tight select-none">
          JG
        </span>
      </header>

      {/* Main Hero Area */}
      <main className="flex-1 flex flex-col justify-center max-w-4xl z-10 py-20">
        <div className="space-y-6">
          <p className="text-sm font-semibold tracking-widest text-zinc-400 uppercase select-none">
            Portfolio v1.0 Init
          </p>
          <h1 className="font-display text-6xl md:text-8xl font-extrabold tracking-tight leading-none text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
            Justin Gomes
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-sans max-w-2xl leading-relaxed">
            Full-stack software engineer crafting high-performance, scroll-reactive, and immersive digital experiences.
          </p>
        </div>

        {/* Hoverable Interactive Test Box */}
        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="#explore"
            className="px-6 py-3 rounded-full bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950 font-medium text-sm transition-transform hover:scale-105 active:scale-95 duration-200"
            data-cursor="explore"
          >
            Explore Projects
          </a>
          <a
            href="mailto:justin@example.com"
            className="px-6 py-3 rounded-full border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900/50 font-medium text-sm transition-transform hover:scale-105 active:scale-95 duration-200"
            data-cursor="contact"
          >
            Get in touch
          </a>
        </div>
      </main>

      {/* Dynamic Scrolling Height Simulator (to test smooth scroll + scroll bar) */}
      <section className="h-[200vh] flex flex-col justify-center items-center relative z-10 border-t border-zinc-200/20 dark:border-zinc-800/20">
        <div className="text-center space-y-4 max-w-md">
          <h2 className="font-display text-3xl font-bold">Scroll Sync Active</h2>
          <p className="text-zinc-500 dark:text-zinc-400">
            Scroll down to see the viewport top progress bar fill up. Lenis inertia is fully synced with GSAP.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex justify-between items-center text-xs text-zinc-400 dark:text-zinc-600 border-t border-zinc-200/20 dark:border-zinc-800/20 pt-8 z-10">
        <p>© 2026 Justin Gomes. All rights reserved.</p>
        <p className="hoverable cursor-pointer" data-cursor="hello">
          Built with Next.js & GSAP
        </p>
      </footer>
    </div>
  );
}
