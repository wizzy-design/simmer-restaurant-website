import JsonLd from '@/components/seo/json-ld';
import { restaurantConfig } from '@/config/restaurant';

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
}

const ServiceSchema: React.FC<ServiceSchemaProps> = ({ name, description, url, image }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: name,
    description: description,
    provider: {
      '@type': 'Restaurant',
      name: restaurantConfig.name,
      url: restaurantConfig.baseUrl,
    },
    url: `${restaurantConfig.baseUrl}${url}`,
    image: image ? image : restaurantConfig.seoImages.logo,
  };

  return <JsonLd data={schema} />;
};

export default ServiceSchema;
