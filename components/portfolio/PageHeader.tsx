'use client';

import { motion } from 'framer-motion';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
      <p className="text-sm uppercase tracking-[0.25em] text-amber-300">{eyebrow}</p>
      <h1 className="mt-3 text-3xl font-semibold md:text-4xl">{title}</h1>
      {description ? <p className="mt-4 max-w-3xl text-sm leading-7 text-white/72 md:text-base">{description}</p> : null}
    </motion.div>
  );
}
