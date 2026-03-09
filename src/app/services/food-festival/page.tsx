import { Metadata } from "next";
import FestivalScreen from "../../../screens/services/festival";

export const metadata: Metadata = {
  title: "Foodtopia Food Festival | Simmer Restaurant",
  description:
    "Experience the Flavor of Foodtopia Festival! An annual food festival celebrating the vibrant culinary culture of Plateau State.",
};

export default function FoodFestivalPage() {
  return <FestivalScreen />;
}
