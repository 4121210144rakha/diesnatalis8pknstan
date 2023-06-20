"use client"
// Styling
import './globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'
const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ['latin'] })

import React, { useState, useEffect } from 'react'

// Components
import Footer from './components/footer'
import Navbar from './components/navbar'
import Loading from './components/Loading'

import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Dies Natalis PKN STAN',
  description: 'Manifestasi Harmoni Untuk Ciptakan Gemilang Karya',
  keywords: 'PKN STAN, Dies Natalis, Ulang Tahun',
  author: 'gingercat-pisqr',
  viewport: 'width=device-width, initial-scale=1.0',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const[isLoad,setLoading] =  useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    }, 8000)

  }, []);

  return (
    <html lang="en" className="scroll-smooth scrollbar-hide">
      <body className={plus_jakarta_sans.className} style={{background:"#0F0E0E"}}>

        {isLoad?(<Loading/>):(
          <>
            <Navbar/>
            <main>{children}</main>
            <Footer/>
          </>
        )}
        
      </body>
      <Analytics/>
    </html>
  )
}
