"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Donate() {
  const [donationType, setDonationType] = useState<"financial" | "equipment" | null>(null);
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [formData, setFormData] = useState({ firstName: "", email: "" });

  const donationAmounts = [
    { amount: 25, description: "One Child's First Kit: goggles, cap & kickboard for day one" },
    { amount: 50, description: "Kit + Ready to Swim: full kit, sanitized and prepared" },
    { amount: 100, description: "Change a Whole Family: funds 4 kids' kits plus outreach support" }
  ];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(String(amount));
    setCustomAmount("");
  };

  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDonateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with Stripe, PayPal, or Givebutter
    console.log("Donation:", { ...formData, amount: selectedAmount || customAmount });
    alert("Thank you for your donation! Payment integration coming soon.");
  };

  // Equipment donation view
  if (donationType === "equipment") {
    return (
      <div className="min-h-screen">
        <section className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Donate Swimming Equipment
            </motion.h1>
            <motion.p
              className="text-xl max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Help us build more kits by donating gently used training gear.
            </motion.p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">What We Accept</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Item Types</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-green-600 font-bold mr-3">✓</span>
                      <span>Kickboards</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 font-bold mr-3">✓</span>
                      <span>Towels</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 font-bold mr-3">✓</span>
                      <span>Goggles (clean, functional)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 font-bold mr-3">✓</span>
                      <span>Silicone swim caps</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 font-bold mr-3">✓</span>
                      <span>Swim-themed stickers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 font-bold mr-3">✓</span>
                      <span>Mesh bags</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Condition Guidelines</h3>
                  <p className="text-gray-600 mb-4">
                    We accept gently used items in working condition. All gear is inspected before distribution.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Items should be clean and free of damage. Please don't send broken or unusable equipment.
                  </p>
                </div>
              </div>

              <div className="border-t pt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">How to Donate</h3>
                <p className="text-gray-600 mb-6">
                  Ready to donate? Contact us to arrange a drop-off or pickup.
                </p>
                <div className="space-y-3">
                  <Button
                    onClick={() => setDonationType(null)}
                    className="w-full"
                    style={{ backgroundColor: "var(--brand-accent)" }}
                  >
                    Back to Donation Options
                  </Button>
                  <Link href="/contact">
                    <Button className="w-full" variant="outline">
                      Contact Us to Donate Gear
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  // Financial donation view
  if (donationType === "financial") {
    return (
      <div className="min-h-screen">
        <section className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Make a Financial Donation
            </motion.h1>
            <motion.p
              className="text-xl max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your gift directly funds swim kits and program support.
            </motion.p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <form onSubmit={handleDonateSubmit} className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Select Amount</h3>
                  <div className="space-y-3 mb-6">
                    {donationAmounts.map((item) => (
                      <button
                        key={item.amount}
                        type="button"
                        onClick={() => handleAmountSelect(item.amount)}
                        className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                          selectedAmount === String(item.amount)
                            ? "border-blue-600 bg-blue-50"
                            : "border-gray-200 hover:border-blue-300"
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-semibold text-lg text-gray-900">${item.amount}</div>
                            <div className="text-sm text-gray-600">{item.description}</div>
                          </div>
                          <div className={`w-5 h-5 rounded-full border-2 ${
                            selectedAmount === String(item.amount)
                              ? "bg-blue-600 border-blue-600"
                              : "border-gray-300"
                          }`}></div>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Or enter a custom amount
                    </label>
                    <div className="flex items-center">
                      <span className="text-gray-600 mr-2">$</span>
                      <input
                        type="number"
                        value={customAmount}
                        onChange={handleCustomAmount}
                        placeholder="Enter amount"
                        min="1"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Your Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleFormChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    type="submit"
                    disabled={!selectedAmount && !customAmount}
                    className="w-full py-3 font-semibold"
                    style={{ backgroundColor: "var(--brand-accent)" }}
                  >
                    Donate ${selectedAmount || customAmount || "—"}
                  </Button>
                  <button
                    type="button"
                    onClick={() => setDonationType(null)}
                    className="w-full py-3 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Back to Options
                  </button>
                </div>

                <div className="border-t pt-6 text-center text-sm text-gray-600 space-y-2">
                  <p>✓ Your donation goes directly toward swim kits and program support.</p>
                  <p>✓ We respect your privacy and never share your information.</p>
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  // Initial donation choice view
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
            Help Kids Make a Splash
          </motion.h1>
          <motion.p 
            className="text-xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your donation—whether gear or funds—removes barriers and opens doors.
          </motion.p>
        </div>
      </section>

      {/* Financial Contribution & Equipment Donation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <Card className="h-full text-center">
              <CardHeader>
                <CardTitle className="text-2xl">Make a Financial Contribution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">Your donation directly funds beginner swim kits, preparation, and program support.</p>
                <div className="space-y-2 flex flex-col items-center">
                  <Button
                    asChild
                    className="w-full md:w-auto"
                    style={{ backgroundColor: "var(--brand-accent)" }}
                  >
                    <Link href="/donate/checkout">Donate Now</Link>
                  </Button>
                  <p className="text-sm text-gray-600">Secure checkout. 100% of donations support Swim for all programs.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Donate Swimming Equipment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">Help us build more kits by donating gently used training gear.</p>
                <h4 className="font-semibold">What we accept:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Kickboards</li>
                  <li>Towels</li>
                  <li>Mesh bags</li>
                  <li>Goggles (clean, functional)</li>
                  <li>Silicone swim caps</li>
                  <li>Swim-themed stickers</li>
                </ul>
                <Button
                  className="w-full mt-2"
                  style={{backgroundColor: 'var(--brand-primary)'}}
                  onClick={() => setDonationType("equipment")}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Donate Swimming Equipment (now integrated side-by-side above) */}

      {/* Impact Visualization */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Impact by Amount</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm text-center"
            >
              <div className="text-4xl font-bold text-[var(--brand-primary)] mb-4">$25</div>
                <div className="text-2xl font-semibold mb-4">→</div>
                <h3 className="text-xl font-semibold mb-3">One Child's First Kit</h3>
                <ul className="text-left text-gray-600 text-sm space-y-2">
                  <li>✓ Goggles, cap & kickboard for one child</li>
                  <li>✓ Everything needed for day one</li>
                  <li>✓ Assembled & ready to go</li>
                </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm text-center border-2 border-[var(--brand-primary)]"
            >
              <div className="text-4xl font-bold text-[var(--brand-primary)] mb-4">$50</div>
                <div className="text-2xl font-semibold mb-4">→</div>
                <h3 className="text-xl font-semibold mb-3">Kit + Ready to Swim</h3>
                <ul className="text-left text-gray-600 text-sm space-y-2">
                  <li>✓ Full kit covered</li>
                  <li>✓ Cleaned, sanitized & inspected</li>
                  <li>✓ Supports kit prep and family guidance</li>
                </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm text-center"
            >
              <div className="text-4xl font-bold text-[var(--brand-primary)] mb-4">$100</div>
                <div className="text-2xl font-semibold mb-4">→</div>
                <h3 className="text-xl font-semibold mb-3">Change a Whole Family</h3>
                <ul className="text-left text-gray-600 text-sm space-y-2">
                  <li>✓ Funds 4 kids' kits</li>
                  <li>✓ Expands local outreach and operations</li>
                  <li>✓ Helps more families get started</li>
                </ul>
            </motion.div>
          </div>

          <p className="text-center text-sm text-gray-600 mt-8">
            We rely on donated equipment to keep costs low and make kits affordable.
          </p>
        </div>
      </section>

      {/* How Gear Donation Works */}
      <section id="donate-gear" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Donating Gear is Easy</h2>
          </motion.div>
          <div className="space-y-8">
            {[
              { step: 1, title: "Collect", desc: "Gather gently used training equipment from your team, club, or home" },
              { step: 2, title: "Drop Off", desc: "Bring items to our collection location or contact us for pickup" },
              { step: 3, title: "Impact", desc: "Your gear goes directly into kits for local kids" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center text-xl font-bold mr-6 flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">All donated gear is inspected by certified aquatic safety professionals to ensure quality and safety.</p>
            <Link href="/contact#contact-form">
              <Button size="lg" style={{backgroundColor: 'var(--brand-primary)'}}>
              Contact Us to Donate Gear
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
