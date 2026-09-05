import { generatePageMetadata } from "../lib/seo";
import ChaptersClient from "./page.client";

export const metadata = generatePageMetadata({
  title: "Chapters & Affinity Groups",
  description: "Explore the IEEE ISGIS Student Branch technical chapters and affinity groups.",
  openGraph: {
    title: "Chapters & Affinity Groups | IEEE ISGIS",
    description: "Meet the communities building skills and opportunities inside IEEE ISGIS.",
  },
});

export default function ChaptersPage() {
  return <ChaptersClient />;
}
