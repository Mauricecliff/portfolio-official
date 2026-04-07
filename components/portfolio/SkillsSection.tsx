'use client';

import { motion } from 'framer-motion';
import type { SkillCategory, SkillCategoryKey } from '@/types/portfolio';

interface SkillsSectionProps {
  categories: Record<SkillCategoryKey, SkillCategory>;
}

export function SkillsSection({ categories }: SkillsSectionProps) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
      <p className="mb-5 text-sm uppercase tracking-[0.25em] text-sky-300">Skills & Expertise</p>
      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(categories).map(([key, value]) => (
          <motion.div key={key} whileHover={{ y: -4 }} className="rounded-[1.5rem] border border-white/10 bg-neutral-900/50 p-5">
            <h3 className="mb-4 text-lg font-semibold text-white">{value.title}</h3>
            <div className="flex flex-wrap gap-2">
              {value.items.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white/75">
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
