'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, Shield, Zap, CheckCircle } from 'lucide-react'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'

const TRUST_SIGNALS = [
  {
    icon: Shield,
    label: 'cGMP Origin',
    description: 'ISO-9001 certified facilities following cGMP principles',
  },
  {
    icon: Zap,
    label: 'Triple-Filtered',
    description: '0.22 µm filtration & gamma irradiation for sterility',
  },
  {
    icon: CheckCircle,
    label: '3rd-Party Tested',
    description: 'Every lot validated for purity, identity, and endotoxin',
  },
]

const FEATURED_PRODUCTS = [
  {
    id: 8362,
    name: 'BAC Water',
    price: '$20.00',
    description: 'Bacteriostatic water for peptide reconstitution',
    image: 'https://telos-peptides.com/wp-content/uploads/2026/05/pomelli_photoshoot_image_9_16_0428-2-300x300.png',
  },
  {
    id: 8411,
    name: 'BPC-157',
    price: '$90.00',
    description: 'Bodyprotective compound for tissue research',
    image: 'https://telos-peptides.com/wp-content/uploads/2026/05/pomelli_photoshoot_image_9_16_0428-2-300x300.png',
  },
  {
    id: 8413,
    name: 'GHK-Cu',
    price: '$110.00',
    description: 'Copper tripeptide for aging research',
    image: 'https://telos-peptides.com/wp-content/uploads/2026/05/pomelli_photoshoot_image_9_16_0428-2-300x300.png',
  },
  {
    id: 8374,
    name: 'Ipamorelin / CJC',
    price: '$160.00',
    description: 'Growth hormone secretagogue combination',
    image: 'https://telos-peptides.com/wp-content/uploads/2026/05/pomelli_photoshoot_image_9_16_0428-2-300x300.png',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-950">
      {/* HERO SECTION - High Converting */}
      <section className="relative pt-20 pb-16 sm:pt-32 sm:pb-24 bg-gradient-to-b from-dark-900 to-dark-950 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            {/* Urgency Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent-gold/10 border border-accent-gold/30 text-accent-gold text-sm font-semibold">
                ✦ Limited Time Offer ✦
              </span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Buy 9, Get 1
              <span className="block bg-gradient-to-r from-accent-gold via-white to-accent-gold bg-clip-text text-transparent">
                FREE
              </span>
            </h1>

            {/* Sub Headline */}
            <p className="text-lg sm:text-xl text-dark-200 mb-8 max-w-2xl mx-auto">
              Research-grade peptides. Triple-tested. cGMP certified. Shipped cold-chain. Applied at checkout.
            </p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Button
                variant="primary"
                size="lg"
                className="inline-flex items-center gap-2 mb-8"
              >
                <ShoppingCart size={20} />
                Shop Now & Save
              </Button>
            </motion.div>

            {/* Trust Line */}
            <p className="text-sm text-dark-400">
              No minimum order • 21+ only • Research use only
            </p>
          </motion.div>
        </div>
      </section>

      {/* TRUST SIGNALS - Early, Prominent */}
      <section className="py-12 sm:py-16 bg-dark-900/50 border-y border-dark-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TRUST_SIGNALS.map((signal, i) => {
              const Icon = signal.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <Icon className="w-6 h-6 text-accent-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">{signal.label}</h4>
                    <p className="text-sm text-dark-300">{signal.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS - Conversion Optimized */}
      <section className="py-20 sm:py-28 bg-dark-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <p className="text-dark-300 max-w-2xl mx-auto">
              Every product includes COA & SDS via QR code. Eligible for Buy 9 Get 1 FREE promotion.
            </p>
          </motion.div>

          {/* Product Grid - Mobile First */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {FEATURED_PRODUCTS.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card hover glowing className="flex flex-col h-full overflow-hidden group">
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
                    <p className="text-dark-300 text-sm mb-4 flex-1">{product.description}</p>

                    {/* Price */}
                    <div className="mb-4">
                      <p className="text-2xl font-bold text-accent-gold">{product.price}</p>
                    </div>

                    {/* CTA Button */}
                    <Button
                      variant="primary"
                      size="md"
                      fullWidth
                      className="text-sm"
                    >
                      Add to Cart
                    </Button>
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
              className="inline-flex items-center gap-2 text-accent-gold hover:text-accent-gold/80 transition-colors font-semibold"
            >
              View All {FEATURED_PRODUCTS.length}+ Products →
            </a>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE TELOS - Social Proof */}
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
            <p className="text-dark-300">
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
                <Card hover className="p-6">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-dark-300 text-sm">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Conversion Focused */}
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
                <Card hover className="p-4 sm:p-6">
                  <h4 className="font-semibold text-white mb-2">{faq.q}</h4>
                  <p className="text-dark-300 text-sm">{faq.a}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
