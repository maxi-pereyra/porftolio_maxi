import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header_complet from './componentes/header/header_complet'
import ThemeSwitch from './componentes/ThemeSwitch'
import Redes from './componentes/Redes'
import Inicio from './componentes/inicio'

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
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative 
        dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 ` }>
        <Header_complet></Header_complet>
        {children}
        <Redes/>
        <Inicio/>
        <ThemeSwitch/>
        </body>
    </html>
  )
}
