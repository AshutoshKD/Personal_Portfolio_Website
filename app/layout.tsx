import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Ashutosh Dubey | Software Engineer",
  description: "Software Engineer specializing in distributed systems, Go, and real-time applications. Currently at Netcore Cloud.",
  keywords: ["Software Engineer", "Go", "Distributed Systems", "Backend Developer", "WebRTC", "Microservices"],
  authors: [{ name: "Ashutosh Dubey" }],
  openGraph: {
    title: "Ashutosh Dubey | Software Engineer",
    description: "Software Engineer specializing in distributed systems, Go, and real-time applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
