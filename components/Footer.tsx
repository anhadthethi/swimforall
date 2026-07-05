"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // TODO: Integrate with newsletter service (Mailchimp, ConvertKit, etc.)
      console.log("Newsletter subscription:", email);
      setIsSubscribed(true);
      setEmail("");
      
      // Auto-hide notification after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }
  };

  return (
    <>
      {/* Toast Notification */}
      {isSubscribed && (
        <div className="fixed top-6 right-6 z-50 animate-in fade-in slide-in-from-right-5 duration-500">
          <div className="bg-green-50 border border-green-200 rounded-lg shadow-lg px-6 py-4 flex items-center gap-3 max-w-sm">
            <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-green-800 font-semibold text-base">Subscribed successfully</p>
          </div>
        </div>
      )}

      <footer className="bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Swim for all</h3>
              <p className="text-slate-300">
                Removing barriers to swimming access, one kit at a time.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-slate-300 hover:text-white">About</Link></li>
                <li><Link href="/get-kit" className="text-slate-300 hover:text-white">Get a Kit</Link></li>
                <li><Link href="/donate" className="text-slate-300 hover:text-white">Donate</Link></li>
                <li><Link href="/get-involved" className="text-slate-300 hover:text-white">Get Involved</Link></li>
                <li><Link href="/contact" className="text-slate-300 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-300 hover:text-white">Instagram</a>
              </div>
              <div className="mt-4">
                <p className="text-slate-300 mb-2">Subscribe to our newsletter</p>
                <form onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-2 px-3 py-2 bg-slate-700 text-white rounded w-full"
                  />
                  <button
                    type="submit"
                    className="mt-2 w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-300">
              &copy; 2026 Swim for all. All rights reserved.{" "}
              <span className="mx-2">|</span>
              <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
              <span className="mx-2">|</span>
              <Link href="/terms" className="hover:text-white">Terms of Service</Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
