import { Metadata } from "next";
import ContactScreen from "../../screens/contact";

export const metadata: Metadata = {
  title: "Contact Us | Simmer Restaurant",
  description:
    "Get in touch with Simmer Restaurant. Call us, send an email, or visit our restaurant in Jos.",
};

export default function ContactPage() {
  return <ContactScreen />;
}
