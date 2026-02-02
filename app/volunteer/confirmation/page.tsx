"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function VolunteerConfirmation() {
  const [toast, setToast] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Toast Notification */}
      {toast && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="fixed top-6 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
        >
          ✓ Thanks for signing up! We'll be in touch soon.
        </motion.div>
      )}

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            <div className="bg-white rounded-lg shadow-sm p-12">
              <div className="text-6xl mb-6">🎉</div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                You're All Set!
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Thanks for signing up to volunteer with Swim Access. We'll reach out when opportunities are available.
              </p>

              <div className="bg-blue-50 rounded-lg p-6 mb-8 text-left">
                <h2 className="font-semibold text-gray-900 mb-3">What's next:</h2>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>You'll receive a confirmation email shortly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>We'll send updates about upcoming volunteer opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>You can choose which events work for your schedule</span>
                  </li>
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
