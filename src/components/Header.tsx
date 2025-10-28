'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/40 border-b border-white/20 shadow-sm"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Name */}
        <Link href="/" className="text-xl md:text-2xl font-bold text-indigo-700">
          Nseobong <span className="text-indigo-500">Ukoette</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-slate-700 font-medium">
          <Link href="/" className="hover:text-indigo-600 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-indigo-600 transition">
            About
          </Link>
          <Link href="/experience" className="hover:text-indigo-600 transition">
            Experience
          </Link>
          <Link href="/education" className="hover:text-indigo-600 transition">
            Education
          </Link>
          <Link href="/contact" className="hover:text-indigo-600 transition">
            Contact
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-indigo-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden flex flex-col bg-white/80 backdrop-blur-lg text-center shadow-md border-t border-white/30"
        >
          {['Home', 'About', 'Experience', 'Education', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="py-3 text-slate-700 font-medium hover:text-indigo-600 transition"
            >
              {item}
            </Link>
          ))}
        </motion.nav>
      )}
    </motion.header>
  )
}