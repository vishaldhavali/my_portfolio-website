import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://my-portfolio-nu-nine-92.vercel.app"),
  title: "Vishal Dhavali - Full Stack Developer Portfolio",
  description:
    "Experienced Full Stack Developer specializing in web development, Python, and machine learning. View my projects and skills.",
  keywords:
    "full stack developer, web development, Python, React, Next.js, portfolio",
  openGraph: {
    title: "Vishal Dhavali - Full Stack Developer",
    description:
      "Full Stack Developer Portfolio showcasing web development and machine learning projects",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vishal Dhavali Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishal Dhavali - Full Stack Developer",
    description: "Full Stack Developer Portfolio",
    images: ["/og-image.jpg"],
  },
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
  headers: {
    "Cache-Control": "public, max-age=31536000, immutable",
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to important third-party domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Preload critical assets */}
        <link
          rel="preload"
          href="/fonts/your-main-font.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <TooltipProvider>
          {children}
          <Toaster />
        </TooltipProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
