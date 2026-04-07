import type { Project } from '@/types/portfolio';

export const projects: Project[] = [
  {
    title: 'EasySpend Fintech Experience',
    category: 'Fintech Product Work',
    description:
      'Frontend engineering work focused on onboarding, wallet funding flows, OTP verification, PIN setup, analytics instrumentation, and friction reduction across fintech user journeys.',
    highlights: [
      'Improved onboarding UX for verification and success-state flows',
      'Worked on payment routing and wallet funding experience',
      'Integrated event tracking and conversion-oriented UI behavior',
      'Applied scalable component patterns for maintainability',
    ],
    stack: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Analytics'],
    live: 'https://app.easyspend.cc/',
    code: 'https://github.com/Mauricecliff',
    featured: true,
    metrics: ['Conversion-aware onboarding', 'Real product environment', 'Analytics-informed UX'],
    preview: {
      eyebrow: 'Wallet funding flow',
      headline: 'Fintech onboarding built for trust, speed, and completion.',
      subtext:
        'Focused on OTP, PIN setup, payment routing, and friction reduction across critical user actions.',
      accent: 'from-emerald-400/30 via-cyan-400/10 to-transparent',
      glow: 'shadow-emerald-500/20',
      chips: ['OTP', 'PIN', 'Funding', 'Analytics'],
    },
  },
  {
    title: 'Jovalink E-commerce Platform',
    category: 'E-commerce',
    description:
      'A scalable commerce frontend built around product discovery, dynamic region-based experiences, cart flows, and API-driven checkout interactions.',
    highlights: [
      'Dynamic product discovery with search, category filters, and region logic',
      'Reusable UI architecture for scalable storefront experiences',
      'Performance-conscious rendering and polished responsive design',
      'Integrated backend APIs for cart and checkout workflows',
    ],
    stack: ['Next.js', 'TypeScript', 'Redux', 'Zustand', 'Tailwind CSS', 'MUI'],
    live: 'https://app.jovalink.shop/',
    code: 'https://github.com/Mauricecliff',
    featured: true,
    metrics: ['Scalable storefront UI', 'API-driven cart flows', 'Responsive commerce UX'],
    preview: {
      eyebrow: 'Product discovery system',
      headline: 'Commerce UI engineered for discoverability and smooth checkout flow.',
      subtext:
        'Built around categories, search, region logic, reusable components, and conversion-focused product browsing.',
      accent: 'from-amber-400/25 via-orange-400/10 to-transparent',
      glow: 'shadow-amber-500/20',
      chips: ['Search', 'Cart', 'Regions', 'Checkout'],
    },
  },
  {
    title: 'Snookerz Platform',
    category: 'Web Platform',
    description:
      'Modern responsive frontend focused on UI consistency, accessibility, and performance optimization across devices.',
    highlights: [
      'Built reusable UI patterns to speed development',
      'Improved responsiveness across desktop, tablet, and mobile',
      'Strengthened overall user experience with cleaner component structure',
    ],
    stack: ['React', 'Next.js', 'JavaScript', 'CSS'],
    live: 'https://snookerz.com/',
    code: 'https://github.com/Mauricecliff',
    featured: false,
    metrics: ['Responsive delivery', 'Reusable UI system', 'Cleaner page experience'],
    preview: {
      eyebrow: 'Platform modernization',
      headline: 'A cleaner, faster interface across devices and breakpoints.',
      subtext:
        'Focused on consistency, accessible interactions, and reusable frontend patterns for long-term maintainability.',
      accent: 'from-fuchsia-400/25 via-violet-400/10 to-transparent',
      glow: 'shadow-fuchsia-500/20',
      chips: ['Responsive', 'Accessibility', 'UI system', 'Performance'],
    },
  },
];
