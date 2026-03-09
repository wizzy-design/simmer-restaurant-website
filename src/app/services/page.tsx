import { Metadata } from "next";
import ServicesScreen from "../../screens/services";

export const metadata: Metadata = {
  title: "Our Services | Simmer Restaurant",
  description:
    "Explore our culinary offerings: from expert Catering and Pastry School to Restaurant Consultancy and the Foodtopia Food Festival.",
};

export default function ServicesPage() {
  return <ServicesScreen />;
}
