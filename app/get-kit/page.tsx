"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function GetKit() {
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
            Get a Free Swim Kit
          </motion.h1>
          <motion.p
            className="text-xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Remove financial barriers to swimming lessons. Apply for a free training kit for your child ages 8-12.
          </motion.p>
        </div>
      </section>

      {/* Kit Visual - Flat Lay Image */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Every Kit Tells a Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These aren't new items—they're used and loved gear from swimmers like you. Care-checked, ready to help the next generation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-200 p-3"
          >
            <div className="aspect-[3/4] bg-gray-50 rounded-xl overflow-hidden">
              <img
                src="/images/kit-contents-flatlay.png"
                alt="Swim kit contents including towel, kickboard, goggles, swim cap, stickers, and guide"
                className="w-full h-full object-contain p-3"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Kit Contents Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What's in the Kit?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each kit contains everything your child needs to start their swimming journey.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Kits include swim essentials and a getting-started guide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { item: "Swim Goggles", desc: "UV-protective, adjustable fit for comfort", emoji: "🥽" },
              { item: "Kickboard", desc: "Essential beginner gear for building confidence", emoji: "🏊" },
              { item: "Towel", desc: "Quick-dry microfiber towel", emoji: "🧺" },
              { item: "Silicone Cap", desc: "Comfortable swim cap for all hair types", emoji: "🏊" },
              { item: "Stickers", desc: "Fun swim-themed stickers kids can use on bottles or notebooks", emoji: "🩵" },
              { item: "Getting Started Guide", desc: "Local pool info, lesson tips, and safety reminders", emoji: "📋" }
            ].map((kitItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm text-center"
              >
                <div className="text-3xl mb-3">{kitItem.emoji}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{kitItem.item}</h3>
                <p className="text-gray-600 text-sm">{kitItem.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Eligibility Requirements</h2>
            <p className="text-xl text-gray-600">
              To ensure we serve those who need it most, we have a few simple requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-green-50 p-8 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-green-800 mb-4">You May Qualify If:</h3>
              <ul className="space-y-2 text-green-700">
                <li>• Child is between 8-12 years old</li>
                <li>• Family income meets guidelines</li>
                <li>• Child is ready for standard group swim lessons</li>
                <li>• No kit received in the last 2 years</li>
                <li>• Family intends to enroll and participate in swim lessons</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">This Program May Not Be the Right Fit If:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Child is under 8 or over 12</li>
                <li>• Family income exceeds program guidelines</li>
                <li>• Child requires one-on-one or specialized instruction</li>
                <li>• Kit was received in the last 2 years</li>
                <li>• Family is not planning to pursue swim lessons</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center bg-blue-50 p-6 rounded-lg"
          >
            <p className="text-gray-700 text-lg">
              <strong>Not sure if you qualify?</strong> We encourage you to apply — we're happy to help connect you with the right resources.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Application Form Link */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Kit Application Form</h2>
            
            <p className="text-center text-gray-600 mb-8 font-medium">
              This application takes just a few minutes. No documentation required—just tell us about your family and your child's interest in swimming.
            </p>
            <div className="text-center">
              <Button asChild size="lg" style={{backgroundColor: 'var(--brand-accent)'}}>
                <Link href="/get-kit/request">Request a Kit</Link>
              </Button>
              <p className="text-sm text-gray-600 text-center mt-4">
                <strong>No documentation required. No hidden costs. We'll walk you through every step.</strong>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}