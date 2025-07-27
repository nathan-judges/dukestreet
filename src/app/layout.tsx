import type { Metadata, Viewport } from "next";
import { Archivo, Instrument_Serif } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Duke St. Studio - Audio, Web, UX/UI Design Services",
  description: "Professional audio, web development, and UX/UI design services for small businesses, NDIS providers, and creative entrepreneurs.",
  keywords: ["audio", "web development", "UX design", "UI design", "small business", "NDIS", "creative services"],
  authors: [{ name: "Duke St. Studio" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} ${instrumentSerif.variable} antialiased bg-dark text-white`}
      >
        {children}
      </body>
    </html>
  );
}
