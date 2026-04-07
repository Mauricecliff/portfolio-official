import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  Code2,
  Github,
  Globe,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Sparkles,
  X,
} from "lucide-react";

type PageKey = "home" | "projects" | "about" | "contact";

type Project = {
  title: string;
  category: string;
  description: string;
  highlights: string[];
  stack: string[];
  live: string;
  code: string;
  featured: boolean;
  metrics: string[];
  preview: {
    eyebrow: string;
    headline: string;
    subtext: string;
    accent: string;
    glow: string;
    chips: string[];
  };
};

export default function PortfolioPage() {
  const [activePage, setActivePage] = useState<PageKey>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const skills = {
    frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Material UI",
      "Sass",
      "Bootstrap",
    ],
    state: ["Redux Toolkit", "Zustand", "TanStack Query", "REST API Integration"],
    performance: [
      "Core Web Vitals Optimization",
      "SSR / SSG",
      "Lazy Loading",
      "Code Splitting",
      "Image Optimization",
      "SEO Best Practices",
    ],
    tools: [
      "Git",
      "GitHub",
      "Firebase",
      "Vercel",
      "Lighthouse",
      "Chrome DevTools",
      "AI-assisted workflows",
    ],
  };

  const projects: Project[] = [
    {
      title: "EasySpend Fintech Experience",
      category: "Fintech Product Work",
      description:
        "Frontend engineering work focused on onboarding, wallet funding flows, OTP verification, PIN setup, analytics instrumentation, and friction reduction across fintech user journeys.",
      highlights: [
        "Improved onboarding UX for verification and success-state flows",
        "Worked on payment routing and wallet funding experience",
        "Integrated event tracking and conversion-oriented UI behavior",
        "Applied scalable component patterns for maintainability",
      ],
      stack: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS", "Analytics"],
      live: "https://app.easyspend.cc/",
      code: "https://github.com/Mauricecliff",
      featured: true,
      metrics: ["Conversion-aware onboarding", "Real product environment", "Analytics-informed UX"],
      preview: {
        eyebrow: "Wallet funding flow",
        headline: "Fintech onboarding built for trust, speed, and completion.",
        subtext: "Focused on OTP, PIN setup, payment routing, and friction reduction across critical user actions.",
        accent: "from-emerald-400/30 via-cyan-400/10 to-transparent",
        glow: "shadow-emerald-500/20",
        chips: ["OTP", "PIN", "Funding", "Analytics"],
      },
    },
    {
      title: "Jovalink E-commerce Platform",
      category: "E-commerce",
      description:
        "A scalable commerce frontend built around product discovery, dynamic region-based experiences, cart flows, and API-driven checkout interactions.",
      highlights: [
        "Dynamic product discovery with search, category filters, and region logic",
        "Reusable UI architecture for scalable storefront experiences",
        "Performance-conscious rendering and polished responsive design",
        "Integrated backend APIs for cart and checkout workflows",
      ],
      stack: ["Next.js", "TypeScript", "Redux", "Zustand", "Tailwind CSS", "MUI"],
      live: "https://app.jovalink.shop/",
      code: "https://github.com/Mauricecliff",
      featured: true,
      metrics: ["Scalable storefront UI", "API-driven cart flows", "Responsive commerce UX"],
      preview: {
        eyebrow: "Product discovery system",
        headline: "Commerce UI engineered for discoverability and smooth checkout flow.",
        subtext: "Built around categories, search, region logic, reusable components, and conversion-focused product browsing.",
        accent: "from-amber-400/25 via-orange-400/10 to-transparent",
        glow: "shadow-amber-500/20",
        chips: ["Search", "Cart", "Regions", "Checkout"],
      },
    },
    {
      title: "Snookerz Platform",
      category: "Web Platform",
      description:
        "Modern responsive frontend focused on UI consistency, accessibility, and performance optimization across devices.",
      highlights: [
        "Built reusable UI patterns to speed development",
        "Improved responsiveness across desktop, tablet, and mobile",
        "Strengthened overall user experience with cleaner component structure",
      ],
      stack: ["React", "Next.js", "JavaScript", "CSS"],
      live: "https://snookerz.com/",
      code: "https://github.com/Mauricecliff",
      featured: false,
      metrics: ["Responsive delivery", "Reusable UI system", "Cleaner page experience"],
      preview: {
        eyebrow: "Platform modernization",
        headline: "A cleaner, faster interface across devices and breakpoints.",
        subtext: "Focused on consistency, accessible interactions, and reusable frontend patterns for long-term maintainability.",
        accent: "from-fuchsia-400/25 via-violet-400/10 to-transparent",
        glow: "shadow-fuchsia-500/20",
        chips: ["Responsive", "Accessibility", "UI system", "Performance"],
      },
    },
  ];

  const experience = [
    {
      company: "EasySpend",
      role: "Frontend Engineer",
      type: "Remote",
      period: "Mar 2026 – Apr 2026",
      points: [
        "Worked on fintech onboarding and wallet funding journeys with conversion-focused UX improvements.",
        "Contributed to PIN setup, OTP verification, payment flow states, and analytics tracking.",
        "Improved user clarity across critical actions and success-state experiences.",
      ],
    },
    {
      company: "Oaks Intelligence",
      role: "Frontend Engineer",
      type: "Remote",
      period: "Nov 2024 – Dec 2025",
      points: [
        "Built and scaled an e-commerce frontend using Next.js and TypeScript.",
        "Implemented product search, filtering, pagination, and reusable UI systems.",
        "Improved performance, SEO structure, and maintainability across the platform.",
      ],
    },
    {
      company: "TopIbro Technologies",
      role: "Frontend Engineer",
      type: "Onsite",
      period: "Aug 2023 – Nov 2024",
      points: [
        "Led frontend delivery for snookerz.com with strong focus on accessibility and responsiveness.",
        "Improved UI consistency and overall page experience with reusable components.",
      ],
    },
  ];

  const navigation = [
    { key: "home", label: "Home" },
    { key: "projects", label: "Projects" },
    { key: "about", label: "About" },
    { key: "contact", label: "Contact" },
  ] as const;

  const pageTitle = useMemo(() => {
    if (activePage === "projects") return "Project previews, case-study feel, and live proof of work.";
    if (activePage === "about") return "Experience, frontend depth, and what makes me valuable on product teams.";
    if (activePage === "contact") return "Reach out for remote roles, contracts, or product collaborations.";
    return "I build high-performance frontend experiences for fintech, e-commerce, and modern product teams.";
  }, [activePage]);

  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -12 },
    transition: { duration: 0.45, ease: "easeOut" as const },
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-white selection:bg-amber-400 selection:text-neutral-950">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.13),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.14),transparent_24%),linear-gradient(to_bottom,#080808,#111111)]" />

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-6 md:px-10 lg:px-12">
        <motion.header
          className="sticky top-4 z-40 mb-10 rounded-[1.6rem] border border-white/10 bg-neutral-950/70 px-5 py-4 backdrop-blur-xl"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => setActivePage("home")}
              className="text-left"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-amber-300">Maurice Oseh</p>
              <p className="mt-1 text-sm text-white/65">Senior Frontend Engineer</p>
            </button>

            <div className="hidden items-center gap-2 md:flex">
              {navigation.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActivePage(item.key)}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    activePage === item.key
                      ? "bg-white text-neutral-950"
                      : "bg-white/5 text-white/75 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Mauricecliff"
                className="hidden rounded-full border border-white/10 bg-white/5 p-2.5 text-white/75 transition hover:bg-white/10 hover:text-white md:inline-flex"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/in/oseh-maurice-537b2210a"
                className="hidden rounded-full border border-white/10 bg-white/5 p-2.5 text-white/75 transition hover:bg-white/10 hover:text-white md:inline-flex"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="inline-flex rounded-full border border-white/10 bg-white/5 p-2.5 text-white/80 md:hidden"
              >
                {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden md:hidden"
              >
                <div className="mt-4 grid gap-2 border-t border-white/10 pt-4">
                  {navigation.map((item) => (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => {
                        setActivePage(item.key);
                        setMobileMenuOpen(false);
                      }}
                      className={`rounded-2xl px-4 py-3 text-left text-sm transition ${
                        activePage === item.key
                          ? "bg-white text-neutral-950"
                          : "bg-white/5 text-white/75"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>

        <motion.section
          className="mb-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              Open to remote global opportunities
            </div>

            <div className="space-y-4">
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
                {pageTitle}
              </h1>
              <p className="max-w-3xl text-base leading-8 text-white/72 md:text-lg">
                Frontend engineer with 6+ years of experience shipping scalable web applications with React, Next.js, and TypeScript. I focus on architecture, performance, conversion-aware UX, and polished interfaces that help products grow.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => setActivePage("projects")}
                className="rounded-2xl bg-amber-400 px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:-translate-y-0.5"
              >
                Explore Projects
              </button>
              <button
                type="button"
                onClick={() => setActivePage("contact")}
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact Me
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Years Experience", value: "6+" },
                { label: "Core Stack", value: "React / Next.js / TS" },
                { label: "Focus", value: "Performance + UX" },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                >
                  <p className="text-2xl font-semibold text-white">{item.value}</p>
                  <p className="mt-2 text-sm text-white/60">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/30 backdrop-blur"
            whileHover={{ y: -5, scale: 1.01 }}
          >
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-neutral-900">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/55">
                  Deploy-ready Next.js portfolio
                </div>
              </div>
              <div className="space-y-4 p-5">
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-amber-400/10 via-white/5 to-emerald-400/10 p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-amber-300">Current Positioning</p>
                      <h2 className="mt-2 text-2xl font-semibold">Senior Frontend Engineer</h2>
                    </div>
                    <motion.div
                      className="rounded-2xl bg-amber-400/15 px-3 py-2 text-xs font-medium text-amber-300"
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      AI-Enhanced Workflow
                    </motion.div>
                  </div>
                  <p className="text-sm leading-7 text-white/70">
                    Strong background in commerce and fintech frontend systems with practical experience in component-driven architecture, state management, SEO, analytics instrumentation, and performance optimization.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Reusable component systems",
                    "API-driven product flows",
                    "Conversion-focused UX",
                    "Production-grade frontend architecture",
                  ].map((item) => (
                    <motion.div
                      key={item}
                      whileHover={{ x: 4 }}
                      className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/80"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <AnimatePresence mode="wait">
          {activePage === "home" && (
            <motion.section key="home" {...fadeUp} className="space-y-10">
              <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
                  <div className="mb-5 flex items-center gap-3 text-amber-300">
                    <Sparkles className="h-5 w-5" />
                    <p className="text-sm uppercase tracking-[0.25em]">Featured project previews</p>
                  </div>
                  <div className="space-y-4">
                    {projects.slice(0, 2).map((project) => (
                      <button
                        key={project.title}
                        type="button"
                        onClick={() => {
                          setSelectedProject(project);
                          setActivePage("projects");
                        }}
                        className="group w-full rounded-[1.5rem] border border-white/10 bg-neutral-900/60 p-4 text-left transition hover:border-amber-300/30"
                      >
                        <ProjectPreviewCard project={project} compact />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid gap-6">
                  <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
                    <div className="mb-4 flex items-center gap-3 text-emerald-300">
                      <Code2 className="h-5 w-5" />
                      <p className="text-sm uppercase tracking-[0.25em]">Engineering value</p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {[
                        "Performance-first mindset",
                        "AI-assisted productivity",
                        "Business-aware engineering",
                        "Scalable frontend systems",
                      ].map((item) => (
                        <motion.div
                          key={item}
                          whileHover={{ y: -4 }}
                          className="rounded-2xl border border-white/10 bg-neutral-900/50 p-4 text-sm text-white/75"
                        >
                          {item}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
                    <div className="mb-4 flex items-center gap-3 text-sky-300">
                      <Globe className="h-5 w-5" />
                      <p className="text-sm uppercase tracking-[0.25em]">Deploy-ready structure</p>
                    </div>
                    <div className="space-y-3 text-sm leading-7 text-white/68">
                      <p>This preview is designed so it can be split into App Router pages like:</p>
                      <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-4 font-mono text-xs text-white/75">
                        app/page.tsx<br />
                        app/projects/page.tsx<br />
                        app/about/page.tsx<br />
                        app/contact/page.tsx<br />
                        app/layout.tsx<br />
                        components/portfolio/*
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {activePage === "projects" && (
            <motion.section key="projects" {...fadeUp} className="space-y-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-amber-300">Selected Work</p>
                  <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Project previews that feel closer to real case studies.</h2>
                </div>
                <p className="max-w-2xl text-sm leading-7 text-white/65 md:text-base">
                  Each project card now includes a richer UI preview area so recruiters immediately see product context before reading the details.
                </p>
              </div>

              <div className="grid gap-6 xl:grid-cols-2">
                {projects.map((project) => (
                  <motion.article
                    key={project.title}
                    whileHover={{ y: -8 }}
                    className={`overflow-hidden rounded-[2rem] border ${
                      project.featured ? "border-amber-300/20 bg-amber-300/[0.06]" : "border-white/10 bg-white/5"
                    }`}
                  >
                    <div className="p-5 pb-0">
                      <ProjectPreviewCard project={project} />
                    </div>

                    <div className="p-6 pt-5">
                      <div className="mb-5 flex items-center justify-between gap-3">
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/65">
                          {project.category}
                        </span>
                        {project.featured && (
                          <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-medium text-emerald-300">
                            Featured
                          </span>
                        )}
                      </div>

                      <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-white/68">{project.description}</p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.metrics.map((metric) => (
                          <span key={metric} className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-white/75">
                            {metric}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 space-y-3">
                        {project.highlights.map((highlight) => (
                          <motion.div key={highlight} className="flex items-start gap-3 text-sm text-white/75" whileHover={{ x: 4 }}>
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-300" />
                            <span>{highlight}</span>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.stack.map((item) => (
                          <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white/75">
                            {item}
                          </span>
                        ))}
                      </div>

                      <div className="mt-8 flex flex-wrap gap-3">
                        <a
                          href={project.live}
                          className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-neutral-950 transition hover:opacity-90"
                        >
                          Live Demo <ArrowUpRight className="h-4 w-4" />
                        </a>
                        <a
                          href={project.code}
                          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-transparent px-4 py-2 text-sm font-medium text-white transition hover:bg-white/5"
                        >
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
            </motion.section>
          )}

          {activePage === "about" && (
            <motion.section key="about" {...fadeUp} className="space-y-8">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-amber-300">About</p>
                <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Frontend depth, experience, and product-aware execution.</h2>
              </div>

              <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
                  <div className="mb-4 flex items-center gap-3 text-amber-300">
                    <Briefcase className="h-5 w-5" />
                    <p className="text-sm uppercase tracking-[0.25em]">Experience</p>
                  </div>
                  <div className="grid gap-5">
                    {experience.map((item) => (
                      <motion.article
                        key={`${item.company}-${item.period}`}
                        whileHover={{ y: -4 }}
                        className="rounded-[1.5rem] border border-white/10 bg-neutral-900/50 p-5"
                      >
                        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                          <div>
                            <h3 className="text-xl font-semibold text-white">
                              {item.role} <span className="text-white/45">— {item.company}</span>
                            </h3>
                            <p className="mt-2 text-sm text-amber-300">{item.type}</p>
                          </div>
                          <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/65">
                            {item.period}
                          </div>
                        </div>
                        <div className="mt-5 grid gap-3">
                          {item.points.map((point) => (
                            <div key={point} className="flex items-start gap-3 text-sm leading-7 text-white/72">
                              <span className="mt-3 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </div>

                <div className="grid gap-6">
                  <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
                    <div className="mb-5 flex items-center gap-3 text-sky-300">
                      <Code2 className="h-5 w-5" />
                      <p className="text-sm uppercase tracking-[0.25em]">Skills & expertise</p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                      {Object.entries(skills).map(([key, value]) => (
                        <motion.div
                          key={key}
                          whileHover={{ y: -4 }}
                          className="rounded-[1.5rem] border border-white/10 bg-neutral-900/50 p-5"
                        >
                          <h3 className="mb-4 text-lg font-semibold capitalize text-white">{key}</h3>
                          <div className="flex flex-wrap gap-2">
                            {value.map((item) => (
                              <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white/75">
                                {item}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
                    <div className="mb-4 flex items-center gap-3 text-emerald-300">
                      <Sparkles className="h-5 w-5" />
                      <p className="text-sm uppercase tracking-[0.25em]">Why hire me</p>
                    </div>
                    <p className="text-sm leading-7 text-white/68 md:text-base">
                      I bring more than UI implementation. I think deeply about performance, recruiter-facing polish, product clarity, frontend architecture, analytics-informed UX, and the details that improve conversion and user trust. I use modern AI tools professionally for refactoring, debugging, architecture support, and delivery acceleration.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {activePage === "contact" && (
            <motion.section key="contact" {...fadeUp} className="space-y-8">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-amber-300">Contact</p>
                <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Let’s build something meaningful together.</h2>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/72 md:text-base">
                  I’m open to remote frontend engineering roles, contract opportunities, and product-focused collaborations across fintech, SaaS, e-commerce, and modern web platforms.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: "Email",
                    value: "mauricecliff007@gmail.com",
                    href: "mailto:mauricecliff007@gmail.com",
                    icon: Mail,
                  },
                  {
                    title: "GitHub",
                    value: "github.com/Mauricecliff",
                    href: "https://github.com/Mauricecliff",
                    icon: Github,
                  },
                  {
                    title: "LinkedIn",
                    value: "linkedin.com/in/oseh-maurice-537b2210a",
                    href: "https://linkedin.com/in/oseh-maurice-537b2210a",
                    icon: Linkedin,
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.title}
                      href={item.href}
                      whileHover={{ y: -5 }}
                      className="rounded-[2rem] border border-white/10 bg-white/5 p-7 transition hover:border-amber-300/25"
                    >
                      <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-neutral-900/50 p-3 text-amber-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="text-sm uppercase tracking-[0.2em] text-white/50">{item.title}</p>
                      <p className="mt-3 break-all text-base text-white/80">{item.value}</p>
                    </motion.a>
                  );
                })}
              </div>

              <div className="rounded-[2rem] border border-amber-300/20 bg-gradient-to-br from-amber-400/10 via-white/5 to-emerald-400/10 p-8 md:p-10">
                <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-amber-300">Deployment notes</p>
                    <h3 className="mt-3 text-2xl font-semibold">Multi-page and deploy-ready direction</h3>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72 md:text-base">
                      This UI is structured so it can be cleanly split into a Next.js App Router project with reusable portfolio components, route-based pages, metadata, and Vercel deployment.
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-neutral-900/60 p-5 font-mono text-xs leading-7 text-white/70">
                    app/layout.tsx<br />
                    app/page.tsx<br />
                    app/projects/page.tsx<br />
                    app/about/page.tsx<br />
                    app/contact/page.tsx<br />
                    components/portfolio/*<br />
                    app/sitemap.ts<br />
                    app/robots.ts
                  </div>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-4 backdrop-blur-sm md:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] w-full max-w-3xl overflow-auto rounded-[2rem] border border-white/10 bg-neutral-950 p-5 shadow-2xl shadow-black/50"
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-amber-300">Project details</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{selectedProject.title}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="rounded-full border border-white/10 bg-white/5 p-2 text-white/75"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <ProjectPreviewCard project={selectedProject} />

              <div className="mt-6 grid gap-6 md:grid-cols-[1fr_0.9fr]">
                <div>
                  <p className="text-sm leading-7 text-white/72">{selectedProject.description}</p>
                  <div className="mt-5 space-y-3">
                    {selectedProject.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-3 text-sm text-white/75">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-300" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-5">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-white/45">Stack</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {selectedProject.stack.map((item) => (
                        <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white/75">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-white/45">Impact lens</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {selectedProject.metrics.map((item) => (
                        <span key={item} className="rounded-full bg-emerald-400/10 px-3 py-2 text-sm text-emerald-200">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <a href={selectedProject.live} className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-neutral-950">
                      Live Demo <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <a href={selectedProject.code} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white">
                      Source Code <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

function ProjectPreviewCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <div className={`overflow-hidden rounded-[1.6rem] border border-white/10 bg-neutral-950 ${compact ? "" : "shadow-xl shadow-black/20"}`}>
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/45">
          Live product preview
        </div>
      </div>

      <div className="p-4">
        <div className={`relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-gradient-to-br ${project.preview.accent} ${project.preview.glow} p-5`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_24%)]" />
          <div className="relative z-10">
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/55">{project.preview.eyebrow}</p>
            <h4 className={`mt-3 font-semibold text-white ${compact ? "text-lg leading-8" : "text-2xl leading-9"}`}>
              {project.preview.headline}
            </h4>
            <p className={`mt-3 max-w-xl text-white/70 ${compact ? "text-sm leading-7" : "text-sm leading-7"}`}>
              {project.preview.subtext}
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/45">Feature clusters</p>
                  <div className="text-xs text-emerald-200">Production-facing</div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.preview.chips.map((chip) => (
                    <span key={chip} className="rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/80">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/45">Frontend lens</p>
                  <div className="text-xs text-amber-200">UX + architecture</div>
                </div>
                <div className="grid gap-2">
                  {project.metrics.slice(0, 2).map((item) => (
                    <div key={item} className="rounded-xl bg-white/5 px-3 py-2 text-xs text-white/75">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
