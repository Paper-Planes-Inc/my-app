import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://paperplanesapp.com/',
      priority: 1.0,
    },
    {
      url: 'https://paperplanesapp.com/brand',
      priority: 0.8,
      images: [
        'https://paperplanesapp.com/assets/paper-planes-logo.png',
      ],
    },
  ]
}
