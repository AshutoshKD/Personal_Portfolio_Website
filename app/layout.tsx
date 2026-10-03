import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { site } from "@/lib/data";

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const description =
  "Ashutosh Dubey is a software engineer at CrowdStrike building distributed systems in Go.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Ashutosh Dubey — Software Engineer",
  description,
  authors: [{ name: site.name }],
  keywords: ["Ashutosh Dubey", "Software Engineer", "Go", "Distributed Systems", "CrowdStrike"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Ashutosh Dubey — Software Engineer",
    description,
    type: "website",
    url: site.url,
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f3ee",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${instrument.variable} ${geist.variable} ${geistMono.variable}`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
