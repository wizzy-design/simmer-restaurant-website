import { Metadata } from "next";
import CateringScreen from "../../../screens/services/catering";

export const metadata: Metadata = {
  title: "Catering Services | Simmer Restaurant",
  description:
    "Make your events unforgettable with Simmer Restaurant’s exceptional catering services! Excellence in every bite for weddings, corporate events, and more.",
};

export default function CateringServicesPage() {
  return <CateringScreen />;
}
