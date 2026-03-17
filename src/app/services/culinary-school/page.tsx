import { Metadata } from "next";
import CulinarySchoolScreen from "@/screens/services/culinary-school";
import ServiceSchema from "@/components/seo/service-schema";

import { restaurantConfig } from "@/config/restaurant";

export const metadata: Metadata = {
  title: "Simm3r Pastry & Culinary School | Learn Professional Cooking in Jos",
  description:
    "Unleash your culinary creativity at Simm3r Culinary School! Professional pastry modules and cooking classes in Jos. Expert instructors and hands-on training.",
  openGraph: {
    title: "Simm3r Pastry & Culinary School | Learn Professional Cooking in Jos",
    description: "Expert culinary training and professional pastry modules in the heart of Jos.",
    images: [restaurantConfig.seoImages.culinary],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Simm3r Pastry & Culinary School | Professional Training",
    description: "Start your culinary journey with Simm3r's professional courses.",
    images: [restaurantConfig.seoImages.culinary],
  },
};

export default function CulinarySchoolPage() {
  return (
    <>
      <ServiceSchema 
        name="Simm3r Pastry & Culinary School"
        description="Professional culinary and pastry training in Jos, Plateau State."
        url="/services/culinary-school"
        image={restaurantConfig.seoImages.culinary}
      />
      <CulinarySchoolScreen />
    </>
  );
}
