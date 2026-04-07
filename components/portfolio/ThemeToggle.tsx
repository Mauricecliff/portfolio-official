'use client';

import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const storageKey = 'portfolio-theme';

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const savedTheme = localStorage.getItem(storageKey) as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme: Theme = savedTheme ?? (prefersDark ? 'dark' : 'light');

    root.classList.toggle('dark', initialTheme === 'dark');
    root.setAttribute('data-theme', initialTheme);
    setTheme(initialTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    const root = document.documentElement;

    root.classList.toggle('dark', nextTheme === 'dark');
    root.setAttribute('data-theme', nextTheme);
    localStorage.setItem(storageKey, nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="group relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-neutral-300/80 bg-white/90 text-neutral-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-300/30 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:shadow-black/30"
      aria-label="Toggle light and dark theme"
      aria-pressed={theme === 'dark'}
    >
      <motion.span
        key={mounted ? theme : 'pending'}
        initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.25 }}
      >
        {mounted && theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </motion.span>
      <span className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100 dark:bg-gradient-to-tr dark:from-amber-400/10 dark:to-emerald-300/10" />
    </button>
  );
}
