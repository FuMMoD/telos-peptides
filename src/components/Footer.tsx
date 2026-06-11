'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const footerLinks = {
  'Quick Links': [
    { label: 'Products', href: 'https://telos-peptides.com/store/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Affiliate Login', href: 'https://telos-peptides.com/my-account' },
  ],
  'Learn More': [
    { label: 'What Are Peptides', href: '/learn-more/what-are-peptides' },
    { label: 'GLP-3, GLP-2 & BAC', href: '/learn-more/glp' },
  ],
  Legal: [
    { label: 'Terms of Service', href: '/terms-of-service' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Shipping Policy', href: '/shipping-policy' },
    { label: 'Refund Policy', href: '/refund-policy' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-dark-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">
              TELOS
            </h2>
            <p className="text-white/60 text-sm">Research-grade peptides. Triple-tested. Trusted by scientists worldwide.</p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-dark-800 pt-8"
        >
          <p className="text-white/60 text-sm">© 2026 Telos Peptides. All rights reserved.</p>

          {/* Disclaimer */}
          <p className="text-white/50 text-xs mt-6 pt-6 border-t border-dark-800">
            ⚠️ Research Use Only – Products sold by Telos are intended exclusively for laboratory research. They are not medicines, supplements, or diagnostic tools and must never be consumed or injected into humans or animals. By purchasing, you confirm that you are a qualified researcher.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
