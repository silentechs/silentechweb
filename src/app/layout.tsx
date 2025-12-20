import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "Silentech Solution | Dream it, we build it",
  description: "Silentech Solution is a Ghanaian-owned web-based application development enterprise. We convert local solutions to web apps.",
  keywords: ["Web Development", "Ghana", "Silentech", "Software Solutions", "NGO Solutions", "StitchCraft"],
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased selection:bg-[#ff4d00] selection:text-black">
        {children}
      </body>
    </html>
  );
}
