"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/helping-kids1.png" 
            alt="Children learning to swim with instructor" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/15"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Every Child Deserves Access to Swimming
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed">
            Removing barriers to swimming access—one kit at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" style={{backgroundColor: 'var(--brand-accent)'}}>
              <Link href="/get-kit">Request a Kit</Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Why Swimming Access Matters</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Swimming isn't just fun—it saves lives. But cost remains the biggest barrier.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <div className="text-6xl font-bold text-[var(--brand-primary)] mb-4">88%</div>
              <p className="text-gray-700 text-lg">Formal swim lessons reduce drowning risk in young children by up to 88%.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <div className="text-6xl font-bold text-[var(--brand-primary)] mb-4">$200+</div>
              <p className="text-gray-700 text-lg">Startup equipment costs put swimming lessons out of reach for many families.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <div className="text-5xl font-bold text-[var(--brand-primary)] mb-4">Our Move</div>
              <p className="text-gray-700 text-lg">Remove that barrier. One kit, one child, one step at a time.</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center text-sm text-gray-500"
          >
            <p>Data sources: CDC, American Red Cross, USA Swimming Foundation</p>
          </motion.div>
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
              { number: "1", title: "Apply", description: "Share a little about your child. We handle the rest." },
              { number: "2", title: "Receive", description: "Get everything your child needs to start swimming." },
              { number: "3", title: "Learn", description: "Start swimming lessons with confidence." }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-block w-16 h-16 bg-[var(--brand-primary)] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
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
            <p className="text-lg">That's it. Now choose your way to help — or get help.</p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            <h2 className="text-4xl font-bold mb-6">What's Your Next Step?</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
              Whether you're a family, donor, or supporter—there's a way you can be part of this.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex-1 sm:flex-none">
                <Button asChild size="lg" className="w-full sm:w-auto" style={{backgroundColor: 'var(--brand-accent)'}}>
                  <Link href="/get-kit">Get a Kit</Link>
                </Button>
                <p className="text-xs text-white/70 mt-2">For families</p>
              </div>
              <div className="flex-1 sm:flex-none">
                <Button asChild size="lg" className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                  <Link href="/donate">Donate</Link>
                </Button>
                <p className="text-xs text-white/70 mt-2">Support our mission</p>
              </div>
              <div className="flex-1 sm:flex-none">
                <Button asChild size="lg" className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                  <Link href="/get-involved">Volunteer</Link>
                </Button>
                <p className="text-xs text-white/70 mt-2">Get involved</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
