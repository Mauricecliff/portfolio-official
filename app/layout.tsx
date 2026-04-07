import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/portfolio/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Maurice Oseh | Senior Frontend Engineer',
    template: '%s | Maurice Oseh',
  },
  description:
    'Senior Frontend Engineer with 6+ years building high-performance React, Next.js, and TypeScript products in fintech and e-commerce.',
  metadataBase: new URL('https://maurice-oseh-portfolio.vercel.app'),
  openGraph: {
    title: 'Maurice Oseh | Senior Frontend Engineer',
    description:
      'Recruiter-facing portfolio with production-ready frontend architecture, polished UX, and project case-study previews.',
    url: 'https://maurice-oseh-portfolio.vercel.app',
    siteName: 'Maurice Oseh Portfolio',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-neutral-950 text-white selection:bg-amber-400 selection:text-neutral-950`}>
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.13),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.14),transparent_24%),linear-gradient(to_bottom,#080808,#111111)]" />
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-6 md:px-10 lg:px-12">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
