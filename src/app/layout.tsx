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
    "Jems Labs is your MVP partner for design, development, and launch. We help early-stage startups build fast, validate quickly, and grow with confidence.",
  keywords: [
    "early-stage startup MVP",
    "MVP design and development",
    "MVP development agency",
    "startup product studio",
    "build MVP fast",
    "AI MVP development",
    "Next.js MVP services",
    "React Native MVP",
    "custom SaaS for startups",
    "startup launch partner",
    "idea to MVP",
    "OpenAI MVP integration",
    "Cloudflare MVP deployment",
    "growth partner for startups",
    "go-to-market strategy",
    "product growth for startups",
    "startup branding and launch",
    "Jems Labs",
    "MVP validation",
    "product development"
  ],
  openGraph: {
    title: "Jems Labs - We build your MVP and help it grow",
    description:
    "Jems Labs is your MVP partner for design, development, and launch. We help early-stage startups build fast, validate quickly, and grow with confidence.",
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
    "Jems Labs is your MVP partner for design, development, and launch. We help early-stage startups build fast, validate quickly, and grow with confidence.",
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
        <meta name="keywords" content="MVP development agency, AI-powered MVPs, startup MVP development, Next.js development services, React Native app development, custom SaaS development, product design for startups, full stack MVP development, OpenAI integration, AI agent systems, infrastructure setup, Cloudflare deployment, Vercel deployment, growth marketing agency, performance marketing, social media growth, go-to-market for startups, Jems Labs, build and grow MVP, startup product agency, early-stage startup MVP, MVP design and development, startup product studio, build MVP fast, AI MVP development, startup launch partner, idea to MVP, OpenAI MVP integration, Cloudflare MVP deployment, growth partner for startups, go-to-market strategy, product growth for startups, startup branding and launch, MVP validation, product development" />

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
