'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/Card'

export default function WhatArePeptides() {
  return (
    <div className="min-h-screen bg-dark-950 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6">
            What Are Peptides? A Complete Guide
          </h1>
          <p className="text-white/80 text-lg leading-relaxed">
            Peptides are short chains of amino acids, the same building blocks that make up proteins. They act as tiny messengers that help the body communicate, repair, and regulate itself. Each peptide has a unique structure and purpose — some stimulate collagen production for skin, others influence metabolism or support cell growth. Because of their precision, peptides are widely studied for their potential roles in longevity and performance research.
          </p>
        </motion.div>

        {/* How Do Peptides Work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="p-8 sm:p-12">
            <h2 className="text-3xl font-serif font-bold text-white mb-6 flex items-center gap-2">
              <span>🧠</span> How Do Peptides Work?
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Peptides act like biological signals. When they attach to specific receptors in the body, they can activate or deactivate certain processes, much like turning switches on and off. Collagen peptides, for instance, can help the skin appear firmer and more youthful, while metabolic peptides such as GLP-1, GLP-2, and Retatrutide are researched for their roles in appetite regulation and glucose balance.
            </p>
            <p className="text-white/80 leading-relaxed">
              Healing peptides like BPC-157 are being studied for their potential effects on tissue recovery and inflammation. Because they are so specific, peptides can target particular systems without affecting others, which is why they have become so valuable in medical and wellness research.
            </p>
          </Card>
        </motion.div>

        {/* Main Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-serif font-bold text-white mb-8 text-center">
            Main Types of Peptides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Cosmetic Peptides',
                desc: 'Used in skincare for their potential to support collagen production, firmness, and elasticity.',
              },
              {
                title: 'Metabolic Peptides',
                desc: 'Such as GLP-1, GLP-2, and GIP, associated with energy regulation, insulin sensitivity, and metabolism.',
              },
              {
                title: 'Therapeutic Peptides',
                desc: 'Studied for their possible roles in wound healing, inflammation control, and hormone balance.',
              },
              {
                title: 'Signaling Peptides',
                desc: 'Help cells communicate instructions throughout the body, maintaining balance and function.',
              },
            ].map((type, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                  <p className="text-white/80">{type.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Purity Matters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="p-8 sm:p-12 bg-dark-900/50">
            <h2 className="text-3xl font-serif font-bold text-white mb-6">
              Why Peptide Purity Matters
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Not all peptides are created equal. For reliable and consistent results, purity and quality control are essential. Impure or improperly handled peptides can degrade quickly and produce inconsistent outcomes.
            </p>
            <p className="text-white/80 leading-relaxed">
              At <strong>Telos</strong>, every peptide is produced to meet the highest standards of scientific integrity. Our peptides are ≥99% pure, manufactured under strict laboratory conditions, and tested for stability and precision. Our mission is to supply research-grade peptides that uphold transparency, accuracy, and trust.
            </p>
          </Card>
        </motion.div>

        {/* Future of Science */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 sm:p-12">
            <h2 className="text-3xl font-serif font-bold text-white mb-6">
              The Future of Peptide Science
            </h2>
            <p className="text-white/80 leading-relaxed">
              Peptide research continues to expand rapidly, from skin and longevity to metabolic science and regenerative medicine. Scientists believe peptides could unlock new ways to help the body heal, restore balance, and perform naturally. As this field evolves, <strong>Telos</strong> remains committed to supporting researchers with trusted, high-quality peptides designed for excellence.
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
