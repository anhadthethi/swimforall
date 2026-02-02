"use client";
import { motion } from "framer-motion";

export default function About() {
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
            Our Story
          </motion.h1>
          <motion.p 
            className="text-xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Started by a swimmer who saw a gap—and decided to bridge it.
          </motion.p>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-2xl leading-relaxed text-gray-700 mb-8">
              Swim Access was founded on the belief that every child deserves the opportunity to learn to swim, 
              regardless of their family's financial situation. We provide free swim equipment kits and personalized 
              guidance to families who face barriers to accessing swimming lessons and water safety education.
            </p>
            <p className="text-lg text-gray-600">
              Our mission is to remove the financial and logistical barriers that prevent children from participating 
              in swimming programs, ensuring that all kids have the chance to develop water safety skills and build confidence in the water.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder's Note Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">From the Founder</h2>
                <blockquote className="border-l-4 border-[var(--brand-primary)] pl-6 py-4">
                  <p className="text-xl text-gray-700 leading-relaxed mb-4">
                    "I grew up in swimming. I saw how quickly costs added up—and how many kids never even got the chance to start. A pair of goggles. A kickboard. A cap. These small things cost money families often don't have. But these things are the difference between a child learning a life-saving skill and sitting on the sidelines."
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    "Swim Access exists to make sure equipment isn't the reason a child stays on the sidelines. We remove the barrier so families can focus on what matters: getting their child into the water."
                  </p>
                </blockquote>
              </div>
              <div className="flex justify-center">
                <div>
                  <img 
                    src="/images/founder-coaching.png" 
                    alt="Founder coaching swimmer at pool" 
                    className="w-full max-w-xs h-80 object-cover rounded-lg shadow-lg"
                  />
                  <p className="text-xs text-gray-500 text-center mt-2 italic">
                    Founder and competitive swimmer
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Swimming Access Matters</h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg mr-4 flex-shrink-0">🛟</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Drowning Prevention</h3>
                    <p className="text-gray-600">Drowning is the leading cause of accidental death for children ages 1-14. Swimming lessons can reduce this risk by up to 88%.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-lg mr-4 flex-shrink-0">📊</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Access Disparities</h3>
                    <p className="text-gray-600">Low-income families are disproportionately affected by the high cost of swim lessons and equipment.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-lg mr-4 flex-shrink-0">💰</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Cost Barriers</h3>
                    <p className="text-gray-600">The average cost of swim lessons and equipment can be prohibitive for many families.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="/images/lilbroswiming.jpeg" 
                alt="Child learning to swim" 
                style={{ objectPosition: '50% 40%' }}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Makes Us Different</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Traditional swim programs are valuable. They weren't just designed to address the barriers that come first—the ones that keep families from ever stepping through the door.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-500">Traditional Programs</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Assume families already have equipment</li>
                <li>• Require families to navigate enrollment independently</li>
                <li>• Don't address upstream barriers like cost and logistics</li>
                <li>• Focus on instruction, not the journey to participation</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4" style={{color: 'var(--brand-primary)'}}>Our Bridge Model</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Remove the equipment barrier—no cost to families</li>
                <li>• Eliminate confusion with personalized step-by-step guidance</li>
                <li>• Connect families directly to programs they can access</li>
                <li>• Stay involved to ensure kids actually show up and thrive</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Ages 8-12, Local Families</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Why Ages 8-12?</h3>
                <p className="text-gray-600">This age range is ideal for learning swimming skills. Children are old enough to follow instructions but young enough to develop proper technique without bad habits.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Donated Equipment Works</h3>
                <p className="text-gray-600">Gently used training gear from swim teams and clubs is perfect for beginners. Our coach inspects all equipment to ensure safety and quality.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Local Focus Matters</h3>
                <p className="text-gray-600">We serve families in our local community, allowing us to provide personalized support and connect families to nearby pools and programs.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
