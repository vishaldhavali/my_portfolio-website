import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vishal Dhavali - Portfolio",
  description: "Full Stack Developer Portfolio showcasing projects and skills",
  keywords: "developer, portfolio, full stack, web development",
  openGraph: {
    title: "Vishal Dhavali - Portfolio",
    description: "Full Stack Developer Portfolio",
    images: ["/path-to-og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TooltipProvider>
          {children}
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  );
}
