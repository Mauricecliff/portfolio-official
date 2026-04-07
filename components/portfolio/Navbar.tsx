'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { useState } from 'react';

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
      className="sticky top-4 z-40 mb-10 rounded-[1.6rem] border border-white/10 bg-neutral-950/70 px-5 py-4 backdrop-blur-xl"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="text-left">
          <p className="text-sm uppercase tracking-[0.25em] text-amber-300">Maurice Oseh</p>
          <p className="mt-1 text-sm text-white/65">Senior Frontend Engineer</p>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm transition ${
                pathname === item.href
                  ? 'bg-white text-neutral-950'
                  : 'bg-white/5 text-white/75 hover:bg-white/10 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/Mauricecliff"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-white/10 bg-white/5 p-2.5 text-white/75 transition hover:bg-white/10 hover:text-white md:inline-flex"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/in/oseh-maurice-537b2210a"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-white/10 bg-white/5 p-2.5 text-white/75 transition hover:bg-white/10 hover:text-white md:inline-flex"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex rounded-full border border-white/10 bg-white/5 p-2.5 text-white/80 md:hidden"
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
            <div className="mt-4 grid gap-2 border-t border-white/10 pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-left text-sm transition ${
                    pathname === item.href ? 'bg-white text-neutral-950' : 'bg-white/5 text-white/75'
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
