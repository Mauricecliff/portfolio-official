import type { SkillCategory, SkillCategoryKey } from '@/types/portfolio';

export const skills: Record<SkillCategoryKey, SkillCategory> = {
  frontend: {
    title: 'Frontend',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'Tailwind CSS',
      'Material UI',
      'Sass',
      'Bootstrap',
    ],
  },
  state: {
    title: 'State & Data',
    items: ['Redux Toolkit', 'Zustand', 'TanStack Query', 'REST API Integration'],
  },
  performance: {
    title: 'Performance',
    items: [
      'Core Web Vitals Optimization',
      'SSR / SSG',
      'Lazy Loading',
      'Code Splitting',
      'Image Optimization',
      'SEO Best Practices',
    ],
  },
  tools: {
    title: 'Tooling',
    items: [
      'Git',
      'GitHub',
      'Firebase',
      'Vercel',
      'Lighthouse',
      'Chrome DevTools',
      'AI-assisted workflows',
    ],
  },
};
