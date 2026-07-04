import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const archia = localFont({
  variable: "--font-archia",
  display: "swap",
  src: [{ path: "../../public/fonts/archia-regular.woff2", weight: "400", style: "normal" }],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://algori.ai"),
  title: "Algori",
  description: "Consumer panel, reimagined.",
  icons: { icon: "/seo/favicon.ico" },
  openGraph: {
    title: "Algori",
    description: "Consumer panel, reimagined.",
    images: ["/seo/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${archia.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
