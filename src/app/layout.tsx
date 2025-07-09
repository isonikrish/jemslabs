import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jems Labs - Build, Launch, and Market Your MVP",
  description: "Jems Labs helps startups and businesses transform ideas into successful products by building, launching, and marketing high-quality MVPs with cutting-edge technology and proven growth strategies.",
  keywords: [
    "MVP development services",
    "custom MVP development",
    "website development services",
    "professional website development",
    "full-stack web development",
    "build and launch an MVP",
    "MVP marketing strategies",
    "scale your startup MVP",
    "software development agency for startups",
    "startup product development",
    "jems labs",
    "business website development",
    "custom business websites",
    "frontend and backend web development",
    "modern web development solutions",
    "responsive web design and development",
    "fast and scalable web applications",
    "Next.js web development",
    "React web development services",
    "SaaS application development",
    "AI-powered web solutions",
  ],
  openGraph: {
    title: "Jems Labs - Build, Launch, and Market Your MVP",
    description: "Transform your startup ideas into successful products with Jems Labs. We build, launch, and market high-quality MVPs with cutting-edge technology.",
    url: "https://jemslabs.xyz",
    siteName: "Jems Labs",
    images: [
      {
        url: "https://jemslabs.xyz/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jems Labs - MVP Development",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@jems_labs",
    title: "Jems Labs - Build, Launch, and Market Your MVP",
    description: "Transform your startup ideas into successful products with Jems Labs. We build, launch, and market high-quality MVPs with cutting-edge technology.",
    images: ["https://jemslabs.xyz/og-image.png"],
  },
  metadataBase: new URL("https://jemslabs.xyz"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="keywords" content="MVP development, website development services, professional web development, SaaS application development, Next.js web development, React web development, AI-powered web solutions, startup product development, frontend and backend development, responsive web design" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jems_labs" />
        <meta name="twitter:title" content="Jems Labs - Build, Launch, and Market Your MVP" />
        <meta name="twitter:description" content="Transform your startup ideas into successful products with Jems Labs. We build, launch, and market high-quality MVPs with cutting-edge technology." />
        <meta name="twitter:image" content="https://jemslabs.xyz/og-image.png" />
      </head>
      <body className={`${urbanist.variable}  min-h-screen flex flex-col font-sans`}>
        <Navbar />
        <main className="flex-1">
  {children}
</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS!} />
    </html>
  );
}
