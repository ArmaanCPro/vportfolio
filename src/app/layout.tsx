import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import React from "react" // Corrected import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Armaan Chahal - Portfolio",
  description: "C++ developer portfolio showcasing some projects and skills",
}

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

export default RootLayout