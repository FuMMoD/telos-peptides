'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/Card'

export default function ShippingPolicy() {
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
            Shipping Policy
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
          {/* Important Notice */}
          <Card className="p-8 sm:p-12 border-l-4 border-accent-gold">
            <h2 className="text-2xl font-serif font-bold text-white mb-4">
              IMPORTANT NOTICE
            </h2>
            <p className="text-white/80 leading-relaxed">
              All products sold by Telos Wellness are research compounds intended EXCLUSIVELY for in-vitro laboratory research purposes only. Products are NOT for human or animal use, consumption, or any form of bodily introduction. By placing an order, you acknowledge acceptance of our Terms and Conditions.
            </p>
          </Card>

          {/* Order Processing */}
          <Card className="p-8 sm:p-12">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              ORDER PROCESSING
            </h2>
            <p className="text-white/80 leading-relaxed">
              All orders are processed within <strong>1–2 business days</strong> (Monday through Friday, excluding federal holidays). Orders placed after business hours or on weekends will begin processing the next business day. You will receive an email confirmation once your order has been placed, and a second notification with tracking information once your order has shipped.
            </p>
          </Card>

          {/* Domestic Shipping */}
          <Card className="p-8 sm:p-12">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              DOMESTIC SHIPPING (USA)
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">
              We offer the following shipping options for orders shipped within the United States:
            </p>
            <ul className="text-white/80 space-y-3 mb-6 ml-4">
              <li>• <strong>Standard Shipping (USPS/UPS):</strong> 5–7 business days after processing</li>
              <li>• <strong>Expedited Shipping:</strong> 2–3 business days after processing</li>
              <li>• <strong>Priority Overnight:</strong> Next business day after processing (order must be placed before 12:00 PM EST)</li>
            </ul>
            <p className="text-white/80 leading-relaxed">
              We offer <strong>FREE standard shipping</strong> on all domestic orders over $300.
            </p>
          </Card>

          {/* Shipping Carriers */}
          <Card className="p-8 sm:p-12">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              SHIPPING CARRIERS
            </h2>
            <p className="text-white/80 leading-relaxed">
              We ship via USPS, UPS, and FedEx. All shipments include tracking information provided via email once your order ships.
            </p>
          </Card>

          {/* Discreet Packaging */}
          <Card className="p-8 sm:p-12">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              DISCREET PACKAGING
            </h2>
            <p className="text-white/80 leading-relaxed">
              All orders are shipped in plain, unmarked packaging to protect your privacy. Our company name does not appear on the exterior of any package.
            </p>
          </Card>

          {/* International Shipping */}
          <Card className="p-8 sm:p-12">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              INTERNATIONAL SHIPPING
            </h2>
            <p className="text-white/80 leading-relaxed">
              At this time, Telos Wellness does not ship internationally. We serve customers within the United States only.
            </p>
          </Card>

          {/* Shipping Delays */}
          <Card className="p-8 sm:p-12">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              SHIPPING DELAYS
            </h2>
            <p className="text-white/80 leading-relaxed">
              While we make every effort to ship your order on time, Telos Wellness is not responsible for delays caused by weather events, carrier delays, or other circumstances beyond our control. If your package appears delayed or lost in transit, please contact us at <strong>Support@telos-peptides.com</strong> or via WhatsApp at <strong>786-779-9856</strong>.
            </p>
          </Card>

          {/* Temperature-Sensitive Products */}
          <Card className="p-8 sm:p-12">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              TEMPERATURE-SENSITIVE PRODUCTS
            </h2>
            <p className="text-white/80 leading-relaxed">
              Some of our research compounds are temperature-sensitive. It is the customer's responsibility to ensure someone is available to receive the package promptly upon delivery.
            </p>
          </Card>

          {/* Address Accuracy */}
          <Card className="p-8 sm:p-12">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              ADDRESS ACCURACY
            </h2>
            <p className="text-white/80 leading-relaxed">
              Please ensure your shipping address is accurate and complete at the time of checkout. Telos Wellness is not responsible for orders shipped to an incorrect address provided by the customer.
            </p>
          </Card>

          {/* Contact Section */}
          <Card className="p-8 sm:p-12 bg-dark-900/50">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              CONTACT US
            </h2>
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
