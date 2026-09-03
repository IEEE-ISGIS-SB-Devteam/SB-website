import type { Metadata } from "next";

const SITE_NAME = "IEEE ISGIS Student Branch";
const SITE_DESCRIPTION =
  "The official student branch of the Institut Supérieur de Gestion Industrielle de Sfax. Bridging technology, engineering, and innovation.";
const SITE_URL = "https://ieee-isgis.vercel.app";

// Use IEEE’s official master brand logo if possible, or host your own.
// The recommended approach is to download the IEEE logo from
// https://brand-experience.ieee.org/ and place it in /public/ieee-logo.png
const SITE_LOGO = "/ieee-logo.png";

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "IEEE",
    "ISGIS",
    "Student Branch",
    "Engineering",
    "Technology",
    "Innovation",
    "Sfax",
    "Tunisia",
    "Student Organization",
    "Professional Development",
  ],
  authors: [{ name: "IEEE ISGIS Student Branch" }],
  creator: "IEEE ISGIS Student Branch",
  publisher: "IEEE ISGIS Student Branch",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: SITE_LOGO,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [SITE_LOGO],
    site: "@IEEE_ISGIS",
    creator: "@IEEE_ISGIS",
  },
  // Icons – use IEEE’s official favicon set if you have it, otherwise generate.
  // For official IEEE favicons, see:
  // https://brand-experience.ieee.org/guidelines/digital/visual-identity/
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  // ❌ themeColor removed – now in layout.tsx > viewport export
  manifest: "/site.webmanifest",
  category: "Technology",
  classification: "Student Organization",
};

/**
 * Helper to generate page‑specific metadata.
 * Merges page overrides with the base metadata.
 */
export function generatePageMetadata(overrides: Partial<Metadata>): Metadata {
  return {
    ...baseMetadata,
    ...overrides,
    openGraph: {
      ...baseMetadata.openGraph,
      ...(overrides.openGraph || {}),
    },
    twitter: {
      ...baseMetadata.twitter,
      ...(overrides.twitter || {}),
    },
  };
}