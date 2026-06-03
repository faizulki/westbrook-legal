import type { Metadata } from "next";
import { AboutView } from "@/components/views/AboutView";

export const metadata: Metadata = {
  title: "About us",
  description:
    "About Westbrook Legal — a general-practice law firm making the law easy to understand and accessible to all, with branches abroad.",
};

export default function AboutPage() {
  return <AboutView />;
}
