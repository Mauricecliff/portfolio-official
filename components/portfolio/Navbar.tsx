'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Github, Linkedin, Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.header
      className="sticky top-4 z-40 mb-10 rounded-[1.6rem] border border-neutral-300/70 bg-white/80 px-5 py-4 shadow-lg shadow-black/5 backdrop-blur-xl dark:border-white/10 dark:bg-neutral-950/70 dark:shadow-none"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="text-left">
          <p className="text-sm uppercase tracking-[0.25em] text-amber-300">Maurice Oseh</p>
          <p className="mt-1 text-sm text-neutral-600 dark:text-white/65">Senior Frontend Engineer</p>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm transition ${
                pathname === item.href
                  ? 'bg-neutral-950 text-white dark:bg-white dark:text-neutral-950'
                  : 'bg-neutral-900/5 text-neutral-700 hover:bg-neutral-900/10 hover:text-neutral-900 dark:bg-white/5 dark:text-white/75 dark:hover:bg-white/10 dark:hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/Mauricecliff"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-neutral-300/80 bg-white/70 p-2.5 text-neutral-700 transition hover:bg-white hover:text-neutral-900 dark:border-white/10 dark:bg-white/5 dark:text-white/75 dark:hover:bg-white/10 dark:hover:text-white md:inline-flex"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/in/oseh-maurice-537b2210a"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-neutral-300/80 bg-white/70 p-2.5 text-neutral-700 transition hover:bg-white hover:text-neutral-900 dark:border-white/10 dark:bg-white/5 dark:text-white/75 dark:hover:bg-white/10 dark:hover:text-white md:inline-flex"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="tel:+2347033554866"
            className="hidden items-center gap-2 rounded-full border border-neutral-300/80 bg-white/70 px-3 py-2 text-xs text-neutral-700 transition hover:bg-white hover:text-neutral-900 dark:border-white/10 dark:bg-white/5 dark:text-white/75 dark:hover:bg-white/10 dark:hover:text-white md:inline-flex"
            aria-label="Phone number"
          >
            <Phone className="h-3.5 w-3.5" />
            +2347033554866
          </a>
          <div className="md:hidden">
            <ThemeToggle />
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex rounded-full border border-neutral-300/80 bg-white/70 p-2.5 text-neutral-800 md:hidden dark:border-white/10 dark:bg-white/5 dark:text-white/80"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden md:hidden"
          >
            <div className="mt-4 grid gap-2 border-t border-neutral-300/70 pt-4 dark:border-white/10">
              <a
                href="tel:+2347033554866"
                className="rounded-2xl bg-neutral-900/5 px-4 py-3 text-left text-sm text-neutral-700 dark:bg-white/5 dark:text-white/75"
              >
                Call: +2347033554866
              </a>
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-left text-sm transition ${
                    pathname === item.href
                      ? 'bg-neutral-950 text-white dark:bg-white dark:text-neutral-950'
                      : 'bg-neutral-900/5 text-neutral-700 dark:bg-white/5 dark:text-white/75'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
