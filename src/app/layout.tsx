import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Morphly",
  description:
    "Describe your vision, and let our AI transform your words into stunning, customizable 3D characters—effortlessly and in seconds",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
