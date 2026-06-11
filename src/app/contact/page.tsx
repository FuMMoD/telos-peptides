'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { Mail, MessageSquare } from 'lucide-react'

export default function Contact() {
  return (
    <div className="min-h-screen bg-dark-950 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-white/80 text-lg mb-6">
            We're Here to Help!
          </p>
          <p className="text-white/70 max-w-2xl mx-auto">
            At Telos, your satisfaction is our top priority. We encourage you to reach out with any questions, concerns, or feedback, as our dedicated team is always eager to assist you.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="p-8 sm:p-12">
            <form className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:border-accent-gold"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:border-accent-gold"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:border-accent-gold"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:border-accent-gold resize-none"
                  placeholder="Your message..."
                />
              </div>

              <Button variant="primary" size="lg" fullWidth>
                <MessageSquare size={20} />
                Send Message
              </Button>
            </form>
          </Card>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-serif font-bold text-white mb-8 text-center">
            Or Reach Out Directly
          </h2>
          <Card className="p-8 sm:p-12 text-center">
            <div className="flex justify-center mb-4">
              <Mail className="w-8 h-8 text-accent-gold" />
            </div>
            <p className="text-white/80">
              Whether you need help with product inquiries or simply want to share your experience with us, we're just a message away.
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
