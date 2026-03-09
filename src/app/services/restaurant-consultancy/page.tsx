import { Metadata } from "next";
import ConsultancyScreen from "../../../screens/services/consultancy";

export const metadata: Metadata = {
  title: "Restaurant Consultancy | Simmer Restaurant",
  description:
    "Transform your culinary vision into a profitable reality. We provide expert advice on menu creation, restaurant management, and kitchen setup.",
};

export default function ConsultancyPage() {
  return <ConsultancyScreen />;
}
