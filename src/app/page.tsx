'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-cyan-50 px-6 md:px-12 py-16">
      {/* Animated background blur blobs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
      </motion.div>

      {/* Main Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-5xl w-full bg-white/60 backdrop-blur-md border border-white/40 rounded-3xl shadow-xl overflow-hidden flex flex-col-reverse md:flex-row items-center"
      >
        {/* Text Section */}
        <div className="w-full md:w-1/2 p-8 md:p-12 space-y-6 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-indigo-700 leading-tight"
          >
            Hi, I’m <span className="text-indigo-500">Nseobong Ukoette</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-slate-700 l:text-lg leading-relaxed"
          >
            A <span className="font-semibold text-indigo-600">finance and customer service professional</span> 
            with over 15 years of experience helping clients and businesses achieve growth, trust, 
            and measurable results. I specialize in <span className="font-medium text-indigo-600">
            relationship management, deposit mobilization,</span> and <span className="font-medium text-indigo-600">
            financial product strategy</span>. My goal is simple — to create lasting value through 
            authentic connections and smart financial solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center md:justify-start gap-4 pt-4"
          >
            <Link
              href="/experience"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition font-medium"
            >
              View My Experience
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-indigo-600 text-indigo-700 rounded-lg hover:bg-indigo-50 transition font-medium"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full md:w-1/2 flex justify-center items-center p-8 md:p-12 bg-gradient-to-br from-indigo-100 via-white to-cyan-50"
        >
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src="/profile.jpg" // replace with her actual image
              alt="Nseobong Ukoette"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom quote */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-10 text-center text-slate-500 italic text-sm md:text-base"
      >
        “Great service builds trust. Great trust drives success.”
      </motion.p>
    </main>
  )
}