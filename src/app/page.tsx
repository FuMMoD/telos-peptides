'use client'

import { Hero } from '@/components/Hero'
import { TrustSignals } from '@/components/TrustSignals'
import { ProductCard } from '@/components/ProductCard'
import { motion } from 'framer-motion'

// Mock data - replace with actual WooCommerce API
const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: 'Sermorelin',
    slug: 'sermorelin',
    price: '120.00',
    description: 'Growth hormone releasing hormone analog for research',
    image: 'https://via.placeholder.com/400x400?text=Sermorelin',
  },
  {
    id: 2,
    name: 'Ipamorelin / CJC',
    slug: 'ipamorelin-cjc',
    price: '160.00',
    description: 'Growth hormone secretagogue peptide combination',
    image: 'https://via.placeholder.com/400x400?text=Ipamorelin',
  },
  {
    id: 3,
    name: 'BPC-157',
    slug: 'bpc-157',
    price: '90.00',
    description: 'Bodyprotective compound peptide for tissue research',
    image: 'https://via.placeholder.com/400x400?text=BPC-157',
  },
  {
    id: 4,
    name: 'TB-500',
    slug: 'tb-500',
    price: '120.00',
    description: 'Thymosin beta-4 peptide for healing research',
    image: 'https://via.placeholder.com/400x400?text=TB-500',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Research Grade Peptides"
        subtitle="Triple-tested compounds for scientific laboratories. cGMP certified, sterile-filtered, shipped cold-chain Monday-Thursday. No minimum order required."
        cta={{ text: 'Shop Now', href: '/shop' }}
      />

      {/* Trust Signals */}
      <TrustSignals />

      {/* Featured Products */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">Featured Products</h2>
            <p className="text-dark-300 max-w-2xl mx-auto">
              Explore our selection of research-grade peptides. All products include COA and SDS accessible via QR code on packaging.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_PRODUCTS.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <a
              href="/shop"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-accent-cyan to-accent-purple rounded-lg hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
            >
              View All Products
            </a>
          </motion.div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-12 bg-gradient-to-r from-accent-cyan/10 via-accent-purple/10 to-accent-gold/10 border-y border-dark-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
              <span className="text-accent-gold">✦ Limited Time ✦</span>
            </p>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3">Buy 9, Get 1 FREE!</h3>
            <p className="text-dark-200 mb-6">Get any vial of equal or lesser value for free. Applied at checkout.</p>
            <a
              href="/shop"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-dark-900 bg-accent-gold rounded-lg hover:bg-accent-gold/90 transition-all duration-300"
            >
              Shop Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: '✧ What makes Telos different?',
                a: 'We triple-test every lot (HPLC/MS, sterility, endotoxin), include a COA & SDS on the label QR code, and ship cold-chain Monday-Thursday—no minimum order required.',
              },
              {
                q: '✦ Are your products intended for human or veterinary use?',
                a: 'No. All compounds are research-use-only and must never be consumed or injected.',
              },
              {
                q: '♡ Who is eligible to purchase from Telos?',
                a: 'Our products are available exclusively to qualified researchers, institutions, and laboratories conducting lawful scientific research.',
              },
              {
                q: '⟡ Do you require verification for orders?',
                a: 'Yes. We reserve the right to request documentation to verify that a buyer is affiliated with a research organization.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-900/50 backdrop-blur-md border border-dark-700 rounded-xl p-6 hover:border-accent-cyan transition-colors duration-300"
              >
                <h4 className="text-lg font-semibold text-white mb-3">{faq.q}</h4>
                <p className="text-dark-300">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
