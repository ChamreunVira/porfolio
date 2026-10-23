import type { MetadataRoute } from 'next';
import { portfolio } from '@/data/portfolio';

const BASE_URL = 'https://virachamreun.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1 },
    { path: '/about', priority: 0.8 },
    ...portfolio.projects.map((project) => ({ path: `/projects/${project.id}`, priority: 0.7 })),
  ];

  return routes.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority,
  }));
}
