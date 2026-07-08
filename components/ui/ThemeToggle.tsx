"use client";

import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import gsap from '@/lib/gsap';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    
    setTheme(initialTheme);
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setTheme(nextTheme);
      localStorage.setItem('theme', nextTheme);
      if (nextTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return;
    }

    const x = e.clientX;
    const y = e.clientY;

    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const overlay = document.createElement('div');
    overlay.className = `fixed inset-0 z-[99990] pointer-events-none ${nextTheme === 'dark' ? 'bg-zinc-950' : 'bg-zinc-50'}`;
    overlay.style.clipPath = `circle(0px at ${x}px ${y}px)`;
    document.body.appendChild(overlay);

    gsap.to(overlay, {
      clipPath: `circle(${maxRadius}px at ${x}px ${y}px)`,
      duration: 0.85,
      ease: 'power3.inOut',
      onComplete: () => {
        setTheme(nextTheme);
        localStorage.setItem('theme', nextTheme);
        if (nextTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        overlay.remove();
      }
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-[999] p-3 rounded-full bg-zinc-100/10 dark:bg-zinc-800/30 border border-zinc-200/20 dark:border-zinc-800/80 hover:bg-zinc-100/20 dark:hover:bg-zinc-800/60 transition-colors flex items-center justify-center cursor-pointer"
      aria-label="Toggle theme"
      data-cursor="theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-zinc-900" />
      )}
    </button>
  );
}
