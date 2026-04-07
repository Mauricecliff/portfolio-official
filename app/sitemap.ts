import type { MetadataRoute } from 'next';

const baseUrl = 'https://maurice-oseh-portfolio.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', '/projects', '/about', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }));
}
