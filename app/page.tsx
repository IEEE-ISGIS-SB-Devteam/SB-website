import type { Metadata } from "next";
import { generatePageMetadata } from "./lib/seo";
import HomePageClient from "./page.client";

export const metadata = generatePageMetadata({
  title: "IEEE ISGIS Student Branch",
  description: "Learn about the IEEE ISGIS Student Branch – our mission, vision, and values.",
  openGraph: {
    title: "About IEEE ISGIS Student Branch",
    description: "Learn about our community, history, and commitment to excellence.",
  },
});

export default function HomePage() {
  return <HomePageClient />;
}