import type { Metadata } from "next";
import { ContactView } from "@/components/views/ContactView";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Westbrook Legal — head office in New York, plus Brooklyn by appointment. Send us a message and we'll call you.",
};

export default function ContactPage() {
  return <ContactView />;
}
