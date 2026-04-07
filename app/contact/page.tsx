'use client';

import { motion } from 'framer-motion';
import { ContactSection } from '@/components/portfolio/ContactSection';
import { PageHeader } from '@/components/portfolio/PageHeader';

export default function ContactPage() {
  return (
    <main className="space-y-8">
      <PageHeader
        eyebrow="Contact"
        title="Let’s build something meaningful together."
        description="I’m open to remote frontend engineering roles, contract opportunities, and product-focused collaborations across fintech, SaaS, e-commerce, and modern web platforms."
      />

      <ContactSection />

      <motion.section
        className="rounded-[2rem] border border-amber-300/20 bg-gradient-to-br from-amber-400/20 via-white/80 to-emerald-400/20 p-8 md:p-10 dark:from-amber-400/10 dark:via-white/5 dark:to-emerald-400/10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <p className="text-sm uppercase tracking-[0.25em] text-amber-300">Deployment-ready summary</p>
        <h2 className="mt-3 text-2xl font-semibold">Built for clean Vercel deployment and long-term maintainability.</h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-700 dark:text-white/72 md:text-base">
          This portfolio uses Next.js App Router, reusable TypeScript components, extracted data modules, and standards-compliant metadata for production-ready hosting. You can also reach me directly on +2347033554866.
        </p>
      </motion.section>
    </main>
  );
}
