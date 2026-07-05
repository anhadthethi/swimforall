"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Privacy() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            How we protect and use your information
          </motion.p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-xl text-gray-600 mb-8">
              At Swim for all, we take your privacy seriously. This policy explains what information we collect, 
              why we collect it, and how we protect it.
            </p>

            <div className="space-y-8">
              {/* What We Collect */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What Information We Collect</h2>
                <p className="text-gray-700 mb-4">
                  When you apply for a kit or contact us, we collect:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Parent/guardian name</li>
                  <li>Email address and phone number</li>
                  <li>Mailing address (for kit fulfillment)</li>
                  <li>Child's name and age</li>
                  <li>Responses to application questions</li>
                </ul>
              </div>

              {/* Why We Collect It */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Why We Collect It</h2>
                <p className="text-gray-700 mb-4">
                  We collect this information to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Review and process kit applications</li>
                  <li>Deliver swim kits to approved families</li>
                  <li>Share relevant follow-up information about local pools, lesson resources, and swimming tips</li>
                  <li>Improve our program and understand community needs</li>
                </ul>
              </div>

              {/* What We Don't Do */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Do NOT Do</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>We do not sell your data.</strong> Ever.</li>
                  <li><strong>We do not share your information with third parties</strong> for marketing or advertising purposes.</li>
                  <li><strong>We do not send spam.</strong> You'll only hear from us when it's relevant.</li>
                </ul>
              </div>

              {/* Email Communication */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Email Communication</h2>
                <p className="text-gray-700 mb-4">
                  If you've applied for a kit or opted into our updates, you may receive:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Application status updates</li>
                  <li>Kit fulfillment information</li>
                  <li>Occasional newsletters with impact stories and resources (1-2 times per month, maximum)</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  You can unsubscribe from non-essential emails at any time by clicking the unsubscribe link 
                  at the bottom of any email.
                </p>
              </div>

              {/* Data Security */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                <p className="text-gray-700">
                  Your information is stored securely and access is limited to Swim for all organizers and trusted 
                  advisors who help us run the program. We use industry-standard security practices to protect your data.
                </p>
              </div>

              {/* Children's Privacy */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
                <p className="text-gray-700">
                  We only collect information about children with explicit parent or guardian consent through our 
                  application form. We do not communicate directly with children. All contact is through parents or guardians.
                </p>
              </div>

              {/* Changes to This Policy */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
                <p className="text-gray-700">
                  We may update this privacy policy from time to time. If we make significant changes, we'll notify 
                  applicants and subscribers via email.
                </p>
              </div>

              {/* Contact */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions?</h2>
                <p className="text-gray-700">
                  If you have questions about how we handle your information, please{" "}
                  <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold">
                    contact us
                  </Link>
                  . We're happy to answer any concerns.
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-12 text-center">
              Last updated: January 26, 2026
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
