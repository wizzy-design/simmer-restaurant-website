import MenuScreen from "@/screens/menu";
import { Metadata } from "next";
import { restaurantConfig } from "@/config/restaurant";
import JsonLd from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Our Full Menu | Exquisite African & Continental Cuisine",
  description:
    "Explore Simm3r Restaurant's diverse menu featuring authentic West African flavors, continental classics, and specialty coffee. View our full culinary selection in Jos.",
  openGraph: {
    title: "Full Menu | Simm3r Restaurant & Café",
    description:
      "Explore our diverse menu featuring authentic West African flavors and continental classics.",
    images: [restaurantConfig.seoImages.menu],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Full Menu | Simm3r Restaurant",
    description: "Discover the flavors of Simm3r Restaurant in Jos.",
    images: [restaurantConfig.seoImages.menu],
  },
};

export default function MenuPage() {
  const menuSchema = {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: `${restaurantConfig.name} Menu`,
    description: "Exquisite menu featuring African and international flavors.",
    publisher: {
      "@type": "Restaurant",
      name: restaurantConfig.name,
      url: restaurantConfig.baseUrl,
      address: {
        "@type": "PostalAddress",
        streetAddress: "No 1B, Beside Eliel Event center, Gold and Base",
        addressLocality: "Jos",
        addressRegion: "Plateau",
        addressCountry: "NG",
      },
    },
  };

  return (
    <>
      <JsonLd data={menuSchema} />
      <MenuScreen />
    </>
  );
}
