import type { MetadataRoute } from 'next';
import { projects } from '@/data/portfolioData';

const BASE_URL = 'https://chamreunvira.me';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1 },
    { path: '/about', priority: 0.8 },
    ...projects.map((project) => ({ path: `/projects/${project.index}`, priority: 0.7 })),
  ];

  return routes.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority,
  }));
}
