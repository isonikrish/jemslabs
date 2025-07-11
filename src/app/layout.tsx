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
  title: "Jems Labs - We build your MVP and help it grow",
  description:
    "From idea to scale - Jems Labs helps founders design, develop, launch, and grow MVPs.",
  keywords: [
    "MVP development agency",
    "AI-powered MVPs",
    "startup MVP development",
    "Next.js development services",
    "React Native app development",
    "custom SaaS development",
    "product design for startups",
    "full stack MVP development",
    "OpenAI integration",
    "AI agent systems",
    "infrastructure setup",
    "Cloudflare & Vercel deployment",
    "growth marketing agency",
    "performance marketing",
    "social media growth",
    "go-to-market for startups",
    "jems labs",
    "build and grow MVP",
    "startup product agency",
  ],
  openGraph: {
    title: "Jems Labs - We build your MVP and help it grow",
    description:
      "From idea to scale - Jems Labs helps founders design, develop, launch, and grow MVPs.",
    url: "https://jemslabs.xyz",
    siteName: "Jems Labs",
    images: [
      {
        url: "https://jemslabs.xyz/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jems Labs - We build your MVP and help it grow",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@jems_labs",
    title: "Jems Labs - We build your MVP and help it grow",
    description:
      "From idea to scale - Jems Labs helps founders design, develop, launch, and grow MVPs.",
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
        <meta name="keywords" content="MVP development agency, AI-powered MVPs, startup MVP development, Next.js development services, React Native app development, custom SaaS development, product design for startups, full stack MVP development, OpenAI integration, AI agent systems, infrastructure setup, Cloudflare deployment, Vercel deployment, growth marketing agency, performance marketing, social media growth, go-to-market for startups, Jems Labs, build and grow MVP, startup product agency" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jems_labs" />
        <meta name="twitter:title" content="Jems Labs - We build your MVP and help it grow" />
        <meta name="twitter:description" content="From idea to scale - Jems Labs helps founders design, develop, launch, and grow MVPs." />
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
