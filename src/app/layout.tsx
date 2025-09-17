import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Paper Planes",
  description: "The Next Generation AI-Driven Cannabis Data Platform",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", type: "image/x-icon" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-64x64.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon/favicon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/favicon/favicon-180x180.png", sizes: "180x180", type: "image/png" },
      { url: "/favicon/android-chrome-36x36.png", sizes: "36x36", type: "image/png" },
      { url: "/favicon/android-chrome-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon/android-chrome-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/favicon/android-chrome-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/android-chrome-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/favicon/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon-57x57.png", sizes: "57x57" },
      { url: "/favicon/apple-touch-icon-60x60.png", sizes: "60x60" },
      { url: "/favicon/apple-touch-icon-72x72.png", sizes: "72x72" },
      { url: "/favicon/apple-touch-icon-76x76.png", sizes: "76x76" },
      { url: "/favicon/apple-touch-icon-114x114.png", sizes: "114x114" },
      { url: "/favicon/apple-touch-icon-120x120.png", sizes: "120x120" },
      { url: "/favicon/apple-touch-icon-144x144.png", sizes: "144x144" },
      { url: "/favicon/apple-touch-icon-152x152.png", sizes: "152x152" },
      { url: "/favicon/apple-touch-icon-180x180.png", sizes: "180x180" },
    ],
  },
};


export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <head>
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#111111" />
      </head>
      <body>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
