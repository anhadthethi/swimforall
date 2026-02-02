"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    subjectOther: "",
    message: ""
  });
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "success" | "error">("idle");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with Formspree or similar
    console.log("Contact form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const handleNewsletterSubmit = async () => {
    if (!newsletterEmail) {
      setNewsletterStatus("error");
      return;
    }
    // Replace this with a real newsletter service (e.g., Mailchimp/ConvertKit)
    console.log("Newsletter subscribe:", newsletterEmail);
    setNewsletterStatus("success");
    setNewsletterEmail("");
    setTimeout(() => setNewsletterStatus("idle"), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
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
            Get in Touch
          </motion.h1>
          <motion.p
            className="text-xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Have questions about our program? Want to partner with us? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
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
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="kit">Kit Request</option>
                    <option value="donation">Donation Question</option>
                    <option value="partnership">Partnership</option>
                    <option value="volunteer">Volunteer</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                {formData.subject === "other" && (
                  <div>
                    <label htmlFor="subjectOther" className="block text-sm font-medium text-gray-700 mb-2">
                      Please specify *
                    </label>
                    <Textarea
                      id="subjectOther"
                      name="subjectOther"
                      rows={3}
                      required={formData.subject === "other"}
                      value={formData.subjectOther}
                      onChange={handleChange}
                      placeholder="Please describe the subject of your inquiry..."
                    />
                  </div>
                )}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg" style={{backgroundColor: 'var(--brand-primary)'}}>
                  Send Message
                </Button>
                <p className="text-sm text-gray-600 text-center mt-4">
                  <strong>We usually respond within 24 hours.</strong>
                </p>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <span className="text-2xl">📧</span>
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-600">info@swimaccess.org</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-600">(555) 123-SWIM</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-600">
                        123 Water Street<br />
                        Swim City, SC 12345
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Ways to Reach Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Other Ways to Reach Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with us through social media or join our community events.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center h-full"
            >
              <div className="bg-white p-8 rounded-lg shadow-sm h-full flex flex-col">
                <span className="text-4xl mb-4 block">📘</span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Facebook</h3>
                <p className="text-gray-600 mb-4">Follow us for updates and community stories.</p>
                <div className="mt-auto">
                  <Button variant="outline" style={{borderColor: 'var(--brand-primary)', color: 'var(--brand-primary)'}}>
                    Follow Us
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center h-full"
            >
              <div className="bg-white p-8 rounded-lg shadow-sm h-full flex flex-col">
                <span className="text-4xl mb-4 block">📷</span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Instagram</h3>
                <p className="text-gray-600 mb-4">See our impact through photos and videos.</p>
                <div className="mt-auto">
                  <Button variant="outline" style={{borderColor: 'var(--brand-primary)', color: 'var(--brand-primary)'}}>
                    Follow Us
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center h-full"
            >
              <div className="bg-white p-8 rounded-lg shadow-sm h-full flex flex-col">
                <span className="text-4xl mb-4 block">📰</span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Newsletter</h3>
                <p className="text-gray-600 mb-4">Stay updated with our monthly newsletter.</p>
                <div className="space-y-3 mt-auto">
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    value={newsletterEmail}
                    onChange={(e) => {
                      setNewsletterEmail(e.target.value);
                      setNewsletterStatus("idle");
                    }}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    style={{borderColor: 'var(--brand-primary)', color: 'var(--brand-primary)'}}
                    onClick={handleNewsletterSubmit}
                  >
                    Subscribe
                  </Button>
                  {newsletterStatus === "success" && (
                    <p className="text-sm text-green-600">Subscribed! We'll keep you posted.</p>
                  )}
                  {newsletterStatus === "error" && (
                    <p className="text-sm text-red-600">Please enter an email.</p>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="contact-form" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our program.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How do I apply for a swim kit?",
                answer: "Visit our Get a Kit page and fill out the application form. We'll review your application and contact you within 2-3 business days."
              },
              {
                question: "Is donated equipment safe for children?",
                answer: (
                  <>
                    Yes. All donated gear is carefully inspected, cleaned, and sanitized before being included in a kit. Any items that do not meet safety or quality standards are not used. See how we prep kits on our <Link href="/donate" className="text-blue-600 hover:underline">Donate</Link> page.
                  </>
                )
              },
              {
                question: "How are donations used?",
                answer: (
                  <>
                    Monetary donations fund swim kits, cleaning and preparation, and local transportation for distribution. We rely on donated equipment whenever possible to keep costs low and impact high—see the breakdown on <Link href="/donate" className="text-blue-600 hover:underline">Donate</Link>.
                  </>
                )
              },
              {
                question: "When will kits be distributed?",
                answer: (
                  <>
                    Kits are distributed during scheduled local distribution periods. Approved applicants will be notified by email with pickup or delivery details—apply on <Link href="/get-kit" className="text-blue-600 hover:underline">Get a Kit</Link>.
                  </>
                )
              },
              {
                question: "What areas do you serve?",
                answer: "We currently serve local families in our community and plan to expand as partnerships and resources grow."
              },
              {
                question: "Who can volunteer?",
                answer: (
                  <>
                    Volunteers may include students, parents, coaches, and community members. Opportunities vary by event and availability—see current roles on <Link href="/volunteer" className="text-blue-600 hover:underline">Volunteer</Link>.
                  </>
                )
              },
              {
                question: "Is Swim Access a nonprofit organization?",
                answer: (
                  <>
                    Swim Access is a community-based initiative focused on increasing access to swimming resources. We operate with transparency and reinvest all donations directly into our programs. Learn more on <Link href="/about" className="text-blue-600 hover:underline">About</Link>.
                  </>
                )
              },
              {
                question: "What age groups do you serve?",
                answer: (
                  <>
                    We provide free swim kits to children ages 8-12 who meet our eligibility criteria and are ready to begin swimming lessons. Details on <Link href="/get-kit" className="text-blue-600 hover:underline">Get a Kit</Link>.
                  </>
                )
              },
              {
                question: "How can I donate equipment?",
                answer: (
                  <>
                    Contact us through the form above or visit our <Link href="/donate" className="text-blue-600 hover:underline">Donate</Link> page to learn about equipment donation options and drop-off locations.
                  </>
                )
              },
              {
                question: "Do you offer swimming lessons?",
                answer: "We provide the equipment needed to start lessons, but we partner with local swim schools and community centers for actual instruction."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm cursor-pointer"
                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                {openFaqIndex === index && (
                  <motion.p
                    className="text-gray-600 mt-2"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}