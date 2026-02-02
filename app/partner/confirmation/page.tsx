"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PartnerConfirmation() {
  const [toast, setToast] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setToast(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {toast && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="fixed top-6 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
        >
          Thanks for reaching out—we'll be in touch soon.
        </motion.div>
      )}

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-lg shadow-sm p-12">
              <div className="text-6xl mb-6">🤝</div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Partner interest received</h1>
              <p className="text-lg text-gray-600 mb-8">
                Thank you for your interest in partnering with Swim Access. We'll follow up to discuss logistics and next steps.
              </p>

              <div className="bg-blue-50 rounded-lg p-6 mb-8 text-left">
                <h2 className="font-semibold text-gray-900 mb-3">What to expect next:</h2>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start"><span className="text-blue-600 mr-2">•</span><span>We review your submission</span></li>
                  <li className="flex items-start"><span className="text-blue-600 mr-2">•</span><span>We reach out to schedule a brief conversation</span></li>
                  <li className="flex items-start"><span className="text-blue-600 mr-2">•</span><span>We align on timing, logistics, and roles</span></li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" style={{ backgroundColor: "var(--brand-primary)" }}>
                  <Link href="/">Return Home</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/donate">Support Our Mission</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
