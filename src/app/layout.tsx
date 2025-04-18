import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gnosis - Education for Fun with AI',
  description: 'Join our vibrant community where learning is fun and engaging. Discover AI-powered tools that make education exciting and interactive.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  )
}

