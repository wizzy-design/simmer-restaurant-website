import { Metadata } from "next";
import AboutScreen from "../../screens/about";

export const metadata: Metadata = {
  title: "About Us | Simmer Restaurant",
  description:
    "Discover the rich history, creative vision, and mission of Simmer Restaurant, led by Executive Chef Jemmy.",
};

export default function AboutPage() {
  return <AboutScreen />;
}
