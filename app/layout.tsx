import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

const ibm = IBM_Plex_Sans({
  variable: "--font-ibm",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmMono = IBM_Plex_Mono({
  variable: "--font-ibm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maskwright.com"),
  title: {
    default: "MaskWright - Local anti-detect browser",
    template: "%s - MaskWright",
  },
  description:
    "Windows-first multi-profile anti-detect browser. Fingerprints, proxies, and sessions stay on your machine. 100% free, no upcharges.",
  keywords: [
    "antidetect browser",
    "multi-profile browser",
    "fingerprint browser",
    "local antidetect",
    "MaskWright",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://maskwright.com",
    siteName: "MaskWright",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${ibm.variable} ${ibmMono.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <div className="grain" aria-hidden="true" />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
