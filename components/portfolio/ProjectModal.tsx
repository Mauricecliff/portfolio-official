'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Github, X } from 'lucide-react';
import { ProjectPreviewCard } from './ProjectPreviewCard';
import type { Project } from '@/types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-4 backdrop-blur-sm md:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[90vh] w-full max-w-3xl overflow-auto rounded-[2rem] border border-neutral-300/80 bg-white p-5 text-neutral-900 dark:border-white/10 dark:bg-neutral-950 dark:text-white"
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-neutral-300/80 bg-neutral-100 p-2 text-neutral-700 dark:border-white/10 dark:bg-white/5 dark:text-white/75"
                aria-label="Close project modal"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <ProjectPreviewCard project={project} />

            <p className="mt-6 text-sm leading-7 text-neutral-700 dark:text-white/72">{project.description}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-neutral-950">
                Live Demo <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href={project.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-neutral-300/80 bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-800 dark:border-white/10 dark:bg-white/5 dark:text-white">
                Source Code <Github className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
