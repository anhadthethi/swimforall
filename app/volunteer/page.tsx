"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function VolunteerPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age16Plus: "",
    interests: [] as string[],
    availability: "",
    otherInfo: ""
  });

  const handleCheckboxChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log("Volunteer sign-up:", formData);
    
    setIsSubmitting(false);
    router.push("/volunteer/confirmation");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            Volunteer with Swim for all
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            Help us prepare and distribute swim kits for local children—no experience required.
          </motion.p>
        </div>
      </section>

      {/* What Volunteers Do */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Volunteers Do</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-sm p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-start">
                <div className="text-2xl mr-3">📦</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Kit assembly and packing</h3>
                  <p className="text-gray-600 text-sm">Sort and pack swim gear into ready-to-go kits</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-2xl mr-3">✅</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Sorting and inspecting donated gear</h3>
                  <p className="text-gray-600 text-sm">Check quality and organize donated equipment</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-2xl mr-3">🚚</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Distribution day support</h3>
                  <p className="text-gray-600 text-sm">Hand out kits, help with setup, and greet families</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-2xl mr-3">📢</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Outreach support</h3>
                  <p className="text-gray-600 text-sm">Connect with schools, pools, and community centers</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-2xl mr-3">💻</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Occasional admin or social media help</h3>
                  <p className="text-gray-600 text-sm">Optional support for communications and logistics</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 border-t pt-4 mt-4">
              Most volunteer opportunities are short, local, and scheduled in advance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What to Expect</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-blue-50 rounded-lg p-8"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">What volunteering looks like</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">•</span>
                <span className="text-gray-700">Opportunities are shared by email</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">•</span>
                <span className="text-gray-700">Most events last 1–3 hours</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">•</span>
                <span className="text-gray-700">You choose what you sign up for</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">•</span>
                <span className="text-gray-700">Volunteers are always supervised</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">•</span>
                <span className="text-gray-700">No swim coaching required</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Sign-Up Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sign Up to Volunteer</h2>
            <p className="text-gray-600">
              Tell us a little about yourself and we'll reach out when opportunities are available.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-sm p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <Input
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <Input
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </div>
              </div>

              {/* Contact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone <span className="text-gray-500">(optional)</span>
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              {/* Age Confirmation */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Are you 16 or older? *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      required
                      value="yes"
                      checked={formData.age16Plus === "yes"}
                      onChange={(e) => setFormData({ ...formData, age16Plus: e.target.value })}
                      className="mr-2"
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      required
                      value="no"
                      checked={formData.age16Plus === "no"}
                      onChange={(e) => setFormData({ ...formData, age16Plus: e.target.value })}
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
              </div>

              {/* Interests */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How would you like to help? (check all that apply)
                </label>
                <div className="space-y-2">
                  {[
                    "Kit assembly and packing",
                    "Sorting donated gear",
                    "Distribution events",
                    "Outreach and community connections",
                    "Admin or social media support"
                  ].map((interest) => (
                    <label key={interest} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest)}
                        onChange={() => handleCheckboxChange(interest)}
                        className="mr-2"
                      />
                      {interest}
                    </label>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Availability
                </label>
                <div className="flex flex-wrap gap-4">
                  {["Weekends", "Weekdays", "Flexible"].map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="radio"
                        value={option}
                        checked={formData.availability === option}
                        onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                        className="mr-2"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Anything else we should know? <span className="text-gray-500">(optional)</span>
                </label>
                <Textarea
                  rows={3}
                  value={formData.otherInfo}
                  onChange={(e) => setFormData({ ...formData, otherInfo: e.target.value })}
                  placeholder="Special skills, accessibility needs, schedule constraints, etc."
                />
              </div>

              {/* Footer Note */}
              <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
                We'll reach out when volunteer opportunities are available. No obligation.
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full"
                size="lg"
                style={{ backgroundColor: "var(--brand-primary)" }}
              >
                {isSubmitting ? "Submitting..." : "Sign Up to Volunteer"}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-blue-50 rounded-lg p-8 text-center"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">What happens after you sign up</h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              After signing up, you'll receive occasional emails about upcoming volunteer opportunities. 
              You can choose which ones to join—no long-term commitment required.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
