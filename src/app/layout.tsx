import type { Metadata } from "next";
import { Fraunces, Instrument_Sans, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";

/*
 * Self-hosted at build time by next/font — nothing is fetched at runtime,
 * which keeps the static export fully offline-friendly.
 */
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const splineSansMono = Spline_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-code",
});

export const metadata: Metadata = {
  title: `${profile.name} · ${profile.headline}`,
  description: profile.bio,
  openGraph: {
    title: profile.name,
    description: profile.bio,
    type: "profile",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${fraunces.variable} ${instrumentSans.variable} ${splineSansMono.variable}`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
