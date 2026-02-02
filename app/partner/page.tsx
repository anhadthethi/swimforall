"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function PartnerPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    organization: "",
    contactName: "",
    email: "",
    phone: "",
    orgType: "",
    interests: [] as string[],
    otherInfo: "",
  });

  const toggleInterest = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(value)
        ? prev.interests.filter((v) => v !== value)
        : [...prev.interests, value],
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Partner inquiry", formData);
    setIsSubmitting(false);
    router.push("/partner/confirmation");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            Partner with Swim Access
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            Help local families access swimming by connecting kits to programs and pools.
          </motion.p>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who This Is For</h2>
            <p className="text-gray-700">We partner with organizations that can help families access pools and lessons.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["Pools and aquatic facilities", "YMCAs and recreation centers", "Schools and after-school programs", "Community organizations serving families"].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg border border-gray-200 p-4"
              >
                <div className="text-lg font-semibold text-gray-900">{item}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Partnerships Work */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Partner</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-sm p-8 space-y-4"
          >
            {[
              "We provide free beginner swim kits to children",
              "Partners help connect families to lessons or pool access",
              "Kits are distributed locally through trusted organizations",
              "We coordinate timing and logistics together",
            ].map((item) => (
              <div key={item} className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">•</span>
                <span className="text-gray-800">{item}</span>
              </div>
            ))}
            <p className="text-sm text-gray-600 border-t pt-4 mt-4">
              Partnerships are flexible and built around your existing programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We're Looking For */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We're Looking For</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-sm p-8 space-y-3"
          >
            {[
              "Accepting kit pickups or distribution",
              "Referring families to swim programs",
              "Hosting occasional kit distribution days",
              "Sharing information with families you already serve",
            ].map((item) => (
              <div key={item} className="flex items-start">
                <span className="text-teal-600 mr-3 text-xl">•</span>
                <span className="text-gray-800">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What Partners Get */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Partners Get</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-sm p-8 space-y-3"
          >
            {[
              "Free swim kits for families you serve",
              "Reduced barriers for program enrollment",
              "Recognition on our website (optional)",
              "A local, community-first collaboration",
            ].map((item) => (
              <div key={item} className="flex items-start">
                <span className="text-orange-500 mr-3 text-xl">•</span>
                <span className="text-gray-800">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partner Interest Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Partner Interest Form</h2>
            <p className="text-gray-700">We'll review your submission and follow up to explore a partnership.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-sm p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Organization Name *</label>
                <Input
                  required
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Contact Name *</label>
                  <Input
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Organization Type *</label>
                  <Input
                    required
                    placeholder="Pool, YMCA, school, community org"
                    value={formData.orgType}
                    onChange={(e) => setFormData({ ...formData, orgType: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">How would you like to partner? (check all that apply)</label>
                <div className="space-y-2">
                  {[
                    "Accepting kit pickups or distribution",
                    "Referring families to swim programs",
                    "Hosting distribution days",
                    "Sharing information with families",
                  ].map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(option)}
                        onChange={() => toggleInterest(option)}
                        className="mr-2"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Anything we should know? (optional)</label>
                <Textarea
                  rows={3}
                  value={formData.otherInfo}
                  onChange={(e) => setFormData({ ...formData, otherInfo: e.target.value })}
                  placeholder="Schedule preferences, questions, or notes"
                />
              </div>

              <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
                After submitting, our team will reach out to discuss logistics, timing, and next steps. There's no obligation—just a conversation.
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full"
                size="lg"
                style={{ backgroundColor: "var(--brand-primary)" }}
              >
                {isSubmitting ? "Sending..." : "Submit Partner Interest"}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-blue-50 rounded-lg p-8 text-center"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">What happens after you submit</h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              After submitting, our team will reach out to discuss logistics, timing, and next steps. There's no obligation—just a conversation.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
