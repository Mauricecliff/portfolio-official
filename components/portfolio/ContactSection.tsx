import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import type { ContactItem } from '@/types/portfolio';

const contacts: ContactItem[] = [
  {
    title: 'Email',
    value: 'mauricecliff007@gmail.com',
    href: 'mailto:mauricecliff007@gmail.com',
    icon: Mail,
  },
  {
    title: 'GitHub',
    value: 'github.com/Mauricecliff',
    href: 'https://github.com/Mauricecliff',
    icon: Github,
  },
  {
    title: 'LinkedIn',
    value: 'linkedin.com/in/oseh-maurice-537b2210a',
    href: 'https://linkedin.com/in/oseh-maurice-537b2210a',
    icon: Linkedin,
  },
  {
    title: 'Phone',
    value: '+2347033554866',
    href: 'tel:+2347033554866',
    icon: Phone,
  },
];

export function ContactSection() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {contacts.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.a
            key={item.title}
            href={item.href}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
            className="rounded-[2rem] border border-neutral-300/70 bg-white/70 p-7 transition hover:border-amber-300/25 dark:border-white/10 dark:bg-white/5"
            initial={{ opacity: 0, y: index % 2 === 0 ? 28 : -28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <div className="mb-5 inline-flex rounded-2xl border border-neutral-300/80 bg-neutral-100 p-3 text-amber-400 dark:border-white/10 dark:bg-neutral-900/50 dark:text-amber-300">
              <Icon className="h-5 w-5" />
            </div>
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 dark:text-white/50">{item.title}</p>
            <p className="mt-3 break-all text-base text-neutral-700 dark:text-white/80">{item.value}</p>
          </motion.a>
        );
      })}
    </div>
  );
}
