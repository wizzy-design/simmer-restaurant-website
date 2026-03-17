import JsonLd from '@/components/seo/json-ld';
import { restaurantConfig } from '@/config/restaurant';

const RestaurantSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: restaurantConfig.name,
    image: restaurantConfig.seoImages.logo,
    '@id': restaurantConfig.baseUrl,
    url: restaurantConfig.baseUrl,
    telephone: restaurantConfig.contact.phoneRaw,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No 1B, Beside Eliel Event center, Gold and Base',
      addressLocality: 'Jos',
      addressRegion: 'Plateau',
      postalCode: '930100',
      addressCountry: 'NG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '9.8965', // approximate for Jos, Gold and Base
      longitude: '8.8583',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        opens: '08:00',
        closes: '22:00',
      },
    ],
    sameAs: [
      restaurantConfig.socials.facebook,
      restaurantConfig.socials.instagram,
      restaurantConfig.socials.twitter,
    ],
  };

  return <JsonLd data={schema} />;
};

export default RestaurantSchema;
