import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";

import "./globals.css";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Where in the world?",
  description: "Explore countries of the world",
  authors: [{ name: "Anderson Osayerie", url: "https://andemosa.tech/" }],
  creator: "Anderson Osayerie",
  publisher: "Anderson Osayerie",
  twitter: {
    card: "summary_large_image",
    title: "Where in the world?",
    description: "Explore countries of the world",
    creator: "@andemosa",
    images: ["https://countries-andemosa.vercel.app/images/site-preview.webp"],
  },
  openGraph: {
    title: "Where in the world?",
    description: "Explore countries of the world",
    url: "https://countries-andemosa.vercel.app/",
    siteName: "Where in the world?",
    images: [
      {
        url: "https://countries-andemosa.vercel.app/images/site-preview.webp",
        width: 1024,
        height: 511,
        alt: "Where in the world?",
      },
      {
        url: "https://countries-andemosa.vercel.app/images/site-preview.webp",
        width: 800,
        height: 399,
        alt: "Where in the world?",
      },
      {
        url: "https://countries-andemosa.vercel.app/images/site-preview.webp",
        width: 640,
        height: 320,
        alt: "Where in the world?",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Header />
            <main className="container mx-auto px-4 py-8">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
