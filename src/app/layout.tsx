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
  title: "Dexena — Website im Aufbau",
  description:
    "Dexena GmbH — Build. Brand. Growth. Unser neuer Auftritt ist im Aufbau. Bald gibt es hier mehr zu entdecken.",
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
