import JsonLd from '@/components/seo/json-ld';
import { restaurantConfig } from '@/config/restaurant';

const OrganizationSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: restaurantConfig.name,
    url: restaurantConfig.baseUrl,
    logo: restaurantConfig.seoImages.logo,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: restaurantConfig.contact.phoneRaw,
      contactType: 'customer service',
      email: restaurantConfig.contact.email,
    },
    sameAs: [
      restaurantConfig.socials.facebook,
      restaurantConfig.socials.instagram,
      restaurantConfig.socials.twitter,
    ],
  };

  return <JsonLd data={schema} />;
};

export default OrganizationSchema;
