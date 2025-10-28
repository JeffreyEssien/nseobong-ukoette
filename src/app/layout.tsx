import './globals.css'
import { ReactNode } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Nseobong Ukoette — Portfolio',
  description:
    'Portfolio of Nseobong Ukoette — Product Officer, Relationship Manager, and Healthcare Professional.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-indigo-50 via-white to-cyan-50 text-slate-800">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 container mx-auto px-6 py-12">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}