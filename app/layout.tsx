import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://swimforall.vercel.app"),
  title: "Swim for all - Removing Barriers to Swimming",
  description: "We provide free swim equipment kits to children ages 8-12, removing financial and access barriers to swimming lessons and water safety.",
  icons: {
    icon: [
      {
        url: "/images/swim-for-all-logo-nav.png",
        type: "image/png",
      },
    ],
    shortcut: "/images/swim-for-all-logo-nav.png",
    apple: "/images/swim-for-all-logo-nav.png",
  },
  openGraph: {
    title: "Swim for all - Removing Barriers to Swimming",
    description:
      "We provide free swim equipment kits to children ages 8-12, removing financial and access barriers to swimming lessons and water safety.",
    url: "https://swimforall.vercel.app",
    siteName: "Swim for all",
    images: [
      {
        url: "/images/swim-for-all-share.png",
        width: 1200,
        height: 630,
        alt: "Swim for all",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swim for all - Removing Barriers to Swimming",
    description:
      "We provide free swim equipment kits to children ages 8-12, removing financial and access barriers to swimming lessons and water safety.",
    images: ["/images/swim-for-all-share.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
