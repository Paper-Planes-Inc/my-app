import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";


const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Paper Planes",
  description: "The Next Generation AI-Driven Cannabis Data Platform",
};


export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <head>
        <link rel="icon" type="image/x-icon" href="../../public/favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="../../public/favicon/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="../../public/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="../../public/favicon/favicon-64x64.png" />
        <link rel="icon" type="image/png" sizes="128x128" href="../../public/favicon/favicon-128x128.png" />
        <link rel="icon" type="image/png" sizes="180x180" href="../../public/favicon/favicon-180x180.png" />
        <link rel="icon" type="image/png" sizes="36x36" href="../../public/favicon/android-chrome-36x36.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="../../public/favicon/android-chrome-48x48.png" />
        <link rel="icon" type="image/png" sizes="72x72" href="../../public/favicon/android-chrome-72x72.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="../../public/favicon/android-chrome-96x96.png" />
        <link rel="icon" type="image/png" sizes="144x144" href="../../public/favicon/android-chrome-144x144.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="../../public/favicon/android-chrome-192x192.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="../../public/favicon/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="../../public/favicon/apple-touch-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="../../public/favicon/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="../../public/favicon/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="../../public/favicon/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="../../public/favicon/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="../../public/favicon/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="../../public/favicon/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="../../public/favicon/apple-touch-icon-180x180.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
