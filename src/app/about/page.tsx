import { Metadata } from "next";
import AboutScreen from "../../screens/about";

import { restaurantConfig } from "@/config/restaurant";

export const metadata: Metadata = {
  title: "Our Story | Simm3r Restaurant & Café",
  description:
    "Discover the rich history, creative vision, and mission of Simm3r Restaurant, led by Executive Chef Jemmy. A haven of culinary excellence in Jos.",
  openGraph: {
    title: "Our Story | Simm3r Restaurant & Café",
    description: "Discover the journey of Simm3r Restaurant and Chef Jemmy.",
    images: [restaurantConfig.seoImages.about],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Our Story | Simm3r Restaurant",
    description: "The history and vision behind Jos's finest dining experience.",
    images: [restaurantConfig.seoImages.about],
  },
};

export default function AboutPage() {
  return <AboutScreen />;
}
