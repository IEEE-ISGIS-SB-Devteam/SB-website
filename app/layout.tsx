import type { Metadata, Viewport } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import Particles from "./components/Particles";
import { ThemeProvider } from "./components/ThemeProvider";
import { baseMetadata } from "./lib/seo";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
});

// Use the base metadata
export const metadata: Metadata = baseMetadata;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${openSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Particles className="fixed inset-0 z-0 h-full w-full" quantity={70} opacity={0.28} />
          <LoadingScreen logoPath="https://i.postimg.cc/SNfyWwDL/Copie-de-Posts-(1)-Photoroom.png" logoAlt="IEEE Tunisia and IEEE ISGIS" />
          <div className="relative z-10 flex min-h-full flex-1 flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}