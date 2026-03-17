import { Metadata } from "next";
import ContactScreen from "../../screens/contact";
import { restaurantConfig } from "@/config/restaurant";

export const metadata: Metadata = {
  title: "Contact Us | Simm3r Restaurant & Café Jos",
  description:
    "Get in touch with Simm3r Restaurant. Call us, send an email, or visit our serene sanctuary in Gold and Base, Jos. Make a reservation today.",
  openGraph: {
    title: "Contact Us | Simm3r Restaurant & Café Jos",
    description: "Contact Simm3r for reservations, inquiries, or catering services.",
    images: [restaurantConfig.seoImages.logo],
  },
  twitter: {
    card: 'summary',
    title: "Contact Simm3r Restaurant",
    description: "We are located at Gold and Base, Jos. Reach out for any inquiries.",
    images: [restaurantConfig.seoImages.logo],
  },
};

export default function ContactPage() {
  return <ContactScreen />;
}
