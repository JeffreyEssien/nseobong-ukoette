'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent('Inquiry via Portfolio Website')
    const body = encodeURIComponent(
      `Hello Nseobong,\n\nMy name is ${form.name}.\n${form.message}\n\nYou can reach me at ${form.email}.`
    )
    window.location.href = `mailto:nseukoette@yahoo.com?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section className="py-12 px-6 md:px-12 space-y-12 bg-white">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-indigo-700 text-center"
      >
        Let’s Connect
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-md border border-slate-100 flex flex-col justify-center"
        >
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Get in Touch</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            I’m currently open to roles in <span className="font-semibold text-indigo-600">
            Finance, Relationship Management,</span> and <span className="font-semibold text-indigo-600">
            Customer Service Leadership.</span>  
            Whether it’s collaboration, consultation, or recruitment — let’s discuss how I can add value to your team.
          </p>

          <div className="space-y-3 text-slate-700">
            <p className="flex items-center gap-3">
              <Mail className="text-indigo-600 w-5 h-5" />{' '}
              <a
                href="mailto:nseukoette@yahoo.com?subject=Inquiry%20via%20Portfolio%20Website&body=Hello%20Nseobong,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20an%20opportunity%20with%20you."
                className="hover:text-indigo-600 transition underline underline-offset-2"
              >
                nseukoette@yahoo.com
              </a>
            </p>
            <p className="flex items-center gap-3">
              <Phone className="text-indigo-600 w-5 h-5" /> +234 803 504 0411
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="text-indigo-600 w-5 h-5" /> Lagos / Uyo, Nigeria
            </p>
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-tr from-indigo-50 via-white to-cyan-50 p-8 rounded-3xl shadow-md border border-indigo-100"
        >
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Send Me a Message</h2>

          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg"
            >
              Message sent successfully ✅  
              <br /> Your email app should open automatically!
            </motion.div>
          ) : (
            <>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="text-black w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent outline-none transition"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="text-black w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent outline-none transition"
                />
                <textarea
                  placeholder="Your message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  className="text-black w-full p-3 border border-slate-200 rounded-lg h-32 resize-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent outline-none transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-5 w-full py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition"
              >
                Send Message
              </button>
            </>
          )}
        </motion.form>
      </div>

      {/* Footer quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-center text-slate-500 italic"
      >
        “Let’s build trust, create impact, and grow together.”
      </motion.div>
    </section>
  )
}