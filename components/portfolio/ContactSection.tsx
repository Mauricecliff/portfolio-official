import { Github, Linkedin, Mail } from 'lucide-react';
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
];

export function ContactSection() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {contacts.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.title}
            href={item.href}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-7 transition hover:border-amber-300/25"
          >
            <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-neutral-900/50 p-3 text-amber-300">
              <Icon className="h-5 w-5" />
            </div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">{item.title}</p>
            <p className="mt-3 break-all text-base text-white/80">{item.value}</p>
          </a>
        );
      })}
    </div>
  );
}
