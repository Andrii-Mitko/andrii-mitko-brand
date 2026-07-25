import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://andrii-mitko.vercel.app"),

  title: {
    default: "Andrii Mitko | Full Stack JavaScript Developer",
    template: "%s | Andrii Mitko",
  },

  description:
    "Full Stack JavaScript Developer specializing in React, Next.js, TypeScript, Node.js and MongoDB. Building modern, scalable and responsive web applications.",

  keywords: [
    "Andrii Mitko",
    "Full Stack Developer",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Portfolio",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
  ],

  authors: [
    {
      name: "Andrii Mitko",
    },
  ],

  creator: "Andrii Mitko",

  applicationName: "Andrii Mitko Portfolio",

  openGraph: {
    type: "website",
    locale: "en_US",

    url: "https://andrii-mitko.vercel.app",

    title: "Andrii Mitko | Full Stack JavaScript Developer",

    description:
      "Full Stack JavaScript Developer specializing in React, Next.js, TypeScript, Node.js and MongoDB.",

    siteName: "Andrii Mitko Portfolio",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Andrii Mitko Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",

    title: "Andrii Mitko | Full Stack JavaScript Developer",

    description:
      "Full Stack JavaScript Developer specializing in React, Next.js, TypeScript, Node.js and MongoDB.",

    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://andrii-mitko.vercel.app",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
