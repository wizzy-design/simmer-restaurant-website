import { Metadata } from "next";
import PastrySchoolScreen from "../../../screens/services/pastry-school";

export const metadata: Metadata = {
  title: "Simmer Pastry & Culinary School",
  description:
    "Unleash your culinary creativity at Simmer Culinary School! Expert instructors, 5-star reviews, and pastry modules for all levels.",
};

export default function PastrySchoolPage() {
  return <PastrySchoolScreen />;
}
