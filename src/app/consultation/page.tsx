import type { Metadata } from "next";
import { BookView } from "@/components/views/BookView";

export const metadata: Metadata = {
  title: "Book a consultation",
  description:
    "Book legal advice with Westbrook Legal — personal meetings and telephone advice. Transparent pricing and clear terms.",
};

export default function ConsultationPage() {
  return <BookView />;
}
