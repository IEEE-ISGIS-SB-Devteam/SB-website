import type { Metadata, Viewport } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { ThemeProvider } from "./components/ThemeProvider";
import { baseMetadata } from "./lib/seo";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
});

// Base metadata (without themeColor)
export const metadata: Metadata = {
  ...baseMetadata,
  // Ensure themeColor is NOT here – it's moved to viewport below
};

// Viewport export – handles themeColor, width, initialScale
export const viewport: Viewport = {
  themeColor: "#00629B", // IEEE Blue
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${openSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}