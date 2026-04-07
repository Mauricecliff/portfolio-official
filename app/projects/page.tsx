'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Layers3 } from 'lucide-react';
import { useState } from 'react';
import { PageHeader } from '@/components/portfolio/PageHeader';
import { ProjectModal } from '@/components/portfolio/ProjectModal';
import { ProjectPreviewCard } from '@/components/portfolio/ProjectPreviewCard';
import { projects } from '@/data/projects';
import type { Project } from '@/types/portfolio';

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="space-y-8">
      <PageHeader
        eyebrow="Selected Work"
        title="Project previews that feel closer to real case studies."
        description="Each project card includes a richer product-context preview so recruiters can quickly evaluate technical depth and execution quality."
      />

      <div className="grid gap-6 xl:grid-cols-2">
        {projects.map((project) => (
          <motion.article
            key={project.title}
            whileHover={{ y: -8 }}
            initial={{ opacity: 0, y: project.featured ? 34 : -34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className={`overflow-hidden rounded-[2rem] border ${
              project.featured
                ? 'border-amber-300/20 bg-amber-300/[0.12] dark:bg-amber-300/[0.06]'
                : 'border-neutral-300/70 bg-white/70 dark:border-white/10 dark:bg-white/5'
            }`}
          >
            <div className="p-5 pb-0">
              <ProjectPreviewCard project={project} />
            </div>

            <div className="p-6 pt-5">
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">{project.title}</h2>
              <p className="mt-4 text-sm leading-7 text-neutral-700 dark:text-white/68">{project.description}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-neutral-950 transition hover:opacity-90">
                  Live Demo <ArrowUpRight className="h-4 w-4" />
                </a>
                <a href={project.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-neutral-300/80 bg-transparent px-4 py-2 text-sm font-medium text-neutral-800 transition hover:bg-neutral-100 dark:border-white/10 dark:text-white dark:hover:bg-white/5">
                  Source Code <Github className="h-4 w-4" />
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-2 rounded-xl border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-sm font-medium text-amber-200 transition hover:bg-amber-300/15"
                >
                  View Details <Layers3 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </main>
  );
}
