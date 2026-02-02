"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function GetInvolved() {
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
            Join the Movement
          </motion.h1>
          <motion.p 
            className="text-xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            Whether you swim, coach, or simply care—you can make a difference.
          </motion.p>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ways to Help</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🎒", title: "Donate Gear", desc: "Give gently used swim equipment", link: "/donate" },
              { icon: "🤝", title: "Volunteer", desc: "Help with kit assembly and events", link: "#volunteer" },
              { icon: "📢", title: "Spread the Word", desc: "Share our mission with your network", link: "/spread-the-word" },
              { icon: "🤝", title: "Partner With Us", desc: "Connect pools and programs", link: "#partner" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center">
                  <CardHeader>
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{item.desc}</CardDescription>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={item.link}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section id="volunteer" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🔥 We're currently preparing kits for our next local distribution!
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Volunteer Opportunities</h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Kit assembly days",
                  "Distribution event support",
                  "Gear sorting and quality control",
                  "Social media and marketing help",
                  "Outreach to schools and community centers",
                  "Administrative and organizational support"
                ].map((opportunity, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-3 h-3 bg-teal-500 rounded-full mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">{opportunity}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg h-96 flex items-center justify-center"
            >
              <div className="text-center text-gray-400">
                <div className="text-6xl mb-4">👥</div>
                <p className="text-lg font-semibold mb-2">Volunteer Team Photo</p>
                <p className="text-sm opacity-75">Group collaborating, warm & inclusive</p>
              </div>
            </motion.div>
          </div>

          <div className="text-center">
            <Button asChild size="lg" style={{backgroundColor: 'var(--brand-primary)'}}>
              <Link href="/volunteer">Sign Up to Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section id="partner" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Are You a Pool, YMCA, or Community Organization?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Partner with us to help more families access swimming programs in your community.
            </p>
            <Button asChild size="lg" style={{backgroundColor: 'var(--brand-secondary)'}}>
              <Link href="/partner">Let's Talk Partnership</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
