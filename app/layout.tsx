import type { Metadata } from "next";
import { Geist_Mono, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "@/components/providers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://emmanuelozioma.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Emmanuel Ozioma — Software Engineer",
    template: "%s · Emmanuel Ozioma",
  },
  description:
    "Full-stack software engineer (Goldman Sachs). APIs, microservices, Kubernetes, Spring Boot, React, .NET—plus GenAI leadership and developer education via OzyCodes.",
  keywords: [
    "Emmanuel Ozioma",
    "software engineer",
    "full-stack",
    "Java",
    "Spring Boot",
    "React",
    "Next.js",
    ".NET",
    "Kubernetes",
    "microservices",
    "fintech",
  ],
  authors: [{ name: "Emmanuel Ozioma", url: siteUrl }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Emmanuel Ozioma",
    title: "Emmanuel Ozioma — Software Engineer",
    description:
      "Full-stack engineer building scalable systems in finance—APIs, cloud-native platforms, and GenAI initiatives.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuel Ozioma — Software Engineer",
    description:
      "Full-stack engineer building scalable systems in finance—APIs, cloud-native platforms, and GenAI initiatives.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${geistMono.variable} ${jetbrainsMono.variable} flex min-h-full flex-col antialiased`}
      >
        <a
          href="#main-content"
          className="focus:bg-background focus:text-foreground focus:border-border sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:border focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
