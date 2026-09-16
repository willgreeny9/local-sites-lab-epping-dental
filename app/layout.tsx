import type { Metadata } from "next";
import { DM_Sans, Source_Serif_4 } from "next/font/google";
import { ConceptNotice } from "@/components/ConceptNotice";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Epping Dental | NHS & private dentistry on the High Street",
    template: "%s | Epping Dental (concept)",
  },
  description:
    "Concept website for Epping Dental — NHS and private dental care at 59 High Street, Epping. Call 01992 573 484.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${dmSans.variable} ${sourceSerif.variable}`}>
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ScrollToTop />
        <ConceptNotice />
      </body>
    </html>
  );
}
