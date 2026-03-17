import { MetadataRoute } from 'next'
import { restaurantConfig } from '../config/restaurant'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = restaurantConfig.baseUrl
  
  const routes = [
    '',
    '/about',
    '/menu',
    '/contact',
    '/services/catering-services',
    '/services/culinary-school',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}
