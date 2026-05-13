import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pineel Studios — Modern Websites & Digital Presence",
  description:
    "Pineel Studios creates refined websites and redesign concepts for clubs, brands and local businesses.",
  metadataBase: new URL("https://pineelstudios.com"),
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.svg"
  },
  openGraph: {
    title: "Pineel Studios",
    description:
      "Modern websites and digital presence for clubs, brands and local businesses.",
    url: "https://pineelstudios.com",
    siteName: "Pineel Studios",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Pineel Studios"
      }
    ],
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
