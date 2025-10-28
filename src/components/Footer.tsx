"use client"

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="bg-white/70 border-t border-slate-200 mt-16"
    >
      <div className="container mx-auto px-6 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} <span className="text-indigo-600 font-medium">Nseobong Ukoette</span> — Built
        with <span className="text-pink-500">❤</span> using Next.js & Tailwind CSS
      </div>
    </motion.footer>
  )
}