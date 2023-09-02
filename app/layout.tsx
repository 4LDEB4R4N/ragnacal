import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout( {children}: {children: React.ReactNode}) {
  return ( 
    <body className={inter.className}>
        <h1>a</h1>
        {children}
    </body>
  )
}