"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export default function GetKitRequestPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    childAge: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    reason: "",
    referral: "",
    referralOther: "",
    agree: false,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.parentName ||
      !formData.childName ||
      !formData.childAge ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.city ||
      !formData.state ||
      !formData.zipCode ||
      !formData.reason ||
      !formData.referral
    ) {
      alert("Please fill out all required fields.");
      return;
    }

    if (formData.referral === "other" && !formData.referralOther) {
      alert("Please specify how you heard about us.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/kit-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.error || "Unable to submit your application right now.");
      }

      router.push("/kit-request-confirmation");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your application. Please try again.");
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 className="text-4xl md:text-5xl font-bold mb-6" initial={{ opacity: 1 }} animate={{ opacity: 1 }}>
            Kit Application Form
          </motion.h1>
          <motion.p
            className="text-xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            This application takes just a few minutes. No documentation required—just tell us about your family and your child's interest in swimming.
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Parent/Guardian Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input id="parentName" name="parentName" type="text" required value={formData.parentName} onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                      Street Address *
                    </label>
                    <Input id="address" name="address" type="text" required value={formData.address} onChange={handleChange} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <Input id="city" name="city" type="text" required value={formData.city} onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                      State *
                    </label>
                    <Input id="state" name="state" type="text" required value={formData.state} onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">
                      ZIP Code *
                    </label>
                    <Input id="zipCode" name="zipCode" type="text" required value={formData.zipCode} onChange={handleChange} />
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Child Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="childName" className="block text-sm font-medium text-gray-700 mb-2">
                      Child's Full Name *
                    </label>
                    <Input id="childName" name="childName" type="text" required value={formData.childName} onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 mb-2">
                      Child's Age *
                    </label>
                    <select
                      id="childAge"
                      name="childAge"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={formData.childAge}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select age</option>
                      <option value="8">8 years old</option>
                      <option value="9">9 years old</option>
                      <option value="10">10 years old</option>
                      <option value="11">11 years old</option>
                      <option value="12">12 years old</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                    What's your child interested in about swimming? *
                  </label>
                  <Textarea
                    id="reason"
                    name="reason"
                    rows={4}
                    required
                    value={formData.reason}
                    onChange={handleChange}
                    placeholder="Maybe they want to learn for fun, to feel more confident in the water, or to make friends. Whatever it is—we'd love to know."
                  />
                </div>

                <div>
                  <label htmlFor="referral" className="block text-sm font-medium text-gray-700 mb-2">
                    How did you hear about us? *
                  </label>
                  <select
                    id="referral"
                    name="referral"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.referral}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="school">School</option>
                    <option value="friend">Friend/Family</option>
                    <option value="social">Social Media</option>
                    <option value="community">Community Center</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {formData.referral === "other" && (
                  <div>
                    <label htmlFor="referralOther" className="block text-sm font-medium text-gray-700 mb-2">
                      Please specify how you heard about us *
                    </label>
                    <Textarea
                      id="referralOther"
                      name="referralOther"
                      rows={3}
                      required={formData.referral === "other"}
                      value={formData.referralOther}
                      onChange={handleChange}
                      placeholder="Please tell us how you learned about our program..."
                    />
                  </div>
                )}

                <div className="flex items-start">
                  <input
                    id="agree"
                    name="agree"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1 flex-shrink-0"
                    checked={formData.agree}
                    onChange={handleChange}
                  />
                  <label htmlFor="agree" className="ml-3 block text-sm text-gray-700">
                    Yes, I'd like to receive updates about local pools, programs, and swimming tips
                  </label>
                </div>

                <Button type="submit" className="w-full" size="lg" style={{ backgroundColor: "var(--brand-accent)" }} disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Request a Kit"}
                </Button>

                <p className="text-sm text-gray-600 text-center mt-4">
                  <strong>No documentation required. No hidden costs. We'll walk you through every step.</strong>
                </p>
              </div>
            </form>

            <p className="text-sm text-gray-600 mt-4 text-center">
              We respect your privacy. Your information is only used to fulfill kit requests and provide guidance.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
