import { Metadata } from "next";
import CateringScreen from "@/screens/services/catering";
import ServiceSchema from "@/components/seo/service-schema";

import { restaurantConfig } from "@/config/restaurant";

export const metadata: Metadata = {
  title: "Premium Catering Services in Jos | Simm3r Restaurant",
  description:
    "Professional catering for weddings, corporate events, and private parties in Jos. Excellence in every bite with Simm3r's custom menus and high-end service.",
  openGraph: {
    title: "Premium Catering Services in Jos | Simm3r Restaurant",
    description: "Make your events unforgettable with Simm3r Restaurant’s exceptional catering services! Excellence in every bite.",
    images: [restaurantConfig.seoImages.catering],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Premium Catering Services in Jos | Simm3r Restaurant",
    description: "Exceptional catering services for all your events in Jos.",
    images: [restaurantConfig.seoImages.catering],
  },
};

export default function CateringServicesPage() {
  return (
    <>
      <ServiceSchema 
        name="Simm3r Catering Services"
        description="Premium catering for weddings, corporate events, and private parties in Jos."
        url="/services/catering-services"
        image={restaurantConfig.seoImages.catering}
      />
      <CateringScreen />
    </>
  );
}
