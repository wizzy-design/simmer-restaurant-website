import { Metadata } from "next";
import RulesScreen from "../../screens/rules";

export const metadata: Metadata = {
  title: "House Rules & Policies | Simmer Restaurant",
  description:
    "Review our house rules, guidelines, and buffet terms & conditions for Simmer Restaurant.",
};

export default function RulesPage() {
  return <RulesScreen />;
}
