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
  title: "Vishal Dhavali - Portfolio",
  description: "Full Stack Developer Portfolio of Vishal Dhavali",
  keywords:
    "full stack developer, web development, Python, React, Next.js, portfolio",
  openGraph: {
    title: "Vishal Dhavali - Full Stack Developer",
    description: "Full Stack Developer Portfolio",
    url: "https://my-portfolio-nu-nine-92.vercel.app",
    siteName: "Vishal Dhavali Portfolio",
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
  icons: {
    icon: [
      {
        url: "/vd-logo.png",
        href: "/vd-logo.png",
      },
    ],
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
