'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/Card'

export default function GLP() {
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
            GLP-3, GLP-2, & BAC
          </h1>
          <p className="text-white/80 text-lg leading-relaxed">
            Peptides are short chains of amino acids that act as tiny messengers in the body, influencing processes such as metabolism, hormone signaling, and cellular repair. In research and biotechnology, <strong>peptides like GLP-3 and GLP-2</strong> are among the most studied compounds for their potential impact on <strong>metabolism</strong> and <strong>energy regulation</strong>.
          </p>
          <p className="text-white/80 text-lg leading-relaxed mt-4">
            At <strong>Telos</strong>, our goal is to supply peptides that meet the highest purity standards, ensuring accuracy and consistency in every vial.
          </p>
        </motion.div>

        {/* GLP-3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="p-8 sm:p-12 border-l-4 border-purple-600">
            <h2 className="text-3xl font-serif font-bold text-white mb-6 flex items-center gap-2">
              <span>💜</span> GLP-3 (Retatrutide): The Next Generation
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">
              <strong>GLP-3</strong>, scientifically known as <strong>Retatrutide</strong>, is a <em>triple-agonist peptide</em> that interacts with three key receptors in the body:
            </p>
            <ul className="text-white/80 space-y-2 mb-6 ml-4">
              <li>• <strong>GLP-1 (Glucagon-Like Peptide-1)</strong></li>
              <li>• <strong>GIP (Glucose-Dependent Insulinotropic Polypeptide)</strong></li>
              <li>• <strong>Glucagon receptor (GCGR)</strong></li>
            </ul>
            <p className="text-white/80 leading-relaxed mb-6">
              This unique triple action has made Retatrutide one of the most talked-about peptides in modern research. Studies explore its role in regulating glucose metabolism, improving insulin sensitivity, and supporting balanced energy usage.
            </p>
            <div className="bg-dark-900/50 p-4 rounded-lg">
              <p className="text-white font-semibold mb-2">Why Researchers Choose GLP-3 (Retatrutide):</p>
              <ul className="text-white/80 space-y-1 text-sm">
                <li>✓ Ultra-high purity (≥99%)</li>
                <li>✓ Reliable, stable formulation (10 mg)</li>
                <li>✓ Produced under strict laboratory standards</li>
              </ul>
            </div>
          </Card>
        </motion.div>

        {/* GLP-2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="p-8 sm:p-12 border-l-4 border-green-600">
            <h2 className="text-3xl font-serif font-bold text-white mb-6 flex items-center gap-2">
              <span>💚</span> GLP-2 (Tirzepatide): Dual-Agonist Precision
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">
              <strong>GLP-2</strong>, known as <strong>Tirzepatide</strong>, is a <em>dual-agonist peptide</em> that activates both <strong>GLP-1</strong> and <strong>GIP</strong> receptors. These incretin hormones are involved in the body's natural response to nutrients, helping regulate blood sugar and energy balance.
            </p>
            <p className="text-white/80 leading-relaxed mb-6">
              Tirzepatide has quickly become one of the most studied compounds in peptide science due to its ability to target <strong>two major metabolic pathways</strong> simultaneously.
            </p>
            <div className="bg-dark-900/50 p-4 rounded-lg">
              <p className="text-white font-semibold mb-2">Key Attributes of GLP-2 (Tirzepatide):</p>
              <ul className="text-white/80 space-y-1 text-sm">
                <li>✓ Dual-receptor activity (GLP-1 and GIP)</li>
                <li>✓ High purity 15 mg formulation</li>
                <li>✓ Consistent results for research and development</li>
              </ul>
            </div>
          </Card>
        </motion.div>

        {/* BAC Water */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="p-8 sm:p-12 border-l-4 border-blue-600">
            <h2 className="text-3xl font-serif font-bold text-white mb-6 flex items-center gap-2">
              <span>💧</span> BAC Water: The Foundation of Peptide Stability
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">
              While GLP-3 and GLP-2 are advanced peptides, <strong>BAC Water (Bacteriostatic Water)</strong> serves as their essential companion. It's a sterile water solution containing <strong>0.9% benzyl alcohol</strong>, which helps prevent bacterial growth and preserve peptide stability in laboratory environments.
            </p>
            <div className="bg-dark-900/50 p-4 rounded-lg">
              <p className="text-white font-semibold mb-2">Benefits of BAC Water:</p>
              <ul className="text-white/80 space-y-1 text-sm">
                <li>✓ 99%+ purity for clean, consistent results</li>
                <li>✓ 5 mL sterile glass vials</li>
                <li>✓ Ideal for peptide reconstitution and handling</li>
              </ul>
            </div>
            <p className="text-white/80 leading-relaxed mt-6">
              When paired with <strong>Telos peptides</strong>, BAC Water ensures maximum reliability and integrity throughout the research process.
            </p>
          </Card>
        </motion.div>

        {/* Why Choose Telos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 sm:p-12">
            <h2 className="text-3xl font-serif font-bold text-white mb-8 text-center">
              Why Choose Telos Peptides?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { num: '1', title: 'Purity', desc: 'Every product exceeds 99% verified purity.' },
                { num: '2', title: 'Precision', desc: 'Produced under strict quality control and scientific integrity.' },
                { num: '3', title: 'Performance', desc: 'Consistent, dependable, and trusted by researchers.' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl font-bold text-accent-gold mb-2">{item.num}</div>
                  <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-white/80 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-white/80 text-center mt-8">
              We don't just provide peptides — we deliver confidence in every drop.
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
