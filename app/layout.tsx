import type { Metadata } from 'next'
import './globals.css'
import { Geist } from "next/font/google";

export const metadata: Metadata = {
  title: 'Akil A L',
  description: 'Frontend Engineer -  Portfolio',
  generator: '',
}


const geist = Geist({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
