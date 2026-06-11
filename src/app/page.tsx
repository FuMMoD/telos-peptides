'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, Shield, Lock, Globe, Truck, Zap, CheckCircle } from 'lucide-react'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'

const TRUST_SIGNALS = [
  {
    icon: CheckCircle,
    label: '99%+ Purity',
    description: 'Third-party HPLC tested. Certificates of analysis on every batch.',
  },
  {
    icon: Lock,
    label: 'Discreet & Secure',
    description: 'Cold-chain shipping in tamper-evident packaging.',
  },
  {
    icon: Globe,
    label: 'US Manufactured',
    description: 'Synthesized and packaged in audited US laboratories.',
  },
  {
    icon: Truck,
    label: 'Free Express Shipping',
    description: 'Complimentary overnight delivery on orders over $200.',
  },
]

const FEATURED_PRODUCTS = [
  {
    id: 8362,
    name: 'BAC Water',
    price: '$20.00',
    description: 'Bacteriostatic water for peptide reconstitution',
    image: 'https://telos-peptides.com/wp-content/uploads/2026/05/bac-water.jpg',
  },
  {
    id: 8411,
    name: 'BPC-157',
    price: '$90.00',
    description: 'Bodyprotective compound for tissue research',
    image: 'https://telos-peptides.com/wp-content/uploads/2026/05/bpc-157.jpg',
  },
  {
    id: 8413,
    name: 'GHK-Cu',
    price: '$110.00',
    description: 'Copper tripeptide for aging research',
    image: 'https://telos-peptides.com/wp-content/uploads/2026/05/ghk-cu.jpg',
  },
  {
    id: 8374,
    name: 'Ipamorelin / CJC',
    price: '$160.00',
    description: 'Growth hormone secretagogue combination',
    image: 'https://telos-peptides.com/wp-content/uploads/2026/05/ipamorelin-cjc.jpg',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-950">
      {/* HERO SECTION - Split Layout */}
      <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-32 bg-dark-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Label */}
              <p className="text-accent-lime text-sm font-semibold tracking-wider mb-6 uppercase">
                Pharmaceutical-Grade Peptides
              </p>

              {/* Headline with Accent */}
              <h1 className="text-5xl sm:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                Engineered for
                <span className="block text-accent-lime italic">
                  peak biology.
                </span>
              </h1>

              {/* Description */}
              <p className="text-white/70 text-lg mb-8 max-w-lg leading-relaxed">
                Precision-formulated research peptides. Tested, traceable, and trusted by clinics and researchers across the country.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                  variant="primary"
                  size="lg"
                  className="inline-flex items-center justify-center gap-2 bg-accent-lime text-dark-950 hover:bg-accent-lime/90"
                >
                  Shop the Catalogue
                  <span>→</span>
                </Button>
                <button className="px-8 py-3 border border-white/30 text-white hover:border-white hover:bg-white/5 transition-all duration-300 font-semibold">
                  Our Science
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                {[
                  { value: '99%', label: 'AVG. PURITY' },
                  { value: '12,000+', label: 'RESEARCHERS' },
                  { value: '4.9', label: 'STAR RATED' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <p className="text-2xl sm:text-3xl font-bold text-accent-lime mb-1">
                      {stat.value}
                    </p>
                    <p className="text-xs sm:text-sm text-white/60 font-semibold">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative aspect-square rounded-lg border border-accent-lime/30 bg-dark-900/50 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-lime/5 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <ShoppingCart className="w-16 h-16 text-accent-lime/30 mx-auto mb-4" />
                    <p className="text-white/40 text-sm">Product Hero Image</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST SIGNALS - 4 Column Grid */}
      <section className="py-16 sm:py-24 bg-dark-900/50 border-y border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {TRUST_SIGNALS.map((signal, i) => {
              const Icon = signal.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center">
                    <Icon className="w-8 h-8 text-accent-lime mx-auto mb-4" />
                    <h4 className="font-semibold text-white mb-2">{signal.label}</h4>
                    <p className="text-sm text-white/60">{signal.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-20 sm:py-28 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
              Shop Popular Products
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Every product includes COA & SDS via QR code. Eligible for Buy 9 Get 1 FREE promotion.
            </p>
          </motion.div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {FEATURED_PRODUCTS.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card hover glowing className="flex flex-col h-full overflow-hidden group border border-dark-800">
                  {/* Product Image */}
                  <div className="relative h-48 sm:h-56 overflow-hidden bg-dark-900">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 p-4 sm:p-6 flex flex-col">
                    <h3 className="font-serif font-bold text-white mb-2 text-lg">{product.name}</h3>
                    <p className="text-white/70 text-sm mb-4 flex-1">{product.description}</p>

                    {/* Price */}
                    <div className="mb-4">
                      <p className="text-2xl font-bold text-accent-lime">{product.price}</p>
                    </div>

                    {/* CTA Button */}
                    <button className="w-full px-4 py-3 bg-accent-lime text-dark-950 font-semibold hover:bg-accent-lime/90 transition-all duration-300 rounded text-sm">
                      Add to Cart
                    </button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* View All CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-16 text-center"
          >
            <a
              href="/shop"
              className="inline-flex items-center gap-2 text-accent-lime hover:text-accent-lime/80 transition-colors font-semibold"
            >
              View All {FEATURED_PRODUCTS.length}+ Products →
            </a>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE TELOS */}
      <section className="py-20 sm:py-28 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
              Why Choose Telos
            </h2>
            <p className="text-white/70">
              Every product engineered to remove variables and let your data speak for itself.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: '✧', title: 'cGMP Origin', desc: 'ISO-9001 facilities following cGMP principles' },
              { icon: '✦', title: 'Triple-Filtered', desc: '0.22 µm filtration & gamma irradiation' },
              { icon: '♡', title: '3rd-Party Tested', desc: 'Every lot validated for purity & identity' },
              { icon: '⟡', title: 'Cold-Chain Shipped', desc: 'Monday-Thursday shipping with no minimum' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card hover className="p-6 border border-dark-800">
                  <div className="text-2xl mb-3 text-accent-lime">{item.icon}</div>
                  <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-white/70 text-sm">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 bg-dark-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
              Questions?
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: '✧ What makes Telos different?',
                a: 'We triple-test every lot (HPLC/MS, sterility, endotoxin), include COA & SDS on QR codes, and ship cold-chain Monday-Thursday with no minimum order.',
              },
              {
                q: '✦ Research use only?',
                a: 'Yes. All compounds are exclusively for laboratory research. Never for human or animal consumption.',
              },
              {
                q: '♡ Who can buy?',
                a: 'Qualified researchers, institutions, and laboratories conducting lawful scientific research (21+).',
              },
              {
                q: '⟡ How do orders work?',
                a: 'Add products to cart, apply BOGO promo at checkout, ship via cold-chain Monday-Thursday.',
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card hover className="p-4 sm:p-6 border border-dark-800">
                  <h4 className="font-semibold text-white mb-2">{faq.q}</h4>
                  <p className="text-white/70 text-sm">{faq.a}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
