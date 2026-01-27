import { Outfit } from "next/font/google";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import { ReactNode } from "react";
import Header from "components/Header";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "Prawns Lake Watamu | Best Sunset Seafood Restaurant & Mangrove Dining",
  description:
    "Prawns Lake Watamu — Enjoy fresh seafood, signature prawn samosas, and breathtaking mangrove sunset views at the best sunset dining spot near Mida Creek. A community-run eco-tourism restaurant with seafood, cocktails & unforgettable sunsets.",
  keywords: [
    "Watamu sunset restaurant",
    "seafood restaurant Watamu",
    "prawn samosa restaurant",
    "fresh seafood Watamu",
    "mangrove dining Watamu",
    "eco-tourism restaurant Kenya",
    "Watamu creek dining",
    "Mida Creek seafood",
    "best seafood Watamu",
    "sunset dining Watamu",
  ],
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
