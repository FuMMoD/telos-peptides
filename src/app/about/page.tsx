'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/Card'

export default function About() {
  return (
    <div className="min-h-screen bg-dark-950 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
            Who Are We?
          </h1>
          <p className="text-white/80 text-lg">
            TESTED • SCIENCE-BACKED • COMMUNITY LOVED • EXPERT APPROVED
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="p-8 sm:p-12">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">Our Mission</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Our mission is to facilitate scientific exploration by supplying compounds that meet rigorous quality standards. We are committed to ensuring that all our products are used in controlled research settings and in accordance with applicable laws and guidelines.
            </p>
            <p className="text-white/80 leading-relaxed">
              We believe that access to quality materials shouldn't come with unnecessary barriers or confusion. That's why we focus on clear communication, fast fulfillment, and trusted sourcing — so that independent researchers, labs, and institutions can move forward with confidence in their work.
            </p>
          </Card>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-serif font-bold text-white mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Integrity',
                description: 'We uphold the highest standards of compliance and ethical practices in all our operations.',
              },
              {
                title: 'Quality',
                description: 'Our products undergo thorough testing to ensure consistency and reliability for research applications.',
              },
              {
                title: 'Transparency',
                description: 'We provide clear information about our products and their intended use to support informed decision-making by researchers.',
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full">
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-white/80">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Telos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-serif font-bold text-white mb-8 text-center">Why Choose Telos</h2>
          <Card className="p-8 sm:p-12">
            <p className="text-white/80 text-center mb-8">
              Every product we ship is engineered to remove variables and let your data speak for itself.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: '✧', label: 'cGMP Origin', desc: 'ISO-9001 certified facilities' },
                { icon: '✦', label: 'Triple-Filtered', desc: '0.22 µm filtration & irradiation' },
                { icon: '♡', label: '3rd-Party Tested', desc: 'Validated for purity & identity' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h4 className="font-semibold text-white mb-2">{item.label}</h4>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
