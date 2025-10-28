'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="py-12 px-6 md:px-12 space-y-12">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-indigo-700 text-center"
      >
        About Me
      </motion.h1>

      {/* Story */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-md border border-slate-100 max-w-4xl mx-auto text-center md:text-left"
      >
        <p className="text-slate-700 text-lg leading-relaxed mb-4">
          I’m <span className="font-semibold text-indigo-600">Nseobong Ukoette</span> — a 
          <span className="font-semibold text-indigo-600"> Finance and Customer Service Professional</span> 
          who believes that financial growth and human connection go hand in hand. 
          Over the last 15 years, I’ve helped clients and businesses navigate change, 
          build trust, and achieve measurable success through empathy, precision, and 
          strategic communication.
        </p>

        <p className="text-slate-700 text-lg leading-relaxed mb-4">
          My experience in the Nigerian banking industry — from frontline service to 
          relationship management and product strategy — taught me that excellence is 
          not just about hitting targets. It’s about truly understanding people, 
          anticipating needs, and delivering value with integrity.
        </p>

        <p className="text-slate-700 text-lg leading-relaxed">
          Today, I’m focused on roles where I can combine my financial insight, 
          customer engagement skills, and leadership experience to drive results that 
          matter — both for organizations and the people they serve.
        </p>
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
        className="grid sm:grid-cols-3 gap-6 text-center"
      >
        {[
          { label: 'Years in Banking & Finance', value: '15+' },
          { label: 'Client Retention Rate', value: '97%' },
          { label: 'Projects Led to Completion', value: '120+' },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-gradient-to-tr from-indigo-50 via-white to-cyan-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <p className="text-3xl font-bold text-indigo-700">{item.value}</p>
            <p className="text-slate-600 text-sm mt-1">{item.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-white/70 backdrop-blur-md border border-slate-100 p-8 rounded-3xl shadow-md"
      >
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4 text-center">
          Core Expertise
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {[
            'Customer Relationship Management',
            'Financial Advisory & Deposit Mobilization',
            'SME Banking & Portfolio Growth',
            'Client Onboarding & Retention',
            'Leadership & Team Mentorship',
            'Product Documentation & Strategy',
          ].map((skill, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-full text-sm shadow hover:scale-105 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Personal Philosophy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center text-slate-600 italic max-w-2xl mx-auto"
      >
        “I’ve learned that success in finance isn’t just about numbers — it’s about people, 
        trust, and the courage to go the extra mile.”
      </motion.div>
    </section>
  )
}