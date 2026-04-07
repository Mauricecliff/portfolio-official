'use client';

import { motion } from 'framer-motion';
import type { ExperienceItem } from '@/types/portfolio';

interface ExperienceSectionProps {
  items: ExperienceItem[];
}

export function ExperienceSection({ items }: ExperienceSectionProps) {
  return (
    <div className="rounded-[2rem] border border-neutral-300/70 bg-white/70 p-7 dark:border-white/10 dark:bg-white/5">
      <p className="mb-5 text-sm uppercase tracking-[0.25em] text-amber-300">Experience</p>
      <div className="grid gap-5">
        {items.map((item) => (
          <motion.article key={`${item.company}-${item.period}`} whileHover={{ y: -4 }} className="rounded-[1.5rem] border border-neutral-300/70 bg-neutral-100/80 p-5 dark:border-white/10 dark:bg-neutral-900/50">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">{item.role} <span className="text-neutral-500 dark:text-white/45">— {item.company}</span></h3>
            <p className="mt-2 text-sm text-amber-300">{item.type} • {item.period}</p>
            <ul className="mt-4 grid gap-2 text-sm text-neutral-700 dark:text-white/72">
              {item.points.map((point) => <li key={point}>• {point}</li>)}
            </ul>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
