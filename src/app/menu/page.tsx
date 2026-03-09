import MenuScreen from "@/src/screens/menu";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full Menu | Simm3r Restaurant",
  description:
    "Explore our diverse menu featuring authentic West African flavors, continental classics, and signature cocktails. Search and curate your reservation list.",
  openGraph: {
    title: "Full Menu | Simm3r Restaurant",
    description:
      "Explore our diverse menu featuring authentic West African flavors and continental classics.",
    images: ["/hero2.png"],
  },
};

export default function MenuPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: "Simm3r Restaurant Menu",
    description: "Exquisite menu featuring African and international flavors.",
    publisher: {
      "@type": "Restaurant",
      name: "Simm3r Restaurant",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MenuScreen />
    </>
  );
}
