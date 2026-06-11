'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/Card'

export default function RefundPolicy() {
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
            Return & Refund Policy
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
              All products sold by Telos Wellness are research compounds intended EXCLUSIVELY for in-vitro laboratory research purposes only. Products are NOT for human or animal use, consumption, or any form of bodily introduction. By placing an order, you acknowledge acceptance of our Terms and Conditions and the Legal Notice included with all shipments.
            </p>
          </Card>

          {/* All Sales Final */}
          <Card className="p-8 sm:p-12">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              ALL SALES ARE FINAL
            </h2>
            <p className="text-white/80 leading-relaxed">
              Due to the nature of research compounds and the impossibility of verifying product integrity after delivery, <strong>Telos Wellness does not accept returns of any products once shipped.</strong> This policy protects the integrity of our products and the safety of the research community.
            </p>
          </Card>

          {/* Order Cancellations */}
          <Card className="p-8 sm:p-12">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              ORDER CANCELLATIONS
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Before Shipment:</strong> Order cancellations are accepted and will receive a full refund if requested before your order has shipped.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>After Shipment:</strong> Once your order has shipped, cancellation is no longer possible. Please contact us immediately if you need to cancel an order.
            </p>
            <p className="text-white/80 leading-relaxed">
              To request a cancellation, email <strong>Support@telos-peptides.com</strong> with your order number.
            </p>
          </Card>

          {/* Exceptions */}
          <Card className="p-8 sm:p-12">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              EXCEPTIONS (COMPANY DISCRETION)
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Refunds or replacements may be considered at the sole discretion of Telos Wellness for the following situations only:
            </p>

            <div className="space-y-6">
              {/* Shipping Damage */}
              <div className="border-l-2 border-accent-gold pl-4">
                <h3 className="text-lg font-semibold text-white mb-3">Shipping Damage</h3>
                <p className="text-white/80 mb-2">If your order arrives damaged during transit:</p>
                <ul className="text-white/70 space-y-1 ml-4">
                  <li>• <strong>Time Limit:</strong> Claim must be submitted within 48 hours of delivery confirmation</li>
                  <li>• <strong>Required Documentation:</strong> Photographs of damaged product(s), packaging, shipping label, and your order number</li>
                </ul>
              </div>

              {/* Wrong Item */}
              <div className="border-l-2 border-accent-gold pl-4">
                <h3 className="text-lg font-semibold text-white mb-3">Wrong Item Received</h3>
                <p className="text-white/80 mb-2">If you receive an incorrect product:</p>
                <ul className="text-white/70 space-y-1 ml-4">
                  <li>• <strong>Time Limit:</strong> Claim must be submitted within 48 hours of delivery confirmation</li>
                  <li>• <strong>Required Documentation:</strong> Photograph of item(s) received, your order number, and description of what you ordered vs. what you received</li>
                </ul>
              </div>

              {/* Missing Items */}
              <div className="border-l-2 border-accent-gold pl-4">
                <h3 className="text-lg font-semibold text-white mb-3">Missing Items</h3>
                <p className="text-white/80 mb-2">If items are missing from your order:</p>
                <ul className="text-white/70 space-y-1 ml-4">
                  <li>• <strong>Time Limit:</strong> Claim must be submitted within 48 hours of delivery confirmation</li>
                  <li>• <strong>Required Documentation:</strong> Photograph of items received, packing slip (if included), your order number, and list of missing items</li>
                </ul>
              </div>

              {/* Quality Concerns */}
              <div className="border-l-2 border-accent-gold pl-4">
                <h3 className="text-lg font-semibold text-white mb-3">Product Quality Concerns</h3>
                <p className="text-white/80 mb-2">If you have concerns about product quality upon receipt:</p>
                <ul className="text-white/70 space-y-1 ml-4">
                  <li>• <strong>Time Limit:</strong> Claim must be submitted within 5 business days of delivery</li>
                  <li>• <strong>Required Documentation:</strong> Order number, lot number, detailed description of the quality concern, and photographs (if applicable)</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Non-Refundable */}
          <Card className="p-8 sm:p-12">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              NON-REFUNDABLE SITUATIONS
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Refunds will NOT be provided under the following circumstances:
            </p>
            <ul className="text-white/80 space-y-2 ml-4">
              <li>• Change of mind or buyer's remorse</li>
              <li>• Claims submitted after the applicable deadline</li>
              <li>• Products that have been opened, reconstituted, or used</li>
              <li>• Claims related to product effectiveness</li>
              <li>• Temperature damage due to failure to receive shipment promptly</li>
              <li>• Orders shipped to an incorrect address provided by the customer</li>
              <li>• Orders placed in violation of our Terms and Conditions</li>
            </ul>
          </Card>

          {/* How to Submit */}
          <Card className="p-8 sm:p-12">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              HOW TO SUBMIT A CLAIM
            </h2>
            <div className="space-y-3 text-white/80">
              <p>📧 <strong>Email:</strong> Support@telos-peptides.com</p>
              <p className="text-white/70 italic">Use subject line: "CLAIM – Order #[your order number]"</p>
              <p>Include all required documentation as specified above.</p>
              <p>Our team will review your claim and respond within 2–3 business days.</p>
            </div>
          </Card>

          {/* Approved Refunds */}
          <Card className="p-8 sm:p-12">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              APPROVED REFUNDS
            </h2>
            <p className="text-white/80 leading-relaxed">
              If a refund is approved, it will be issued to your original payment method. Please allow up to 10 business days for processing. If more than 15 business days have passed, contact us at <strong>Support@telos-peptides.com</strong>.
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
