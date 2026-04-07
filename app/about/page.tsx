import { PageHeader } from '@/components/portfolio/PageHeader';
import { ExperienceSection } from '@/components/portfolio/ExperienceSection';
import { SkillsSection } from '@/components/portfolio/SkillsSection';
import { experience } from '@/data/experience';
import { skills } from '@/data/skills';

export default function AboutPage() {
  return (
    <main className="space-y-8">
      <PageHeader
        eyebrow="About"
        title="Frontend depth, experience, and product-aware execution."
        description="I focus on maintainable architecture, polished user experiences, and measurable business impact through quality frontend engineering."
      />
      <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <ExperienceSection items={experience} />
        <div className="space-y-6">
          <SkillsSection categories={skills} />
          <div className="rounded-[2rem] border border-neutral-300/70 bg-white/70 p-7 dark:border-white/10 dark:bg-white/5">
            <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">AI-assisted workflow</p>
            <p className="mt-4 text-sm leading-7 text-neutral-700 dark:text-white/70">
              I use modern AI tooling to accelerate refactors, improve debugging speed, and support architecture decisions while keeping product quality and maintainability as top priorities.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
