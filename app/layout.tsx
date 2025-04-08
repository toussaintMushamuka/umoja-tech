import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Umoja Tech - Services de bureautique et conception",
  description:
    "Umoja Tech offre des services de qualité et rapides en impression, conception, formation et marketing digital.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col w-full overflow-x-hidden">
            <SiteHeader />
            <main className="flex-1 w-full overflow-x-hidden">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'