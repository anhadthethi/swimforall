"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function MissionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            Our Mission
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Removing barriers so every child can learn to swim with confidence.
          </motion.p>
        </div>
      </section>

      {/* The Gap */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <div className="text-3xl font-bold text-[var(--brand-primary)] mb-3">Why Swim ?</div>
              <p className="text-gray-700 text-lg">Swimming is a life‑saving skill. Access should be simple and affordable.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <div className="text-3xl font-bold text-[var(--brand-primary)] mb-3">Challange</div>
              <p className="text-gray-700 text-lg">The biggest barrier is cost—families can’t afford the gear to start lessons.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <div className="text-3xl font-bold text-[var(--brand-primary)] mb-3">Our Solution</div>
              <p className="text-gray-700 text-lg">We provide starter kits and guidance so families can enroll with confidence.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16"
          >
            How It Works
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { number: "1", title: "Apply", description: "Tell us about your child’s needs and location." },
              { number: "2", title: "Receive", description: "We deliver a swim kit and a list of local lesson options." },
              { number: "3", title: "Learn", description: "Your child starts lessons ready and confident." }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mx-auto w-16 h-16 bg-[var(--brand-primary)] text-white rounded-full grid place-items-center text-2xl font-bold leading-none mb-4">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 max-w-3xl mx-auto"
          >
            <p className="text-lg mb-4">That’s it. Click here to Apply</p>
            <Button asChild style={{ backgroundColor: "var(--brand-accent)" }}>
              <Link href="/get-kit/request">Apply for a Kit</Link>
            </Button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
