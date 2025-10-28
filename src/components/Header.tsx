'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="backdrop-blur-lg bg-white/70 sticky top-0 z-50 border-b border-white/40 shadow-sm"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight text-indigo-600 hover:text-indigo-800 transition">
          Nseobong Ukoette
        </Link>

        <nav className="space-x-5 text-sm font-medium">
          {['About', 'Experience', 'Education', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-slate-700 hover:text-indigo-600 transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}