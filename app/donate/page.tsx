"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Donate() {
  const [donationType, setDonationType] = useState<"equipment" | null>(null);

  // Equipment donation view
  if (donationType === "equipment") {
    return (
      <div className="min-h-screen">
        <section className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Donate Swimming Equipment
            </motion.h1>
            <motion.p
              className="text-xl max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Help us build more kits by donating gently used training gear.
            </motion.p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">What We Accept</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Item Types</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-green-600 font-bold mr-3">✓</span>
                      <span>Kickboards</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 font-bold mr-3">✓</span>
                      <span>Towels</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 font-bold mr-3">✓</span>
                      <span>Goggles (clean, functional)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 font-bold mr-3">✓</span>
                      <span>Silicone swim caps</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 font-bold mr-3">✓</span>
                      <span>Swim-themed stickers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 font-bold mr-3">✓</span>
                      <span>Mesh bags</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Condition Guidelines</h3>
                  <p className="text-gray-600 mb-4">
                    We accept gently used items in working condition. All gear is inspected before distribution.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Items should be clean and free of damage. Please don't send broken or unusable equipment.
                  </p>
                </div>
              </div>

              <div className="border-t pt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">How to Donate</h3>
                <p className="text-gray-600 mb-6">
                  Ready to donate? Contact us to arrange a drop-off or pickup.
                </p>
                <div className="space-y-3">
                  <Button
                    onClick={() => setDonationType(null)}
                    className="w-full"
                    style={{ backgroundColor: "var(--brand-accent)" }}
                  >
                    Back to Donation Options
                  </Button>
                  <Link href="/contact">
                    <Button className="w-full" variant="outline">
                      Contact Us to Donate Gear
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  // Initial donation choice view
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            Help Kids Make a Splash
          </motion.h1>
          <motion.p 
            className="text-xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your donation—whether gear or funds—removes barriers and opens doors.
          </motion.p>
        </div>
      </section>

      {/* Financial Contribution & Equipment Donation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <Card className="h-full text-center">
              <CardHeader>
                <CardTitle className="text-2xl">Make a Financial Contribution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">Your donation directly funds beginner swim kits, preparation, and program support.</p>
                <div className="space-y-2 flex flex-col items-center">
                  <Button
                    asChild
                    className="w-full md:w-auto"
                    style={{ backgroundColor: "var(--brand-accent)" }}
                  >
                    <Link href="/donate/checkout">Donate Now</Link>
                  </Button>
                  <p className="text-sm text-gray-600">Secure checkout. 100% of donations support Swim for all programs.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Donate Swimming Equipment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">Help us build more kits by donating gently used training gear.</p>
                <h4 className="font-semibold">What we accept:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Kickboards</li>
                  <li>Towels</li>
                  <li>Mesh bags</li>
                  <li>Goggles (clean, functional)</li>
                  <li>Silicone swim caps</li>
                  <li>Swim-themed stickers</li>
                </ul>
                <Button
                  className="w-full mt-2"
                  style={{backgroundColor: 'var(--brand-primary)'}}
                  onClick={() => setDonationType("equipment")}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Donate Swimming Equipment (now integrated side-by-side above) */}

      {/* Impact Visualization */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Impact by Amount</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm text-center"
            >
              <div className="text-4xl font-bold text-[var(--brand-primary)] mb-4">$25</div>
                <div className="text-2xl font-semibold mb-4">→</div>
                <h3 className="text-xl font-semibold mb-3">One Child's First Kit</h3>
                <ul className="text-left text-gray-600 text-sm space-y-2">
                  <li>✓ Goggles, cap & kickboard for one child</li>
                  <li>✓ Everything needed for day one</li>
                  <li>✓ Assembled & ready to go</li>
                </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm text-center border-2 border-[var(--brand-primary)]"
            >
              <div className="text-4xl font-bold text-[var(--brand-primary)] mb-4">$50</div>
                <div className="text-2xl font-semibold mb-4">→</div>
                <h3 className="text-xl font-semibold mb-3">Kit + Ready to Swim</h3>
                <ul className="text-left text-gray-600 text-sm space-y-2">
                  <li>✓ Full kit covered</li>
                  <li>✓ Cleaned, sanitized & inspected</li>
                  <li>✓ Supports kit prep and family guidance</li>
                </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm text-center"
            >
              <div className="text-4xl font-bold text-[var(--brand-primary)] mb-4">$100</div>
                <div className="text-2xl font-semibold mb-4">→</div>
                <h3 className="text-xl font-semibold mb-3">Change a Whole Family</h3>
                <ul className="text-left text-gray-600 text-sm space-y-2">
                  <li>✓ Funds 4 kids' kits</li>
                  <li>✓ Expands local outreach and operations</li>
                  <li>✓ Helps more families get started</li>
                </ul>
            </motion.div>
          </div>

          <p className="text-center text-sm text-gray-600 mt-8">
            We rely on donated equipment to keep costs low and make kits affordable.
          </p>
        </div>
      </section>

      {/* How Gear Donation Works */}
      <section id="donate-gear" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Donating Gear is Easy</h2>
          </motion.div>
          <div className="space-y-8">
            {[
              { step: 1, title: "Collect", desc: "Gather gently used training equipment from your team, club, or home" },
              { step: 2, title: "Drop Off", desc: "Bring items to our collection location or contact us for pickup" },
              { step: 3, title: "Impact", desc: "Your gear goes directly into kits for local kids" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center text-xl font-bold mr-6 flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">All donated gear is inspected by certified aquatic safety professionals to ensure quality and safety.</p>
            <Link href="/contact#contact-form">
              <Button size="lg" style={{backgroundColor: 'var(--brand-primary)'}}>
              Contact Us to Donate Gear
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
