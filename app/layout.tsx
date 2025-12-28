import type { Metadata } from "next";
import { Geist, Geist_Mono, Quintessential } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const quintessential = Quintessential({
  weight: "400",
  variable: "--font-quintessential",
  subsets: ["latin"],
});

const bickham = localFont({
  src: "./fonts/Bickham-Script-Pro-Regular.ttf",
  variable: "--font-special",
});

export const metadata: Metadata = {
  title: "Vivian & James",
  description: "Vivian and James wedding website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${quintessential.variable} ${bickham.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <div className="block">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
