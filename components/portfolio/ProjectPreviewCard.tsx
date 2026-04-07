import type { Project } from '@/types/portfolio';

interface ProjectPreviewCardProps {
  project: Project;
  compact?: boolean;
}

export function ProjectPreviewCard({ project, compact = false }: ProjectPreviewCardProps) {
  return (
    <div
      className={`overflow-hidden rounded-[1.6rem] border border-neutral-300/80 bg-white dark:border-white/10 dark:bg-neutral-950 ${compact ? '' : 'shadow-xl shadow-black/10 dark:shadow-black/20'}`}
    >
      <div className="flex items-center justify-between border-b border-neutral-300/80 px-4 py-3 dark:border-white/10">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="rounded-full bg-neutral-100 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-neutral-500 dark:bg-white/5 dark:text-white/45">
          Live product preview
        </div>
      </div>
      <div className="p-4">
        <div
          className={`relative overflow-hidden rounded-[1.35rem] border border-neutral-300/80 bg-neutral-900 bg-gradient-to-br dark:border-white/10 ${project.preview.accent} ${project.preview.glow} p-5`}
        >
          <p className="text-[11px] uppercase tracking-[0.22em] text-white/70">{project.preview.eyebrow}</p>
          <h4 className={`mt-3 font-semibold text-white ${compact ? 'text-lg leading-8' : 'text-2xl leading-9'}`}>
            {project.preview.headline}
          </h4>
          <p className="mt-3 text-sm leading-7 text-white/85">{project.preview.subtext}</p>
        </div>
      </div>
    </div>
  );
}
