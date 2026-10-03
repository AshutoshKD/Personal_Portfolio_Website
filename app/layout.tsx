import type { Metadata } from "next";
import { Figtree, IBM_Plex_Mono, Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ashutosh Dubey | Software Engineer",
  description:
    "Software Engineer specializing in distributed systems, Go, and real-time applications. Currently at Netcore Cloud.",
  keywords: [
    "Software Engineer",
    "Go",
    "Distributed Systems",
    "Backend Developer",
    "WebRTC",
    "Microservices",
    "Ashutosh Dubey",
  ],
  authors: [{ name: "Ashutosh Dubey" }],
  openGraph: {
    title: "Ashutosh Dubey | Software Engineer",
    description:
      "Software Engineer specializing in distributed systems, Go, and real-time applications.",
    type: "website",
    url: "https://ashutosh-dubey-portfolio.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${figtree.variable} ${syne.variable} ${plexMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
