"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const templates = {
  instagram: "Swim for all is helping remove financial barriers to swimming by providing free beginner swim kits to kids. One kit can make a real difference. 🏊‍♀️\n\nLearn more and support local families: [Your Site Link]",
  twitter: "Free swim kits for local kids. Swim for all removes cost barriers and helps families get started with swimming safely. Support the mission: [Your Site Link]",
  text: "Hey! Check out Swim for all — they provide free swim kits to help kids learn to swim. It's a local nonprofit doing amazing work. [Your Site Link]",
  email: `Hi!

I wanted to share Swim for all, a local nonprofit providing free swim kits to help kids learn to swim safely. They rely on community support—whether donations, gear, or just spreading the word—to reach families who need it most.

I thought this could be something our team/club/school would want to support or learn about.

Check it out: [Your Site Link]

Thanks!`,
};

export default function SpreadTheWordPage() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (key: keyof typeof templates) => {
    const text = templates[key];
    navigator.clipboard.writeText(text).then(() => {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            Help More Kids Learn to Swim
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Sharing Swim for all helps families discover free swim kits and lifesaving opportunities in their community.
          </motion.p>
        </div>
      </section>

      {/* Ways to Share */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Social Media */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Share on Social Media</h2>
            <p className="text-gray-700 mb-6">Use any of these ready-to-share messages.</p>

            <div className="space-y-4">
              {/* Instagram */}
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">📸 Instagram Caption</h3>
                <p className="text-sm text-gray-600 mb-3 bg-gray-50 p-3 rounded">
                  {templates.instagram}
                </p>
                <Button
                  onClick={() => handleCopy("instagram")}
                  variant="outline"
                  className="w-full"
                >
                  {copiedKey === "instagram" ? "✓ Copied" : "Copy Caption"}
                </Button>
              </div>

              {/* Twitter */}
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">𝕏 Twitter/X Post</h3>
                <p className="text-sm text-gray-600 mb-3 bg-gray-50 p-3 rounded">
                  {templates.twitter}
                </p>
                <Button
                  onClick={() => handleCopy("twitter")}
                  variant="outline"
                  className="w-full"
                >
                  {copiedKey === "twitter" ? "✓ Copied" : "Copy Post"}
                </Button>
              </div>

              {/* Text Message */}
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">💬 Text Message</h3>
                <p className="text-sm text-gray-600 mb-3 bg-gray-50 p-3 rounded">
                  {templates.text}
                </p>
                <Button
                  onClick={() => handleCopy("text")}
                  variant="outline"
                  className="w-full"
                >
                  {copiedKey === "text" ? "✓ Copied" : "Copy Message"}
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Teams, Clubs, Schools */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Share With a Team, Club, or School</h2>
            <p className="text-gray-700 mb-6">Here's an email template you can customize and send to your network.</p>

            <div className="border border-gray-200 rounded-lg p-4 mb-4">
              <p className="text-sm text-gray-600 mb-3 bg-gray-50 p-3 rounded whitespace-pre-wrap">
                {templates.email}
              </p>
              <Button
                onClick={() => handleCopy("email")}
                variant="outline"
                className="w-full"
              >
                {copiedKey === "email" ? "✓ Copied" : "Copy Email Template"}
              </Button>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-900">
                💡 <span className="font-semibold">Tip:</span> Replace [Your Site Link] with your site URL, and customize the "team/club/school" part to match who you're sending it to.
              </p>
            </div>
          </motion.div>

          {/* Take Action */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Or Take Action Yourself</h2>
            <p className="text-gray-700 mb-6">Ready to do more than just spread the word?</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button
                asChild
                className="h-auto py-6 font-semibold"
                style={{ backgroundColor: "var(--brand-accent)" }}
              >
                <Link href="/donate">
                  <div className="text-center">
                    <div className="text-2xl mb-1">💝</div>
                    Make a Donation
                  </div>
                </Link>
              </Button>

              <Button
                asChild
                className="h-auto py-6 font-semibold"
                style={{ backgroundColor: "var(--brand-primary)" }}
              >
                <Link href="/donate#donate-gear">
                  <div className="text-center">
                    <div className="text-2xl mb-1">🎒</div>
                    Donate Gear
                  </div>
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-auto py-6 font-semibold"
              >
                <Link href="/contact">
                  <div className="text-center">
                    <div className="text-2xl mb-1">👥</div>
                    Get Involved
                  </div>
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Learn More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center py-8"
          >
            <p className="text-lg text-gray-700 mb-6">
              Want to see other ways you can help?
            </p>
            <Button
              asChild
              className="h-auto py-3 px-8 font-semibold text-lg"
              style={{ backgroundColor: "var(--brand-primary)" }}
            >
              <Link href="/get-involved">
                Learn More Ways to Help
              </Link>
            </Button>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center py-12"
          >
            <p className="text-lg text-gray-700 font-semibold">
              Every share helps us reach families who may not know help exists.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Thank you for being part of the Swim for all community.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
