import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './componentes/header/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maximiliano | personal porfolio',
  description: 'Maximiliano is a full-stack developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-300 text-gray-950 relative pt-28 sm:pt-36 ` }>
        
        <Header></Header>
        {children}</body>
    </html>
  )
}
