'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="mt-16 bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-500 text-white py-10"
    >
      <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
        <h3 className="text-2xl font-semibold">Let’s Connect</h3>
        <p className="max-w-xl mx-auto text-indigo-100 leading-relaxed">
          I’m passionate about creating value through meaningful financial relationships.  
          Reach out — I’d love to discuss how I can contribute to your team’s growth.
        </p>

        <div className="flex justify-center gap-6 text-indigo-100 pt-3">
          <a
            href="mailto:nseukoette@yahoo.com?subject=Inquiry%20via%20Portfolio%20Website&body=Hello%20Nseobong,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect."
            className="hover:text-white transition flex items-center gap-2"
          >
            <Mail size={18} /> Email
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition flex items-center gap-2"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>

        <p className="text-xs text-indigo-100 pt-4">
          © {new Date().getFullYear()} Nseobong Ukoette — All Rights Reserved.
        </p>
      </div>
    </motion.footer>
  )
}