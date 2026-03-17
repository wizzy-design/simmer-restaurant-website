import { MetadataRoute } from 'next'
import { restaurantConfig } from '../config/restaurant'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: `${restaurantConfig.baseUrl}/sitemap.xml`,
  }
}
