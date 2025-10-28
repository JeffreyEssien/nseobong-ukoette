'use client'

import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section className="py-12 px-6 md:px-12 space-y-12">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-indigo-700 text-center"
      >
        Education & Professional Development
      </motion.h1>

      {/* Education Summary */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-md border border-slate-100 max-w-4xl mx-auto"
      >
        <p className="text-slate-700 text-lg leading-relaxed mb-6 text-center md:text-left">
          My educational path reflects my belief that knowledge, when applied with empathy and precision, 
          transforms both people and organizations. With degrees in <span className="font-semibold text-indigo-600">
          Environmental Health Management</span> and <span className="font-semibold text-indigo-600">
          Microbiology</span>, I bring a structured, analytical mindset to finance and service delivery.
        </p>

        <div className="space-y-6">
          <div className="p-4 bg-gradient-to-tr from-indigo-50 via-white to-cyan-50 rounded-2xl border border-indigo-100 shadow-sm">
            <h2 className="text-xl font-semibold text-indigo-700">
              M.Sc. Environmental Health Management
            </h2>
            <p className="text-slate-600">University of Uyo, Nigeria — 2021</p>
            <p className="text-slate-600 text-sm mt-2">
              Focused on sustainability, organizational health, and leadership in complex systems.
            </p>
          </div>

          <div className="p-4 bg-gradient-to-tr from-indigo-50 via-white to-cyan-50 rounded-2xl border border-indigo-100 shadow-sm">
            <h2 className="text-xl font-semibold text-indigo-700">B.Sc. Microbiology</h2>
            <p className="text-slate-600">Bayero University Kano, Nigeria — 2006</p>
            <p className="text-slate-600 text-sm mt-2">
              Built strong foundations in data analysis, precision, and attention to process — 
              qualities that now inform my approach to finance and client operations.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-white/70 backdrop-blur-md border border-slate-100 p-8 rounded-3xl shadow-md max-w-4xl mx-auto"
      >
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4 text-center">
          Professional Certifications & Trainings
        </h2>
        <ul className="list-disc list-inside text-slate-700 space-y-2 text-sm leading-relaxed">
          <li>Fundamentals of International Trade — FCMB Academy</li>
          <li>Negotiation and Persuasion Skills — FCMB Academy</li>
          <li>Selling to Achieve Results — FCMB Academy</li>
          <li>Customer Service Excellence — FCMB Training Faculty</li>
          <li>Care Certificate (Standards 1–15) — Care Academy, UK</li>
        </ul>
      </motion.div>

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center text-slate-600 italic max-w-2xl mx-auto"
      >
        “Learning never stops — it’s the bridge between who I am today and who I aspire to be tomorrow.”
      </motion.div>
    </section>
  )
}