'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const footerLinks = {
  'Quick Links': [
    { label: 'Products', href: '/shop' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
  ],
  Legal: [
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Shipping Policy', href: '/shipping' },
    { label: 'Refund Policy', href: '/refunds' },
  ],
  Connect: [
    { label: 'Affiliate Program', href: '/affiliate' },
    { label: 'Newsletter', href: '#' },
    { label: 'Twitter', href: '#' },
    { label: 'Instagram', href: '#' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-dark-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-accent-cyan mb-4">
              TELOS
            </h2>
            <p className="text-dark-300 text-sm">Research-grade peptides for scientific laboratories.</p>
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
                      className="text-dark-300 hover:text-accent-cyan transition-colors duration-300 text-sm"
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
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-dark-400 text-sm">© 2026 Telos Peptides. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link href="#" className="text-dark-400 hover:text-accent-cyan transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-7.007 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-dark-500 text-xs mt-6 pt-6 border-t border-dark-800">
            ⚠️ Research Use Only – Products sold by Telos are intended exclusively for laboratory research. They are not medicines, supplements, or diagnostic tools and must never be consumed or injected.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
