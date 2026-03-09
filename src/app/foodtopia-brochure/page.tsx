import { Metadata } from "next";
import FoodtopiaBrochureScreen from "../../screens/services/brochure";

export const metadata: Metadata = {
  title: "Foodtopia Brochure 2024 | Simmer Restaurant",
  description:
    "Read the official Foodtopia Festival brochure. Learn about our culinary masterclasses, charity events, live music, and how to become a sponsor or vendor.",
};

export default function FoodtopiaBrochurePage() {
  return <FoodtopiaBrochureScreen />;
}
