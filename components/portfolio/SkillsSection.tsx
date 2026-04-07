'use client';

import { motion } from 'framer-motion';
import type { SkillCategory, SkillCategoryKey } from '@/types/portfolio';

interface SkillsSectionProps {
  categories: Record<SkillCategoryKey, SkillCategory>;
}

export function SkillsSection({ categories }: SkillsSectionProps) {
  return (
    <div className="rounded-[2rem] border border-neutral-300/70 bg-white/70 p-7 dark:border-white/10 dark:bg-white/5">
      <p className="mb-5 text-sm uppercase tracking-[0.25em] text-sky-300">Skills & Expertise</p>
      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(categories).map(([key, value]) => (
          <motion.div key={key} whileHover={{ y: -4 }} className="rounded-[1.5rem] border border-neutral-300/70 bg-neutral-100/80 p-5 dark:border-white/10 dark:bg-neutral-900/50">
            <h3 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-white">{value.title}</h3>
            <div className="flex flex-wrap gap-2">
              {value.items.map((item) => (
                <span key={item} className="rounded-full border border-neutral-300/80 bg-white px-3 py-2 text-sm text-neutral-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-white/75">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
