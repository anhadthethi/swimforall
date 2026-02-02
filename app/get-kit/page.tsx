"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export default function GetKit() {
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
    agree: false
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.parentName || !formData.childName || !formData.childAge || 
        !formData.email || !formData.phone || !formData.address || 
        !formData.city || !formData.state || !formData.zipCode || 
        !formData.reason || !formData.referral) {
      alert("Please fill out all required fields.");
      return;
    }

    if (formData.referral === "other" && !formData.referralOther) {
      alert("Please specify how you heard about us.");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // TODO: Integrate with Formspree or backend service
      // For now, log to console and redirect
      console.log("Kit application submitted:", formData);
      
      // Redirect to confirmation page
      setTimeout(() => {
        router.push("/kit-request-confirmation");
      }, 300);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your application. Please try again.");
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

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
            Get a Free Swim Kit
          </motion.h1>
          <motion.p
            className="text-xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Remove financial barriers to swimming lessons. Apply for a free training kit for your child ages 8-12.
          </motion.p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Kit Application Form</h2>
            
            <p className="text-center text-gray-600 mb-8 font-medium">
              This application takes just a few minutes. No documentation required—just tell us about your family and your child's interest in swimming.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Parent/Guardian Information */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Parent/Guardian Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="parentName"
                      name="parentName"
                      type="text"
                      required
                      value={formData.parentName}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                      Street Address *
                    </label>
                    <Input
                      id="address"
                      name="address"
                      type="text"
                      required
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <Input
                      id="city"
                      name="city"
                      type="text"
                      required
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                      State *
                    </label>
                    <Input
                      id="state"
                      name="state"
                      type="text"
                      required
                      value={formData.state}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">
                      ZIP Code *
                    </label>
                    <Input
                      id="zipCode"
                      name="zipCode"
                      type="text"
                      required
                      value={formData.zipCode}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Child Information */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Child Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="childName" className="block text-sm font-medium text-gray-700 mb-2">
                      Child's Full Name *
                    </label>
                    <Input
                      id="childName"
                      name="childName"
                      type="text"
                      required
                      value={formData.childName}
                      onChange={handleChange}
                    />
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

              {/* Additional Information */}
              <div className="space-y-6">
                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                    Why is your child interested in swimming? *
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

                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg" 
                  style={{backgroundColor: 'var(--brand-accent)'}}
                  disabled={isSubmitting}
                >
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

      {/* Kit Visual - Flat Lay Image */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Every Kit Tells a Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These aren't new items—they're used and loved gear from swimmers like you. Care-checked, ready to help the next generation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg overflow-hidden h-96 flex items-center justify-center"
          >
            <div className="text-center text-gray-400">
              <div className="text-6xl mb-4">📦</div>
              <p className="text-lg font-semibold mb-2">Kit Contents Photo</p>
              <p className="text-sm opacity-75">Flat-lay: goggles, cap, kickboard, fins on towel</p>
              <p className="text-xs opacity-50 mt-2">Natural lighting, soft background</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Kit Contents Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What's in the Kit?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each kit contains everything your child needs to start their swimming journey.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Optional add-in when requested by the customer: small transportation support to help families reach the pool.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { item: "Swim Goggles", desc: "UV-protective, adjustable fit for comfort", emoji: "🥽" },
              { item: "Kickboard", desc: "Essential beginner gear for building confidence", emoji: "🏊" },
              { item: "Short Training Fins", desc: "Help children feel comfortable moving through water", emoji: "🏊" },
              { item: "Silicone Cap", desc: "Comfortable swim cap for all hair types", emoji: "🏊" },
              { item: "Towel", desc: "Quick-dry microfiber towel", emoji: "🧺" },
              { item: "Getting Started Guide", desc: "Local pool info, lesson tips, and safety reminders", emoji: "📋" }
            ].map((kitItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm text-center"
              >
                <div className="text-3xl mb-3">{kitItem.emoji}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{kitItem.item}</h3>
                <p className="text-gray-600 text-sm">{kitItem.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Eligibility Requirements</h2>
            <p className="text-xl text-gray-600">
              To ensure we serve those who need it most, we have a few simple requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-green-50 p-8 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-green-800 mb-4">You May Qualify If:</h3>
              <ul className="space-y-2 text-green-700">
                <li>• Child is between 8-12 years old</li>
                <li>• Family income meets guidelines</li>
                <li>• Child is ready for standard group swim lessons</li>
                <li>• No kit received in the last 2 years</li>
                <li>• Family intends to enroll and participate in swim lessons</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">This Program May Not Be the Right Fit If:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Child is not between the ages of 8–12</li>
                <li>• Family income exceeds program guidelines</li>
                <li>• Child requires one-on-one or specialized instruction</li>
                <li>• Kit was received in the last 2 years</li>
                <li>• Family is not planning to pursue swim lessons</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center bg-blue-50 p-6 rounded-lg"
          >
            <p className="text-gray-700 text-lg">
              <strong>Not sure if you qualify?</strong> We encourage you to apply — we're happy to help connect you with the right resources.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}