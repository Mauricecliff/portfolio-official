'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Hero() {
  const heroTitle = 'I build high-performance frontend experiences for fintech, e-commerce, and modern product teams.';
  const [typedTitle, setTypedTitle] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = window.setInterval(() => {
      index += 1;
      setTypedTitle(heroTitle.slice(0, index));

      if (index >= heroTitle.length) {
        window.clearInterval(interval);
      }
    }, 28);

    return () => window.clearInterval(interval);
  }, [heroTitle]);

  return (
    <motion.section
      className="mb-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <div className="space-y-7">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
          <span className="h-2 w-2 rounded-full bg-emerald-300" />
          Open to remote global opportunities
        </div>
        <div className="space-y-4">
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            {typedTitle}
            <span className="ml-1 inline-block h-[1em] w-[0.08em] animate-pulse bg-current align-[-0.12em]" aria-hidden="true" />
          </h1>
          <p className="max-w-3xl text-base leading-8 text-neutral-700 dark:text-white/72 md:text-lg">
            Frontend engineer with 6+ years of experience shipping scalable web applications with React, Next.js,
            and TypeScript. I focus on architecture, performance, conversion-aware UX, and polished interfaces that
            help products grow.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/projects" className="rounded-2xl bg-amber-400 px-6 py-3 text-sm font-semibold text-neutral-950">
            Explore Projects
          </Link>
          <Link
            href="/contact"
            className="rounded-2xl border border-neutral-300 bg-white/80 px-6 py-3 text-sm font-semibold text-neutral-800 transition hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            Contact Me
          </Link>
        </div>
      </div>
      <motion.div
        className="rounded-[2rem] border border-neutral-300/70 bg-white/70 p-5 shadow-2xl shadow-black/10 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-black/30"
        whileHover={{ y: -5, scale: 1.01 }}
      >
        <div className="overflow-hidden rounded-[1.5rem] border border-neutral-300/70 bg-neutral-100 p-5 dark:border-white/10 dark:bg-neutral-900">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-300">Current Positioning</p>
          <h2 className="mt-2 text-2xl font-semibold">Senior Frontend Engineer</h2>
          <p className="mt-4 text-sm leading-7 text-neutral-700 dark:text-white/70">
            Strong background in commerce and fintech frontend systems with practical experience in component-driven
            architecture, state management, SEO, analytics instrumentation, and performance optimization.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
