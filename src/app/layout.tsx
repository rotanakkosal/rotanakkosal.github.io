import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/profile";

// No next/font here on purpose: the type stack is GitHub's system-font stack,
// declared as --font-sans in globals.css. Nothing is downloaded.
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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
