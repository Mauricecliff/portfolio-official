import { Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Hero } from '@/components/portfolio/Hero';
import { ProjectPreviewCard } from '@/components/portfolio/ProjectPreviewCard';
import { projects } from '@/data/projects';

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <main className="space-y-10">
      <Hero />
      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-neutral-300/70 bg-white/70 p-7 dark:border-white/10 dark:bg-white/5">
          <div className="mb-5 flex items-center gap-3 text-amber-300">
            <Sparkles className="h-5 w-5" />
            <p className="text-sm uppercase tracking-[0.25em]">Featured project previews</p>
          </div>
          <div className="space-y-4">
            {featuredProjects.map((project) => (
              <Link key={project.title} href="/projects" className="group block rounded-[1.5rem] border border-neutral-300/70 bg-neutral-100/80 p-4 transition hover:border-amber-300/30 dark:border-white/10 dark:bg-neutral-900/60">
                <ProjectPreviewCard project={project} compact />
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-neutral-300/70 bg-white/70 p-7 dark:border-white/10 dark:bg-white/5">
          <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">Key Value Proposition</p>
          <h2 className="mt-4 text-2xl font-semibold">Production-grade frontend architecture with business-aware execution.</h2>
          <p className="mt-4 text-sm leading-7 text-neutral-700 dark:text-white/70">
            I combine polished UI delivery with architecture discipline, analytics-informed user journeys, and performance-first engineering.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {['Scalable component systems', 'Conversion-focused UX', 'AI-assisted workflow', 'Performance and accessibility'].map((item) => (
              <div key={item} className="rounded-xl border border-neutral-300/70 bg-neutral-100/70 px-4 py-3 text-sm text-neutral-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-white/80">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
