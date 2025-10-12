import type React from "react"
import type { Metadata } from "next"
import { Share_Tech_Mono, Orbitron } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-share-tech-mono",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "700", "900"],
})

export const metadata: Metadata = {
  title: "Outer Heaven: Exiled Units - MGS Discord Community",
  description: "A friendly gaming community centered on Metal Gear Solid. Join our tactical espionage operations.",
  generator: "v0.app",
  metadataBase: new URL("https://outer-heaven-website.vercel.app"),
  icons: {
    icon: "/logo.webp",
    apple: "/logo.webp",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://outer-heaven-website.vercel.app",
    title: "Outer Heaven: Exiled Units - MGS Discord Community",
    description: "A friendly gaming community centered on Metal Gear Solid. Join our tactical espionage operations.",
    siteName: "Outer Heaven: Exiled Units",
    images: [
      {
        url: "/banner.gif",
        width: 1200,
        height: 630,
        alt: "Outer Heaven: Exiled Units Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Outer Heaven: Exiled Units - MGS Discord Community",
    description: "A friendly gaming community centered on Metal Gear Solid. Join our tactical espionage operations.",
    images: ["/banner.gif"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-mono ${shareTechMono.variable} ${orbitron.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
