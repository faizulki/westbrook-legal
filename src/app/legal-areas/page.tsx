import type { Metadata } from "next";
import { LegalAreasView } from "@/components/views/LegalAreasView";

export const metadata: Metadata = {
  title: "Legal areas",
  description:
    "Areas of law at Westbrook Legal: business law, family law, migration law, international law, and plaintiff's counsel.",
};

export default function LegalAreasPage() {
  return <LegalAreasView />;
}
