import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://koshermydevice.com'

  // Static pages
  const staticPages = [
    '',
    '/service',
    '/pricing',
    '/contact',
    '/articles',
    '/enterprise',
    '/enterprise/schools',
    '/enterprise/camps',
    '/enterprise/businesses',
  ]

  // Article slugs
  const articleSlugs = [
    'the-1926-test',
    'smartphone-addiction-crisis',
    'when-should-child-get-phone',
    'device-owner-vs-filters',
    'school-phone-bans-working',
    'dumb-phone-revolution',
    'social-media-teen-mental-health',
    'vpn-bypass-parental-controls',
    'filter-apps-dont-work',
    'dopamine-detox-guide',
    'screen-time-statistics-2026',
    'yeshiva-device-management',
    'summer-camp-phone-policy',
    'shmirat-einayim-digital-age',
    'factory-reset-protection-explained',
  ]

  const currentDate = new Date().toISOString()

  // Generate sitemap entries for static pages
  const staticEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: currentDate,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path === '/service' || path === '/pricing' ? 0.9 : 0.8,
  }))

  // Generate sitemap entries for articles
  const articleEntries: MetadataRoute.Sitemap = articleSlugs.map((slug) => ({
    url: `${baseUrl}/articles/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticEntries, ...articleEntries]
}
