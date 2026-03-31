import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://vishaldhavali.vercel.app"),
  title: "Vishal Dhavali - Portfolio",
  description:
    "Vishal Dhavali — Java Backend Developer & AI Enthusiast from Bengaluru. Building Spring Boot APIs, Python automation, and full-stack web apps. Published researcher (IJSREM 2025).",
  keywords:
    "Vishal Dhavali, Java developer Bengaluru, Spring Boot developer, backend developer India, Next.js portfolio, AI developer, IJSREM researcher, full stack developer Bengaluru, Java Spring Boot portfolio, Python developer India",
  openGraph: {
    title: "Vishal Dhavali - Java Backend Developer",
    description:
      "Vishal Dhavali — Java Backend Developer & AI Enthusiast from Bengaluru. Spring Boot, Python, full-stack web apps.",
    url: "https://vishaldhavali.vercel.app",
    siteName: "Vishal Dhavali Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vishal Dhavali - Java Backend Developer Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishal Dhavali - Full Stack Developer",
    description: "Full Stack Developer Portfolio",
    images: [
      {
        url: "/vd-logo.png",
        width: 1200,
        height: 630,
        alt: "Vishal Dhavali Portfolio",
      },
    ],
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
  alternates: {
    canonical: "/",
  },
  // TODO: Replace with real code from https://search.google.com/search-console
  verification: {
    google: "CoKE8k3CYYFgmjYLVwTSvHim3a21FsY-K1nQyNEyM3k",
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
        <meta name="theme-color" content="#0A0118" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Vishal Dhavali",
              url: "https://vishaldhavali.vercel.app",
              jobTitle: "Java Backend Developer",
              description:
                "Java Backend Developer and AI Enthusiast from Bengaluru. Published researcher (IJSREM 2025).",
              knowsAbout: [
                "Java",
                "Spring Boot",
                "Python",
                "Next.js",
                "React",
                "REST APIs",
                "MySQL",
                "Artificial Intelligence",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bengaluru",
                addressCountry: "IN",
              },
              sameAs: [
                "https://www.linkedin.com/in/vishal-dhavali-9a8b442a1/",
                "https://github.com/vishaldhavali",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <TooltipProvider>
          {children}
          <Toaster />
          <SpeedInsights />
          <Analytics />
        </TooltipProvider>
      </body>
    </html>
  );
}
