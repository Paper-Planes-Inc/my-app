import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";


const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Paper Planes",
  description: "AI-Powered Cannabis Data Platform",
};


export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
