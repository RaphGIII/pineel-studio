import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pineel Studio — Modern Websites & Digital Presence",
  description:
    "Pineel Studio creates refined websites and redesign concepts for clubs, brands and local businesses.",
  metadataBase: new URL("https://pineelstudio.com"),
  openGraph: {
    title: "Pineel Studio",
    description:
      "Modern websites and digital presence for clubs, brands and local businesses.",
    url: "https://pineelstudio.com",
    siteName: "Pineel Studio",
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
