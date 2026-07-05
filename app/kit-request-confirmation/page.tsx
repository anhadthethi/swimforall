"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function KitRequestConfirmation() {
  return (
    <div className="min-h-screen">
      {/* Confirmation Hero */}
      <section className="bg-gradient-to-r from-green-600 to-teal-500 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="text-6xl mb-4">✓</div>
          </motion.div>
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Your Kit Request Has Been Received
          </motion.h1>
          <motion.p
            className="text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We're reviewing your application and will be in touch soon.
          </motion.p>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-blue-50 rounded-lg p-8 mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Happens Next</h2>
            
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold text-lg">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Review (1-2 Business Days)</h3>
                  <p className="text-gray-600">
                    We'll carefully review your application to make sure your family is a good fit for the program. We're not looking for anything fancy—just a sense that you're committed to getting your child in the water.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold text-lg">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">We'll Email You (Within 2-3 Business Days)</h3>
                  <p className="text-gray-600">
                    If approved, we'll reach out with the next steps—where to pick up the kit, how to connect with a local swim program, and any questions you might have.
                  </p>
                  <p className="text-gray-600 mt-2">
                    <strong>If we can't fulfill your request right now,</strong> we'll still reach out to connect you with local resources and let you know when you might hear back.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold text-lg">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Your Kit & Start Swimming</h3>
                  <p className="text-gray-600">
                    Once you receive your kit, we'll send you simple guidance on how to get started with a local swim program. You won't be left hanging—we're here to help every step of the way.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white border-l-4 border-blue-600 p-8 rounded-lg shadow-sm mb-12"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Important Details</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <strong className="text-gray-900">Timeline:</strong> We typically respond within 2-3 business days.
              </li>
              <li>
                <strong className="text-gray-900">Check your email:</strong> Make sure to check your inbox and spam folder for our response.
              </li>
              <li>
                <strong className="text-gray-900">Questions?</strong> If you don't hear from us within 4 business days, feel free to reach out.
              </li>
              <li>
                <strong className="text-gray-900">No rush:</strong> There's no deadline to submit your information—apply whenever you're ready to get your child into the water.
              </li>
            </ul>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gray-50 p-8 rounded-lg text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">In the Meantime</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Learn more about our program, find local swim resources, or reach out with any questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about">
                <Button variant="outline" size="lg">
                  Learn About Our Mission
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" style={{backgroundColor: 'var(--brand-accent)'}}>
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reassurance Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">You're in Good Hands</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We know this is an important decision for your family. We're committed to making this process simple, transparent, 
              and supportive. You won't be left guessing—we'll keep you informed every step of the way. That's what Swim for all is all about.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
