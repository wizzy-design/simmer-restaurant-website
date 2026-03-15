import { Metadata } from "next";
import CulinarySchoolScreen from "../../../screens/services/culinary-school";

export const metadata: Metadata = {
  title: "Simmer Pastry & Culinary School",
  description:
    "Unleash your culinary creativity at Simmer Culinary School! Expert instructors, 5-star reviews, and pastry modules for all levels.",
};

export default function CulinarySchoolPage() {
  return <CulinarySchoolScreen />;
}
