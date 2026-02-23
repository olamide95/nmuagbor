import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nmuagbor - Learn Agbor Language Online",
  description:
    "Master authentic Agbor language with Chuks Emefiele. Preserve your Delta State heritage with expert online classes for children.",
  keywords: "Agbor language, Nmu Agbor, Delta State, tribal language, Nigerian heritage, language learning, education",
  openGraph: {
    title: "Nmuagbor - Learn Agbor Language",
    description: "Master authentic Agbor language and preserve your cultural heritage.",
    type: "website",
  },
    generator: 'agbor-language-learning-platform',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
