import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const soriaFont = localFont({
  src: "../public/soria-font.ttf",
  variable: "--font-soria",
});

const vercettiFont = localFont({
  src: "../public/Vercetti-Regular.woff",
  variable: "--font-vercetti",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.verginasharley.in"),
  title: "Vergina Sharley MS | Digital Marketing",
  description: "Vergina Sharley MS is a digital marketing strategist from Coimbatore, India, focused on SEO, paid ads, social media, and content-led brand growth.",
  keywords: "Vergina Sharley MS, digital marketing, digital marketer in Coimbatore, SEO specialist India, social media marketing Coimbatore, performance marketing, content strategy, brand growth",
  authors: [{ name: "Vergina Sharley MS" }],
  creator: "Vergina Sharley MS",
  publisher: "Vergina Sharley MS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Vergina Sharley MS | Digital Marketing Strategist",
    description: "Digital marketing portfolio for Vergina Sharley MS, based in Coimbatore, India.",
    url: "https://www.verginasharley.in",
    siteName: "Vergina Sharley MS Portfolio",
    images: ["/opengraph-image.png"],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vergina Sharley MS | Digital Marketing Strategist",
    description: "SEO, performance marketing, content strategy, and social media growth in Coimbatore, India.",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.googleAnalyticsId || "";

  return (
    <html lang="en-IN" className="overscroll-y-none">
      <body
        className={`${soriaFont.variable} ${vercettiFont.variable} font-sans antialiased`}
      >
        {children}
      </body>
      {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
    </html>
  );
}
