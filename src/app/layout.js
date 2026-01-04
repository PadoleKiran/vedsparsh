import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Providers from "@/components/providers/Providers";
import PromoStrip from "@/components/layout/PromoStrip";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://www.vedsparsh.com"),
  title: {
    default: "VedSparsh — Organic & Spiritual Essentials",
    template: "%s | VedSparsh",
  },
  description:
    "Organic, premium, spiritual products for Indian households. Ghee, pooja essentials, and more.",
  keywords: [
    "VedSparsh",
    "organic ghee",
    "pooja products",
    "Indian household",
    "B2B bulk orders",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-background text-foreground`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <PromoStrip />
          <FloatingWhatsApp />
        </Providers>
      </body>
    </html>
  );
}
