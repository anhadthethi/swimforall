"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Terms() {
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
            Terms of Service
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            How our program works and what to expect
          </motion.p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-xl text-gray-600 mb-8">
              By using the Swim for all website and applying for a kit, you agree to these terms. 
              We've kept them simple and straightforward—here's how our program works.
            </p>

            <div className="space-y-8">
              {/* Use of the Site */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of the Site</h2>
                <p className="text-gray-700 mb-4">
                  The information on this website is provided for general use. When you submit an application 
                  or contact form, you agree to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Provide accurate and honest information</li>
                  <li>Use the site for its intended purpose (applying for kits, learning about our program)</li>
                  <li>Not misuse or abuse the application process</li>
                </ul>
              </div>

              {/* Program Scope */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What Swim for all Provides</h2>
                <p className="text-gray-700 mb-4">
                  Swim for all is a connector, not a swim school. Here's what we do—and what we don't:
                </p>
                <div className="bg-green-50 p-6 rounded-lg mb-4">
                  <h3 className="font-semibold text-green-900 mb-2">✓ What We Provide</h3>
                  <ul className="list-disc pl-6 text-green-800 space-y-1">
                    <li>Free swim equipment kits for eligible families</li>
                    <li>Guidance on finding local pools and lesson programs</li>
                    <li>Resource sheets with safety tips and getting-started information</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">What We Do NOT Provide</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>We do <strong>not</strong> provide swim instruction or lessons</li>
                    <li>We do <strong>not</strong> supervise or monitor swim lessons</li>
                    <li>We do <strong>not</strong> operate pools or swimming facilities</li>
                  </ul>
                </div>
              </div>

              {/* Eligibility & Availability */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Eligibility & Availability</h2>
                <p className="text-gray-700">
                  Kits are available to families who meet our eligibility requirements (ages 8-12, income guidelines, etc.). 
                  However:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
                  <li>Kit availability depends on donations and resources</li>
                  <li>Submitting an application does not guarantee kit approval</li>
                  <li>We review applications on a case-by-case basis and respond within 2-3 business days</li>
                  <li>If we cannot fulfill a request, we'll help connect families to alternative resources</li>
                </ul>
              </div>

              {/* Safety Disclaimer */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Safety & Responsibility</h2>
                <p className="text-gray-700 mb-4">
                  Swimming is a wonderful skill, but it comes with inherent risks. By accepting a kit, families acknowledge:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Participation in swim lessons and water activities is at the family's own discretion and risk</li>
                  <li>Families are responsible for choosing qualified instructors and safe swimming environments</li>
                  <li>Swim for all is not liable for injuries, accidents, or issues that occur during lessons or water activities</li>
                  <li>Equipment is provided "as-is" and should be inspected by families before use</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  We care deeply about water safety—that's why we exist—but we cannot supervise how families use the 
                  equipment or which programs they choose.
                </p>
              </div>

              {/* Changes to the Program */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to the Program</h2>
                <p className="text-gray-700">
                  We may update kit contents, eligibility requirements, or program details over time as we learn 
                  and improve. Any significant changes will be reflected on this website.
                </p>
              </div>

              {/* Contact */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About These Terms?</h2>
                <p className="text-gray-700">
                  If anything here is unclear or you have concerns, please{" "}
                  <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold">
                    contact us
                  </Link>
                  . We're happy to clarify.
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
