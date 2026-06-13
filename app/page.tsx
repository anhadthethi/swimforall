"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
          <div className="absolute inset-0 bg-black/35"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Swim Access for Every Child
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-95 leading-relaxed">
            We remove the upfront costs that keep kids out of lessons by providing swim gear kits
            and connecting families to local programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" style={{backgroundColor: 'var(--brand-accent)'}}>
              <Link href="/donate">Donate to Fund a Kit</Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
              <Link href="/get-kit">Request a Kit</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* What We Provide */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-2xl font-bold text-[var(--brand-primary)]">Swim Gear Kits</p>
              <p className="text-gray-600">Goggles, cap, kickboard, towel, stickers, and a mesh bag.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-2xl font-bold text-[var(--brand-primary)]">Guided Start</p>
              <p className="text-gray-600">Clear steps and local options so families can begin quickly.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-2xl font-bold text-[var(--brand-primary)]">Community Partners</p>
              <p className="text-gray-600">We work with pools, YMCAs, schools, and local programs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Gap */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">The Gap We Close</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Swimming saves lives. The biggest barrier is cost—families can’t afford the gear to start lessons.
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
              <div className="text-3xl font-bold text-[var(--brand-primary)] mb-3">Safety First</div>
              <p className="text-gray-700 text-lg">Swimming is a life‑saving skill. Access should be simple and affordable.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <div className="text-3xl font-bold text-[var(--brand-primary)] mb-3">Upfront Costs</div>
              <p className="text-gray-700 text-lg">Gear and fees add up fast and stop families before they start.</p>
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
            <p className="text-lg">That’s it. Choose how you want to help—or get help.</p>
          </motion.div>
        </div>
      </section>

      {/* Early Launch Focus */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Early Launch Focus</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We’re launching with a small, local footprint and building from there.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <p className="text-2xl font-bold text-[var(--brand-primary)] mb-2">Build Starter Kits</p>
              <p className="text-gray-600">Assemble complete, ready‑to‑use kits for first‑time swimmers.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <p className="text-2xl font-bold text-[var(--brand-primary)] mb-2">Support Families</p>
              <p className="text-gray-600">Provide clear guidance and local options to start lessons.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <p className="text-2xl font-bold text-[var(--brand-primary)] mb-2">Grow Partnerships</p>
              <p className="text-gray-600">Work with pools and community groups to expand access.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            <h2 className="text-4xl font-bold mb-6">Choose Your Next Step</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
              Families can get help fast. Donors can fund kits immediately. Volunteers can expand reach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex-1 sm:flex-none">
                <Button asChild size="lg" className="w-full sm:w-auto" style={{backgroundColor: 'var(--brand-accent)'}}>
                  <Link href="/donate">Donate</Link>
                </Button>
                <p className="text-xs text-white/70 mt-2">Support our mission</p>
              </div>
              <div className="flex-1 sm:flex-none">
                <Button asChild size="lg" className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                  <Link href="/get-kit">Get a Kit</Link>
                </Button>
                <p className="text-xs text-white/70 mt-2">For families</p>
              </div>
              <div className="flex-1 sm:flex-none flex flex-col items-center justify-center">
                <Link href="/get-involved" className="text-white underline underline-offset-4 text-sm">
                  Volunteer or partner with us
                </Link>
                <p className="text-xs text-white/70 mt-2">Grow local access</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
