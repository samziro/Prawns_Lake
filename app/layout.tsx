import { Outfit } from "next/font/google";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import { ReactNode } from "react";
import Header from "components/Header";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Prawns Lake Watamu | Best Sunset Seafood Restaurant",
    template: "%s | Prawns Lake Watamu",
  },

  description:
    "Enjoy fresh seafood, signature prawn samosas & breathtaking mangrove sunsets at Prawns Lake Watamu. The best sunset dining experience near Mida Creek, Kenya.",

  keywords: [
    "Prawns Lake Watamu",
    "sunset restaurant Watamu",
    "seafood restaurant Watamu",
    "best prawns Watamu",
    "Mida Creek restaurant",
    "mangrove dining Kenya",
    "Watamu seafood",
  ],

  openGraph: {
    title: "Prawns Lake Watamu | Best Sunset Seafood Restaurant in Kenya",
    description:
      "Fresh seafood, famous prawn samosas & magical mangrove sunset views. Top rated sunset dining spot in Watamu.",
    url: "https://prawnslakewatamu.com", // ← Change to your real domain
    siteName: "Prawns Lake Watamu",
    images: [
      {
        url: "/og-image.webp",           // ← Very Important
        width: 1200,
        height: 630,
        alt: "Prawns Lake Watamu Sunset Dining Experience",
      },
    ],
    locale: "en",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Prawns Lake Watamu - Sunset Seafood Restaurant",
    description:
      "Best sunset dining in Watamu with fresh seafood & mangrove views",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://prawnslakewatamu.com", // ← Update with real domain
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}