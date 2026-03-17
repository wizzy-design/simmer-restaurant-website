import { Metadata } from "next";
import RulesScreen from "../../screens/rules";
import { restaurantConfig } from "@/config/restaurant";

export const metadata: Metadata = {
  title: "House Rules & Policies | Simm3r Restaurant",
  description:
    "Review our house rules, guidelines, and buffet terms & conditions to ensure a serene dining experience at Simm3r Restaurant.",
  openGraph: {
    title: "House Rules & Policies | Simm3r Restaurant",
    description: "Guidelines for a wonderful experience at Simm3r.",
    images: [restaurantConfig.seoImages.logo],
  },
  twitter: {
    card: 'summary',
    title: "House Rules | Simm3r Restaurant",
    description: "Guidelines for diners at Simm3r.",
    images: [restaurantConfig.seoImages.logo],
  },
};

export default function RulesPage() {
  return <RulesScreen />;
}
