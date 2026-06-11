'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/Card'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-dark-950 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-white/70 text-sm">Effective Date: June 1, 2026</p>
        </motion.div>

        {/* Content Sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Introduction */}
          <Card className="p-8 sm:p-12">
            <p className="text-white/80 leading-relaxed">
              Welcome to Telos Wellness. These Terms of Service ("Terms") govern your access to and use of our website at telos-peptides.com and the purchase of products from Telos Wellness. By accessing this website or placing an order, you agree to be bound by these Terms.
            </p>
          </Card>

          {/* Section 1 */}
          <Card className="p-8 sm:p-12">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              1. ACCEPTANCE OF TERMS
            </h2>
            <p className="text-white/80 leading-relaxed">
              By accessing or using telos-peptides.com, you confirm that you are at least 18 years of age, have read and understood these Terms, and agree to be bound by them.
            </p>
          </Card>

          {/* Section 2 */}
          <Card className="p-8 sm:p-12 border-l-4 border-accent-gold">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              2. RESEARCH USE ONLY
            </h2>
            <p className="text-white/80 leading-relaxed">
              All products sold by Telos Wellness are research compounds intended <strong>EXCLUSIVELY for in-vitro laboratory research purposes only</strong>. These products are NOT approved by the FDA for any purpose, NOT intended for human or animal use or consumption, and NOT intended to diagnose, treat, cure, or prevent any disease. Bodily introduction of any kind into humans or animals is strictly prohibited.
            </p>
          </Card>

          {/* Section 3 */}
          <Card className="p-8 sm:p-12">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              3. ELIGIBILITY
            </h2>
            <p className="text-white/80 leading-relaxed">
              By using our website and purchasing our products, you confirm that you are at least 18 years of age and a qualified researcher. Telos Wellness reserves the right to refuse service to anyone at any time for any reason.
            </p>
          </Card>

          {/* Section 4 */}
          <Card className="p-8 sm:p-12">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              4. PRODUCT DESCRIPTIONS AND PRICING
            </h2>
            <p className="text-white/80 leading-relaxed">
              We make every effort to display accurate product information. However, we reserve the right to correct any errors or omissions and to change or update information at any time without prior notice. All prices are listed in US Dollars and are subject to change without notice.
            </p>
          </Card>

          {/* Section 5 */}
          <Card className="p-8 sm:p-12">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              5. ORDERS AND PAYMENT
            </h2>
            <p className="text-white/80 leading-relaxed">
              By placing an order, you represent that all information you provide is accurate and complete. Payment must be received in full before orders are processed and shipped. We reserve the right to refuse or cancel any order for any reason.
            </p>
          </Card>

          {/* Section 6 */}
          <Card className="p-8 sm:p-12">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              6. SHIPPING AND DELIVERY
            </h2>
            <p className="text-white/80 leading-relaxed">
              Shipping terms are governed by our Shipping Policy, which is incorporated into these Terms by reference. Title and risk of loss for products pass to you upon our delivery to the shipping carrier.
            </p>
          </Card>

          {/* Section 7 */}
          <Card className="p-8 sm:p-12">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              7. RETURNS AND REFUNDS
            </h2>
            <p className="text-white/80 leading-relaxed">
              All sales are final. Returns and refunds are governed by our Return & Refund Policy, which is incorporated into these Terms by reference.
            </p>
          </Card>

          {/* Section 8 */}
          <Card className="p-8 sm:p-12">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              8. INTELLECTUAL PROPERTY
            </h2>
            <p className="text-white/80 leading-relaxed">
              All content on this website is the property of Telos Wellness or its content suppliers and is protected by applicable intellectual property laws. Unauthorized reproduction or distribution is prohibited.
            </p>
          </Card>

          {/* Section 9 */}
          <Card className="p-8 sm:p-12 bg-dark-900/50">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              9. DISCLAIMER OF WARRANTIES
            </h2>
            <p className="text-white/80 leading-relaxed font-semibold">
              THE WEBSITE AND ALL PRODUCTS ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND. TELOS WELLNESS DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
          </Card>

          {/* Section 10 */}
          <Card className="p-8 sm:p-12 bg-dark-900/50">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              10. LIMITATION OF LIABILITY
            </h2>
            <p className="text-white/80 leading-relaxed font-semibold">
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, TELOS WELLNESS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES. TELOS WELLNESS'S TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID FOR THE PRODUCTS IN QUESTION.
            </p>
          </Card>

          {/* Section 11 */}
          <Card className="p-8 sm:p-12">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              11. INDEMNIFICATION
            </h2>
            <p className="text-white/80 leading-relaxed">
              You agree to indemnify, defend, and hold harmless Telos Wellness and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, and expenses arising out of or relating to your violation of these Terms or your use of our website or products.
            </p>
          </Card>

          {/* Section 12 */}
          <Card className="p-8 sm:p-12">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              12. GOVERNING LAW
            </h2>
            <p className="text-white/80 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the State of Florida. Any legal action shall be brought exclusively in the courts located in Miami-Dade County, Florida.
            </p>
          </Card>

          {/* Section 13 */}
          <Card className="p-8 sm:p-12">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              13. CHANGES TO THESE TERMS
            </h2>
            <p className="text-white/80 leading-relaxed">
              Telos Wellness reserves the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of the website constitutes acceptance of the updated Terms.
            </p>
          </Card>

          {/* Section 14 */}
          <Card className="p-8 sm:p-12 bg-dark-900/50">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              14. CONTACT US
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              For questions regarding these Terms of Service:
            </p>
            <div className="space-y-3 text-white/80">
              <p>📧 <strong>Email:</strong> Support@telos-peptides.com</p>
              <p>💬 <strong>WhatsApp:</strong> 786-779-9856</p>
              <p>📍 <strong>Address:</strong> 1521 Alton RD #93, Miami Beach, FL 33139-3301</p>
            </div>
          </Card>

          {/* Disclaimer */}
          <p className="text-white/60 text-xs text-center border-t border-dark-800 pt-8">
            All products sold by Telos Wellness are intended for in-vitro laboratory research purposes only. Products have not been evaluated or approved by the FDA for any purpose. Bodily introduction of any kind into humans or animals is strictly prohibited.
          </p>
          <p className="text-white/60 text-xs text-center">
            Last Updated: June 1, 2026
          </p>
        </motion.div>
      </div>
    </div>
  )
}
