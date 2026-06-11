'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/Card'

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="text-white/70 text-sm">Last Updated: June 1, 2026</p>
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
              This Privacy Policy describes how Telos Wellness ("the Site", "we", "us", or "our") collects, uses, and discloses your personal information when you visit, use our services, or make a purchase from telos-peptides.com (the "Site") or otherwise communicate with us (collectively, the "Services"). For purposes of this Privacy Policy, "you" and "your" means you as the user of the Services, whether you are a customer, website visitor, or another individual whose information we have collected pursuant to this Privacy Policy.
            </p>
            <p className="text-white/80 leading-relaxed mt-4">
              Please read this Privacy Policy carefully. By using and accessing any of the Services, you agree to the collection, use, and disclosure of your information as described in this Privacy Policy. If you do not agree, please do not use or access any of the Services.
            </p>
          </Card>

          {/* Changes */}
          <Card className="p-8 sm:p-12">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              CHANGES TO THIS PRIVACY POLICY
            </h2>
            <p className="text-white/80 leading-relaxed">
              We may update this Privacy Policy from time to time, including to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will post the revised Privacy Policy on the Site and update the "Last Updated" date.
            </p>
          </Card>

          {/* Collection */}
          <Card className="p-8 sm:p-12">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              HOW WE COLLECT AND USE YOUR PERSONAL INFORMATION
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">
              To provide the Services, we collect personal information about you from a variety of sources as set out below. The information that we collect and use varies depending on how you interact with us.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Information We Collect Directly from You</h3>
                <p className="text-white/80 mb-3">Information that you directly submit to us through our Services may include:</p>
                <ul className="text-white/80 space-y-2 ml-4">
                  <li>• Basic contact details including your name, address, phone number, and email</li>
                  <li>• Order information including your name, billing address, shipping address, payment confirmation, email address, and phone number</li>
                  <li>• Account information including your username, password, and security questions</li>
                  <li>• Shopping information including the items you view, place in your cart, or add to your wishlist</li>
                  <li>• Customer support information including communications you send us through the Services</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Information We Collect through Cookies</h3>
                <p className="text-white/80">
                  We automatically collect certain information about your interaction with the Services ("Usage Data") using cookies, pixels, and similar technologies. Usage Data may include information about how you access and use our Site and your account, including device information, browser information, network connection details, your IP address, and other interaction data.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Information We Obtain from Third Parties</h3>
                <p className="text-white/80">
                  We may obtain information about you from third parties, including vendors and service providers who may collect information on our behalf, such as payment processors and site analytics providers. Any information obtained from third parties will be treated in accordance with this Privacy Policy.
                </p>
              </div>
            </div>
          </Card>

          {/* How We Use */}
          <Card className="p-8 sm:p-12">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              HOW WE USE YOUR PERSONAL INFORMATION
            </h2>
            <div className="space-y-4 text-white/80">
              <p><strong>Providing Products and Services:</strong> We use your personal information to process your payments, fulfill your orders, manage your account, arrange shipping, and facilitate any approved returns.</p>
              <p><strong>Marketing and Advertising:</strong> If you opt in to receive marketing communications, we may use your personal information to send promotional emails or display relevant advertisements. You may opt out at any time.</p>
              <p><strong>Security and Fraud Prevention:</strong> We use your personal information to detect, investigate, or take action regarding possible fraudulent, illegal, or malicious activity.</p>
              <p><strong>Communicating with You:</strong> We use your personal information to provide customer support and improve our Services.</p>
            </div>
          </Card>

          {/* Cookies */}
          <Card className="p-8 sm:p-12">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              COOKIES
            </h2>
            <p className="text-white/80 leading-relaxed">
              Like many websites, we use cookies on our Site to power and improve our Site and Services, to run analytics, and to better understand user interaction. Most browsers automatically accept cookies by default, but you can choose to set your browser to remove or reject cookies through your browser controls. Please note that removing or blocking cookies may negatively impact your user experience.
            </p>
          </Card>

          {/* Disclosure */}
          <Card className="p-8 sm:p-12">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              HOW WE DISCLOSE PERSONAL INFORMATION
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              In certain circumstances, we may disclose your personal information to third parties for legitimate purposes, including:
            </p>
            <ul className="text-white/80 space-y-2 ml-4">
              <li>• Vendors or third parties who perform services on our behalf (e.g., payment processing, data analytics, customer support, cloud storage, fulfillment, and shipping)</li>
              <li>• Business and marketing partners to provide services and advertise to you</li>
              <li>• When you direct us or otherwise consent to our disclosure of certain information to third parties</li>
              <li>• Within our corporate group in our legitimate interests to run a successful business</li>
              <li>• In connection with a business transaction such as a merger or acquisition, or to comply with applicable legal obligations</li>
            </ul>
          </Card>

          {/* SMS */}
          <Card className="p-8 sm:p-12">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              SMS MESSAGING & COMPLIANCE
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              By opting into our SMS messaging services, you agree to receive text messages related to our services, including order updates, customer support, and important notifications.
            </p>
            <div className="space-y-4 text-white/80">
              <p><strong>Opt-In & Consent:</strong> You will only receive messages if you have explicitly opted in. We maintain timestamped records of all opt-in actions and comply with the Telephone Consumer Protection Act (TCPA) and all applicable laws.</p>
              <p><strong>Opt-Out Instructions:</strong> You can cancel SMS notifications at any time by replying "STOP." You will receive a final confirmation message, and no further messages will be sent unless you re-opt in.</p>
              <p><strong>Help & Support:</strong> Reply "HELP" for assistance or contact us at Support@telos-peptides.com. Standard message and data rates may apply.</p>
              <p><strong>SMS Data Protection:</strong> No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with any third parties.</p>
            </div>
          </Card>

          {/* User Generated Content */}
          <Card className="p-8 sm:p-12">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              USER GENERATED CONTENT
            </h2>
            <p className="text-white/80 leading-relaxed">
              The Services may enable you to post product reviews and other user-generated content. If you choose to submit user-generated content to any public area of the Services, this content will be public and accessible by anyone. We are not responsible for the privacy or security of any information that you make publicly available.
            </p>
          </Card>

          {/* Third Party Links */}
          <Card className="p-8 sm:p-12">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              THIRD PARTY WEBSITES AND LINKS
            </h2>
            <p className="text-white/80 leading-relaxed">
              Our Site may provide links to websites or other online platforms operated by third parties. We do not guarantee and are not responsible for the privacy or security of such sites. Our inclusion of such links does not imply any endorsement of the content on such platforms.
            </p>
          </Card>

          {/* Children's Data */}
          <Card className="p-8 sm:p-12">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              CHILDREN'S DATA
            </h2>
            <p className="text-white/80 leading-relaxed">
              The Services are not intended to be used by children, and we do not knowingly collect any personal information about children. If you are the parent or guardian of a child who has provided us with their personal information, you may contact us to request that it be deleted.
            </p>
          </Card>

          {/* Security */}
          <Card className="p-8 sm:p-12">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              SECURITY AND RETENTION OF YOUR INFORMATION
            </h2>
            <p className="text-white/80 leading-relaxed">
              Please be aware that no security measures are perfect or impenetrable, and we cannot guarantee "perfect security." How long we retain your personal information depends on different factors, such as whether we need the information to maintain your account, provide the Services, comply with legal obligations, or resolve disputes.
            </p>
          </Card>

          {/* Rights and Choices */}
          <Card className="p-8 sm:p-12">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              YOUR RIGHTS AND CHOICES
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Depending on where you live, you may have some or all of the following rights in relation to your personal information:
            </p>
            <ul className="text-white/80 space-y-2 ml-4">
              <li>• <strong>Right to Access / Know:</strong> Request access to personal information we hold about you</li>
              <li>• <strong>Right to Delete:</strong> Request that we delete personal information we maintain about you</li>
              <li>• <strong>Right to Correct:</strong> Request that we correct inaccurate personal information</li>
              <li>• <strong>Right of Portability:</strong> Receive a copy of your personal information and request transfer to a third party</li>
              <li>• <strong>Right to Opt Out of Sale or Sharing:</strong> Direct us not to "sell" or "share" your personal information</li>
              <li>• <strong>Withdrawal of Consent:</strong> Where we rely on consent to process your personal information, you may withdraw this consent</li>
              <li>• <strong>Managing Communication Preferences:</strong> Opt out of promotional emails at any time using the unsubscribe option</li>
            </ul>
            <p className="text-white/80 leading-relaxed mt-4">
              You may exercise any of these rights by contacting us using the contact details provided below. We will not discriminate against you for exercising any of these rights.
            </p>
          </Card>

          {/* International Users */}
          <Card className="p-8 sm:p-12">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              INTERNATIONAL USERS
            </h2>
            <p className="text-white/80 leading-relaxed">
              Please note that we may transfer, store, and process your personal information outside the country you live in, including the United States. If we transfer your personal information out of Europe, we will rely on recognized transfer mechanisms such as the European Commission's Standard Contractual Clauses.
            </p>
          </Card>

          {/* Contact Section */}
          <Card className="p-8 sm:p-12 bg-dark-900/50">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              CONTACT US
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              If you have questions about our privacy practices or this Privacy Policy, or wish to exercise any of your rights, please contact us:
            </p>
            <div className="space-y-3 text-white/80">
              <p>📧 <strong>Email:</strong> Support@telos-peptides.com</p>
              <p>💬 <strong>WhatsApp:</strong> 786-779-9856</p>
              <p>📍 <strong>Address:</strong> 1521 Alton RD #93, Miami Beach, FL 33139-3301</p>
            </div>
          </Card>

          {/* Footer */}
          <p className="text-white/60 text-xs text-center">
            Last Updated: June 1, 2026
          </p>
        </motion.div>
      </div>
    </div>
  )
}
