'use client'

import { motion } from 'framer-motion'
import { TRUST_SIGNALS } from '@/config/constants'

export function TrustSignals() {
  return (
    <section className="py-20 bg-gradient-to-b from-dark-900 to-dark-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">Why Choose Telos</h2>
          <p className="text-dark-300 max-w-2xl mx-auto">
            Every product we ship is engineered to remove variables and let your data speak for itself.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_SIGNALS.map((signal, index) => (
            <motion.div
              key={signal.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/20 to-accent-purple/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-dark-900/80 backdrop-blur-md border border-dark-700 rounded-xl p-8 h-full hover:border-accent-cyan transition-colors duration-300">
                <div className="text-4xl mb-4">{signal.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{signal.title}</h3>
                <p className="text-dark-300 text-sm leading-relaxed">{signal.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
