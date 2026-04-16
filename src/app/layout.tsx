import type { Metadata } from "next";
import { Encode_Sans } from "next/font/google";
import "./globals.css";

const encodeSans = Encode_Sans({
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
  variable: "--font-encode-sans",
});

export const metadata: Metadata = {
  title: "Dexena — Build. Brand. Growth.",
  description:
    "Digitalagentur für Entwicklung, Marketing und Design. Effiziente IT-Lösungen für Ihr Unternehmen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${encodeSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
