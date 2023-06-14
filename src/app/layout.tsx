// Styling
import './globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'
const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ['latin'] })

// components
import Footer from './components/footer'
import Navbar from './components/navbar'

import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Dies Natalis PKN STAN',
  description: 'Manifestasi Harmoni Untuk Ciptakan Gemilang Karya',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth scrollbar-hide">
      <body className={plus_jakarta_sans.className} style={{background:"#0F0E0E"}}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
      <Analytics/>
    </html>
  )
}
