'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Product Officer',
    company: 'First City Monument Bank (FCMB)',
    date: 'Nov 2022 – Present',
    highlights: [
      'Develop and manage financial products to enhance customer experience and market competitiveness.',
      'Partner with business teams to increase collections and payment volumes, driving overall profitability.',
      'Prepare key product documents including business requirement documents and customer value propositions.',
      'Provide financial insights that support data-driven decision-making and growth strategies.',
    ],
    impact:
      'Through innovation and strong collaboration, I’ve helped streamline product rollout processes and improved engagement between customers and digital banking channels.',
  },
  {
    role: 'Relationship Manager',
    company: 'FCMB, Uyo',
    date: 'Nov 2012 – Oct 2022',
    highlights: [
      'Managed a diverse SME portfolio, ensuring sustainable growth and strong client retention.',
      'Spearheaded deposit mobilization initiatives that consistently surpassed quarterly targets.',
      'Analyzed creditworthiness of clients, prepared detailed credit proposals, and monitored loan performance.',
      'Mentored junior staff on relationship building, sales, and compliance processes.',
    ],
    impact:
      'I built long-term partnerships with SMEs and corporate clients, strengthening the bank’s reputation as a trusted financial partner in the region.',
  },
  {
    role: 'Customer Service Officer',
    company: 'Finbank / FCMB',
    date: 'Jun 2008 – Oct 2012',
    highlights: [
      'Delivered exceptional customer support across account openings, onboarding, and inquiries.',
      'Resolved complex customer issues with empathy and professionalism, improving client satisfaction scores.',
      'Educated clients on digital banking channels, increasing adoption and reducing in-branch dependency.',
      'Collaborated with sales and operations teams to deliver seamless service experiences.',
    ],
    impact:
      'This role deepened my belief that customer trust is earned through consistent value delivery and authentic communication.',
  },
]

export default function Experience() {
  return (
    <section className="py-10 px-6 md:px-12 space-y-12 bg-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-700">
          My Professional Experience
        </h1>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Over the years, I’ve grown from resolving customer inquiries to driving strategic business growth.
          My journey through finance and customer service has shaped me into a professional who blends empathy
          with execution — helping businesses grow while keeping customers at the heart of every decision.
        </p>
      </motion.div>

      {/* Experience Timeline */}
      <div className="relative border-l-4 border-indigo-200 ml-4">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="ml-6 mb-10 relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[1.45rem] top-3 w-6 h-6 rounded-full bg-indigo-600 border-4 border-white shadow" />

            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-md border border-slate-100">
              <h2 className="text-xl md:text-2xl font-semibold text-indigo-700">
                {exp.role}
              </h2>
              <p className="text-slate-600 text-sm font-medium">{exp.company}</p>
              <p className="text-xs text-slate-400 mt-1">{exp.date}</p>

              <ul className="mt-4 list-disc list-inside text-slate-700 space-y-2 text-sm leading-relaxed">
                {exp.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <p className="mt-4 italic text-slate-600 border-l-4 border-indigo-200 pl-4 text-sm leading-relaxed">
                “{exp.impact}”
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Key Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-tr from-indigo-50 via-white to-cyan-50 p-8 rounded-2xl shadow-md border border-indigo-100"
      >
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4 text-center">
          Core Strengths
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            'Customer Relationship Management',
            'Financial Advisory & Deposit Mobilization',
            'Product Strategy & Implementation',
            'Client Retention & Growth',
            'Cross-functional Team Collaboration',
            'Training & Performance Mentorship',
          ].map((skill, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-white rounded-full shadow-sm border border-indigo-100 text-slate-700 text-sm font-medium hover:bg-indigo-50 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-8 text-slate-500 italic"
      >
        “In finance, trust is currency — and great service is the investment that keeps it growing.”
      </motion.div>
    </section>
  )
}