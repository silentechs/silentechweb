import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, DM_Mono, Instrument_Sans } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
import { canIndex, organizationSchema, siteOrigin } from "@/lib/seo";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["opsz", "wdth"],
  display: "swap",
});
const body = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const mono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F3F4F9",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  robots: { index: canIndex, follow: canIndex },
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
  title: {
    default: "Software Studio & IT Consultancy in Tamale, Ghana | Silentech",
    template: "%s | Silentech",
  },
  description:
    "Silentech is a software studio in Tamale, Ghana. Custom software and IT consultancy for organisations, plus ready-made products for shops, tailors and schools.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Silentech: software your business can run on",
    description:
      "A software studio in Tamale, Ghana. Custom software, IT consultancy and products for shops, tailors and schools.",
    type: "website",
    locale: "en_GB",
    siteName: "Silentech",
    images: [
      {
        url: "/social/home.png",
        width: 1200,
        height: 630,
        alt: "Silentech: software your business can run on",
      },
    ],
  },
  twitter: { card: "summary_large_image", images: ["/social/home.png"] },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body id="top">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <StructuredData data={organizationSchema} />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
